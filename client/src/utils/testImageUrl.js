// Test suite for exported getBaseUrl() and getImageUrl() utilities
// Uses Vite's native module loader to resolve import.meta.env without modifying production code.
import { createServer } from "vite";
import { fileURLToPath } from "url";

const clientRoot = fileURLToPath(new URL("../../", import.meta.url));

const testScenarios = [
  {
    name: "Subdomain API URL preserves subdomain host without truncation",
    apiUrl: "https://api.theplotone.com/api",
    path: "/uploads/properties/plot1.webp",
    expectedBaseUrl: "https://api.theplotone.com",
    expectedImageUrl: "https://api.theplotone.com/uploads/properties/plot1.webp",
  },
  {
    name: "Port 6061 custom backend URL",
    apiUrl: "http://localhost:6061/api",
    path: "uploads/properties/plot1.webp",
    expectedBaseUrl: "http://localhost:6061",
    expectedImageUrl: "http://localhost:6061/uploads/properties/plot1.webp",
  },
  {
    name: "API URL with trailing slash",
    apiUrl: "http://localhost:6061/api/",
    path: "/uploads/banners/banner1.webp",
    expectedBaseUrl: "http://localhost:6061",
    expectedImageUrl: "http://localhost:6061/uploads/banners/banner1.webp",
  },
  {
    name: "External full URL remains untouched by getImageUrl",
    apiUrl: "http://localhost:6061/api",
    path: "https://external-cdn.com/sample.jpg",
    expectedBaseUrl: "http://localhost:6061",
    expectedImageUrl: "https://external-cdn.com/sample.jpg",
  },
  {
    name: "Null/empty path returns fallback placeholder",
    apiUrl: "http://localhost:6061/api",
    path: null,
    expectedBaseUrl: "http://localhost:6061",
    expectedImageUrl: "/properties/noimage.webp",
  },
];

console.log("Running exported getBaseUrl() and getImageUrl() verification tests via Vite SSR loader...\n");
let allPassed = true;

for (let i = 0; i < testScenarios.length; i++) {
  const tc = testScenarios[i];
  const viteServer = await createServer({
    root: clientRoot,
    configFile: false,
    define: {
      "import.meta.env.VITE_API_URL": JSON.stringify(tc.apiUrl),
    },
  });

  try {
    const { getBaseUrl } = await viteServer.ssrLoadModule("./src/utils/baseUrl.js");
    const { getImageUrl } = await viteServer.ssrLoadModule("./src/utils/imageUrl.js");

    const actualBaseUrl = getBaseUrl();
    const actualImageUrl = getImageUrl(tc.path);

    const baseUrlPassed = actualBaseUrl === tc.expectedBaseUrl;
    const imageUrlPassed = actualImageUrl === tc.expectedImageUrl;
    const passed = baseUrlPassed && imageUrlPassed;

    if (!passed) allPassed = false;
    console.log(`Test ${i + 1} [${tc.name}]: ${passed ? "PASSED" : "FAILED"}`);
    if (!baseUrlPassed) {
      console.log(`  getBaseUrl() Failed:`);
      console.log(`    Expected: ${tc.expectedBaseUrl}`);
      console.log(`    Actual:   ${actualBaseUrl}`);
    }
    if (!imageUrlPassed) {
      console.log(`  getImageUrl() Failed:`);
      console.log(`    Expected: ${tc.expectedImageUrl}`);
      console.log(`    Actual:   ${actualImageUrl}`);
    }
  } finally {
    await viteServer.close();
  }
}

if (allPassed) {
  console.log("\n✅ All exported URL utility tests passed successfully!");
  process.exit(0);
} else {
  console.error("\n❌ Some exported URL utility tests failed!");
  process.exit(1);
}
