const { describe, it, beforeEach, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { initCronJobs } = require("../utils/cronJobs");

describe("Cron Jobs Safety Guard Tests", () => {
  const originalEnv = process.env.ENABLE_CRON_JOBS;
  const originalSchedule = cron.schedule;
  let scheduledTasks = [];

  beforeEach(() => {
    scheduledTasks = [];
    // Mock cron.schedule to prevent any callback execution or side effects
    cron.schedule = (pattern, callback) => {
      scheduledTasks.push({ pattern, callback });
      return { stop: () => {}, start: () => {} };
    };
  });

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.ENABLE_CRON_JOBS;
    } else {
      process.env.ENABLE_CRON_JOBS = originalEnv;
    }
    cron.schedule = originalSchedule;
  });

  it("never connects to MongoDB during testing", () => {
    // 0 = disconnected
    assert.equal(mongoose.connection.readyState, 0, "Mongoose must remain strictly disconnected");
  });

  it("does not schedule any cron jobs when ENABLE_CRON_JOBS is unset", () => {
    delete process.env.ENABLE_CRON_JOBS;
    const mockIo = { to: () => ({ emit: () => {} }) };

    initCronJobs(mockIo);

    assert.equal(scheduledTasks.length, 0, "No cron tasks should be scheduled when unset");
  });

  it("does not schedule any cron jobs when ENABLE_CRON_JOBS is 'false'", () => {
    process.env.ENABLE_CRON_JOBS = "false";
    const mockIo = { to: () => ({ emit: () => {} }) };

    initCronJobs(mockIo);

    assert.equal(scheduledTasks.length, 0, "No cron tasks should be scheduled when 'false'");
  });

  it("does not schedule any cron jobs when ENABLE_CRON_JOBS is arbitrary string", () => {
    process.env.ENABLE_CRON_JOBS = "yes";
    const mockIo = { to: () => ({ emit: () => {} }) };

    initCronJobs(mockIo);

    assert.equal(scheduledTasks.length, 0, "No cron tasks should be scheduled unless strictly 'true'");
  });

  it("registers cron jobs only when ENABLE_CRON_JOBS is strictly 'true' without executing callbacks", () => {
    process.env.ENABLE_CRON_JOBS = "true";
    const mockIo = { to: () => ({ emit: () => {} }) };

    initCronJobs(mockIo);

    assert.ok(scheduledTasks.length > 0, "Cron jobs should register when 'true'");
    // Verify expected cron patterns exist
    const patterns = scheduledTasks.map((t) => t.pattern);
    assert.ok(patterns.includes("0 0 * * *"), "Daily midnight property cleanup pattern should be registered");
    assert.ok(patterns.includes("*/5 * * * * *"), "Lead sharing timer pattern should be registered");
  });
});
