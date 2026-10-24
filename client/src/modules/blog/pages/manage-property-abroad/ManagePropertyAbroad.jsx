import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ChevronRight, User, Calendar, MessageSquare, ClipboardList } from "lucide-react";

const CANONICAL_URL = "https://theplotone.com/blog/manage-property-abroad";
const HERO_IMAGE = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80";
const WA = "https://wa.me/919403892971?text=";

const ManagePropertyAbroad = () => {
  useEffect(() => {
    // Scroll to top on mount
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="blog-detail-wrapper">
      <Helmet>
        <title>How to Manage Your Pondicherry Property from Abroad: A Complete Guide | The Plot One</title>
        <meta
          name="description"
          content="Complete guide for NRIs and overseas owners on managing Pondicherry property remotely — document storage, trusted local contacts, regular inspections, bills, tenant management, and emergency response."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta
          property="og:title"
          content="How to Manage Your Pondicherry Property from Abroad: A Complete Guide"
        />
        <meta
          property="og:description"
          content="Owning property in Pondicherry while living abroad? Learn how to organise documents, appoint trusted local contacts, inspect remotely, and handle taxes & tenants."
        />
        <meta property="og:image" content={HERO_IMAGE} />
      </Helmet>

      <style>{`
        .blog-detail-wrapper {
          --coral: #fb2c36;
          --coral-hover: #e0242c;
          --ocean: #006699;
          --navy: #1A2B4C;
          --navy-deep: #0D1B2A;
          --primary: #166aa8;
          --whatsapp: #166aa8;
          --amber-fill: #FFF3E0;
          --amber-text: #D97706;
          --blue-fill: #E6F2FA;
          --green-fill: #E6F2FA;
          --bg: #F8F9FA;
          --white: #FFFFFF;
          --ink: #1A2129;
          --gray: #667085;
          --line: #E7E9EC;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          padding-top: 100px;
        }

        .blog-detail-wrapper h1,
        .blog-detail-wrapper h2,
        .blog-detail-wrapper h3,
        .blog-detail-wrapper h4 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .blog-detail-wrapper p {
          margin: 0 0 16px;
          font-size: 1.02rem;
          color: #374151;
        }

        .blog-page {
          max-width: 1180px;
          margin: 0 auto;
          padding: 20px 5% 60px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 36px;
          align-items: start;
        }

        .blog-detail-wrapper main {
          background: transparent;
        }

        .blog-breadcrumb {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .blog-breadcrumb a {
          color: var(--gray);
          font-weight: 500;
        }
        .blog-breadcrumb a:hover {
          color: var(--ocean);
        }

        .cat-pill {
          display: inline-block;
          background: var(--blue-fill);
          color: var(--ocean);
          font-weight: 800;
          font-size: 0.72rem;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }

        h1.title {
          font-size: 2.2rem;
          line-height: 1.25;
          font-weight: 800;
          color: #0A0E14;
          margin-bottom: 20px;
        }

        .byline {
          display: flex;
          align-items: center;
          gap: 22px;
          color: var(--gray);
          font-size: 0.9rem;
          font-weight: 500;
          padding-bottom: 24px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--line);
        }
        .byline span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hero-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: 0 12px 32px rgba(13,27,42,0.12);
          margin-bottom: 32px;
        }

        .callout {
          background: var(--blue-fill);
          border-left: 4px solid var(--ocean);
          border-radius: 0 12px 12px 0;
          padding: 22px 26px;
          margin: 28px 0 34px;
        }
        .callout h4 {
          color: var(--navy-deep);
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .callout p {
          margin: 0;
          color: #334155;
          font-size: 0.98rem;
        }
        .callout strong {
          color: var(--primary);
        }

        .subsection {
          margin: 44px 0;
        }
        .subsection h3 {
          font-size: 1.4rem;
          color: var(--navy-deep);
          font-weight: 800;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .num-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
          color: var(--white);
          font-size: 1.1rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .subsection img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          margin: 16px 0;
          box-shadow: 0 8px 24px rgba(13,27,42,0.1);
        }
        .subsection p {
          color: #374151;
          font-size: 1rem;
        }

        .cta-pill-wrap {
          text-align: center;
          margin-top: 20px;
        }
        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--whatsapp);
          color: var(--white) !important;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 14px 28px;
          border-radius: 100px;
          transition: all 0.2s ease;
          box-shadow: 0 6px 18px rgba(22, 106, 168, 0.3);
        }
        .cta-pill:hover {
          background: #125a91 !important;
          color: var(--white) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(22, 106, 168, 0.4);
        }

        .subsection-plain {
          margin: 44px 0;
        }
        .subsection-plain h2 {
          font-size: 1.7rem;
          color: var(--navy-deep);
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subsection-plain img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          margin: 18px 0;
          box-shadow: 0 8px 24px rgba(13,27,42,0.1);
        }

        .cta-strip {
          background: var(--blue-fill);
          border-radius: 16px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin: 34px 0;
        }
        .cta-strip p {
          margin: 0;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--navy-deep);
        }
        .btn-solid {
          background: var(--coral);
          color: var(--white) !important;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 100px;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(251, 44, 54, 0.25);
        }
        .btn-solid:hover {
          background: var(--coral-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(251, 44, 54, 0.35);
        }

        .compare-table-wrap {
          overflow-x: auto;
          margin: 24px 0;
        }
        table.compare-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(13,27,42,0.08);
          min-width: 580px;
        }
        table.compare-table thead tr {
          background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
          color: var(--white);
        }
        table.compare-table th,
        table.compare-table td {
          padding: 14px 16px;
          text-align: left;
          font-size: 0.9rem;
        }
        table.compare-table tbody tr:nth-child(even) { background: #F3F6F9; }
        table.compare-table tbody tr:nth-child(odd) { background: var(--white); }

        .usecase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 20px 0;
        }
        .usecase-card {
          background: #F3F6F9;
          border-radius: 12px;
          padding: 20px 22px;
        }
        .usecase-card h3 {
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 10px;
          font-weight: 800;
        }
        .usecase-card p,
        .usecase-card ul {
          margin: 0;
          color: #374151;
          font-size: 0.94rem;
        }
        .usecase-card ul {
          padding-left: 20px;
          line-height: 1.8;
        }

        .mistake-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 20px 0;
        }
        .mistake-card {
          background: #FEF2F2;
          border-left: 4px solid var(--coral);
          border-radius: 0 12px 12px 0;
          padding: 18px 20px;
        }
        .mistake-card h3 {
          font-size: 1rem;
          color: var(--coral);
          margin-bottom: 6px;
          font-weight: 800;
        }
        .mistake-card p {
          margin: 0;
          color: #374151;
          font-size: 0.92rem;
        }

        .inline-checklist {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 24px;
        }
        .inline-checklist li {
          font-size: 0.95rem;
          color: #374151;
          padding: 8px 0;
          border-bottom: 1px dashed var(--line);
        }

        .success-card {
          background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%);
          border-radius: 16px;
          padding: 32px 34px;
          color: var(--white);
          margin: 32px 0;
        }
        .stars {
          color: var(--amber-text);
          font-size: 1.15rem;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }
        .success-card p.quote {
          color: #D6DEEA;
          font-size: 1.05rem;
          font-style: italic;
          margin-bottom: 16px;
        }
        .success-card .client {
          font-weight: 800;
          color: var(--white);
          font-size: 1rem;
        }
        .success-card .client span {
          display: block;
          color: #8B9AB3;
          font-weight: 500;
          font-size: 0.88rem;
          margin-top: 2px;
        }

        .faq-item {
          margin-bottom: 22px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f3f5;
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-item h3 {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 6px;
          font-weight: 800;
        }
        .faq-item p {
          margin: 0;
          color: #374151;
        }

        .final-cta {
          background: linear-gradient(135deg, #0D1B2A 0%, #1A2B4C 100%);
          border-radius: 20px;
          padding: 56px 6%;
          margin: 56px 0 10px;
          text-align: center;
        }
        .final-cta h2 {
          color: var(--white);
          font-size: 1.9rem;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .final-cta p {
          color: #C7D2E0;
          font-size: 1.05rem;
          max-width: 540px;
          margin: 0 auto 28px;
        }
        .final-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--amber-fill);
          color: #7c3e02 !important;
          font-weight: 800;
          font-size: 1rem;
          padding: 16px 36px;
          border-radius: 100px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(217, 119, 6, 0.2);
        }
        .final-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217, 119, 6, 0.3);
        }

        .blog-aside {
          position: sticky;
          top: 110px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .side-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(13,27,42,0.05);
        }
        .side-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--gray);
          margin-bottom: 14px;
        }
        .brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .brand-row .name {
          font-weight: 700;
          color: var(--navy-deep);
          font-size: 1.02rem;
        }
        .side-card .desc {
          font-size: 0.92rem;
          color: var(--gray);
          margin-bottom: 16px;
        }
        .side-divider {
          border: none;
          border-top: 1px solid var(--line);
          margin: 16px 0;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag-chip {
          background: #F1F3F5;
          color: #4B5563;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 100px;
        }
        .checklist {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .checklist li {
          padding: 8px 0;
          border-bottom: 1px dashed var(--line);
          font-size: 0.9rem;
          display: flex;
          gap: 8px;
        }
        .checklist li:last-child {
          border-bottom: none;
        }
        .side-card.consult {
          background: var(--blue-fill);
          border: none;
        }
        .side-card.consult h4 {
          color: var(--primary);
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .side-card.consult p {
          color: #374151;
          font-size: 0.92rem;
          margin-bottom: 18px;
        }
        .wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: var(--primary);
          color: var(--white) !important;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 13px 0;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .wa-btn:hover {
          background: #125a91 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .blog-page {
            grid-template-columns: 1fr;
          }
          .blog-aside {
            position: static;
          }
          .usecase-grid,
          .mistake-grid,
          .inline-checklist {
            grid-template-columns: 1fr;
          }
          .cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          h1.title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="blog-page">
        <main>
          {/* Breadcrumb */}
          <div className="blog-breadcrumb">
            <Link to="/">
              <Home className="w-3.5 h-3.5 inline mr-1" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/blog">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span>Property Ownership Guides</span>
          </div>

          <span className="cat-pill">NRI Guide • Remote Property Management</span>

          <h1 className="title">
            How to Manage Your Pondicherry Property from Abroad: A Complete Guide
          </h1>

          <div className="byline">
            <span>
              <User className="w-4 h-4 text-slate-500" /> The Plot One Team
            </span>
            <span>
              <Calendar className="w-4 h-4 text-slate-500" /> Oct 12, 2026
            </span>
          </div>

          <img
            className="hero-img"
            src="/blog/rockbeach.webp"
            alt="Pondicherry property owned by an NRI living abroad"
          />

          <p>
            Owning property in Pondicherry while living abroad can be a good long-term investment, but
            managing it from another country comes with practical challenges. You may not be able to
            visit whenever there's a maintenance issue, and you may have difficulty coordinating with
            tenants, workers, or local authorities from a different time zone.
          </p>

          <p>
            For example, an NRI may own a residential property in Pondicherry while working in Dubai,
            Singapore, the UK, the USA, or another country. The property still needs regular attention
            even when the owner is thousands of kilometres away. The good news is you don't have to
            handle everything personally — with proper planning, local support, and regular
            communication, you can manage your Pondicherry property remotely.
          </p>

          <div className="callout">
            <h4>Quick Answer</h4>
            <p>
              If you live abroad and own property in Pondicherry, you can manage it remotely by keeping
              your documents organised, appointing a reliable local contact, monitoring the property
              regularly, handling taxes and utilities on time, and using professional property management
              when needed. A clear system for inspections, maintenance, tenants, and emergencies can make
              remote property ownership much easier.
            </p>
          </div>

          {/* Section 1 */}
          <div className="subsection">
            <h3>
              <span className="num-badge">1</span> Keep All Your Property Documents Organised
            </h3>
            <img
              src="https://www.kanakkupillai.com/learn/wp-content/uploads/2023/09/Property-Document-Verification.jpg"
              alt="Organising a digital folder of property documents"
            />
            <p>
              Create a digital folder with copies of the sale deed, Patta-related documents, Encumbrance
              Certificate, property tax records, approved plans, utility bills, maintenance records, and
              rental agreement if applicable. The Puducherry Revenue Department provides services related
              to patta transfer or mutation, land survey, and document registration, and the Registration
              Department offers online services for Encumbrance Certificates and certified copies.
              Organise it simply: Property Documents, Tax Records, Utility Bills, Maintenance, Rental
              Documents, Property Photos, Legal Documents, Important Contacts.
            </p>
            <div className="cta-pill-wrap">
              <a
                className="cta-pill"
                href={`${WA}${encodeURIComponent("Hi, I'm abroad and need help organising my Pondicherry property documents.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Ask About Document Support
              </a>
            </div>
          </div>

          {/* Section 2 */}
          <div className="subsection">
            <h3>
              <span className="num-badge">2</span> Appoint a Trusted Local Contact
            </h3>
            <img
              src="https://content.jdmagicbox.com/comp/def_content/property-consultants/shutterstock-375747526-property-consultants-6-kem4e.jpg"
              alt="Trusted local contact inspecting a property on behalf of the owner"
            />
            <p>
              A reliable person in Pondicherry — a trusted family member, close relative, professional
              property manager, or reliable local representative — can visit the property and communicate
              with you when something requires attention. For example, if a water leak happens, a local
              contact can inspect it, coordinate with a plumber, and share photos or videos. However,
              don't give unlimited authority without clear instructions — define what the person can
              handle and which decisions require your approval.
            </p>
            <div className="cta-pill-wrap">
              <a
                className="cta-pill"
                href={`${WA}${encodeURIComponent("Hi, I'd like a trusted local contact for my Pondicherry property.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Ask About Local Representation
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <div className="subsection">
            <h3>
              <span className="num-badge">3</span> Inspect the Property Regularly
            </h3>
            <img
              src="https://content.jdmagicbox.com/comp/def_content/residential-property-inspection-services/eb2nvubh6w-residential-property-inspection-services-3-iw9s3.jpg"
              alt="Regular inspection of a vacant plot or house in Pondicherry"
            />
            <p>
              Remote ownership doesn't mean you should only check the property when there's a problem. For
              a vacant plot, inspect boundary condition, access, vegetation, and encroachment concerns. For
              a house, check doors, windows, plumbing, electrical systems, water supply, roof condition, and
              general cleanliness. Ask the person visiting to send photographs or videos after every
              inspection for a better understanding of the actual condition.
            </p>
            <div className="cta-pill-wrap">
              <a
                className="cta-pill"
                href={`${WA}${encodeURIComponent("Hi, I'd like regular inspections arranged for my Pondicherry property.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Ask About Regular Inspections
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <div className="subsection">
            <h3>
              <span className="num-badge">4</span> Keep Property Taxes and Bills Updated
            </h3>
            <img
              src="https://content.jdmagicbox.com/v2/comp/hyderabad/u2/040pxx40.xx40.160720155712.b3u2/catalogue/srn-corporate-solutions-sanjeeva-reddy-nagar-hyderabad-tax-consultants-phoewok3lj.jpg"
              alt="Tracking property tax and utility bill payments remotely"
            />
            <p>
              Puducherry's Local Administration Department lists property tax among the revenue sources of
              local bodies. Living abroad, it can be easy to miss a payment because of time-zone differences
              or simply not being physically present. Create reminders for property tax, electricity bills,
              water charges, maintenance payments, rental-related payments, and insurance where applicable —
              and keep receipts in your digital property folder. The exact taxes, charges, due dates, and
              procedures can depend on the property and local authority.
            </p>
            <div className="cta-pill-wrap">
              <a
                className="cta-pill"
                href={`${WA}${encodeURIComponent("Hi, I'd like help tracking taxes and bills for my Pondicherry property.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Ask About Tax & Bill Tracking
              </a>
            </div>
          </div>

          {/* Deciding Who Handles Maintenance */}
          <div className="subsection-plain">
            <h2>Deciding Who Handles Maintenance</h2>
            <p>
              Maintenance becomes one of the biggest practical challenges when you live abroad. Imagine a
              plumbing problem occurs — someone locally needs to inspect the problem, contact a plumber, get
              an estimate, share details with you, get your approval, coordinate the work, and send
              photographs after completion. A local property management service can coordinate these
              activities depending on the agreement, but make sure you understand the difference between
              management charges and actual maintenance expenses — plumber charges, materials, cleaning,
              and painting may be separate. Always confirm the arrangement before work begins.
            </p>

            <div className="cta-strip">
              <p>Want a simple remote property management system for your Pondicherry property?</p>
              <a
                className="btn-solid"
                href={`${WA}${encodeURIComponent("Hi, I'd like help setting up remote property management for Pondicherry.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* If You Have Tenants, Set Clear Rules */}
          <div className="subsection-plain">
            <h2>If You Have Tenants, Set Clear Rules</h2>
            <p>
              Managing a rental property from abroad requires additional planning. Your tenant should know
              who to contact for maintenance issues — instead of contacting you directly for every small
              problem, a local representative or property manager can handle routine matters: maintenance
              requests, inspections, rent follow-up, utility issues, emergencies, and communication with
              local workers. Your rental agreement should clearly define responsibilities, and you should
              maintain proper records of rental payments, expenses, repairs, and communication.
            </p>
          </div>

          {/* Create an Emergency Plan */}
          <div className="subsection-plain">
            <h2>Create an Emergency Plan</h2>
            <p>
              An emergency can happen when you're asleep or unavailable because of your location and time zone.
              Create a simple emergency contact list — property manager, family contact, plumber, electrician,
              tenant, legal professional, and building/security contact — with name and phone number for each.
              Keep this list in your phone and digital property folder, and make sure your local
              representative knows what to do if there's an urgent issue.
            </p>
          </div>

          {/* Use Technology to Monitor the Property */}
          <div className="subsection-plain">
            <h2>Use Technology to Monitor the Property</h2>
            <img
              src="https://www.digi.com/getattachment/Blog/Industrial-Remote-Monitoring-What-it-is-Benefits-a/GettyImages-889236816-1280x720.jpg?lang=en-US"
              alt="Using video calls and digital tools to remotely monitor a property"
            />
            <p>
              Technology can make remote property management much easier — video calls, WhatsApp, email,
              cloud storage, digital payment records, property photographs, and security cameras where
              appropriate. After a monthly inspection, the local representative can send a simple record:
              Visit Date → Property Photos → Current Condition → Issues Found → Action Required. This creates
              something you can review from abroad. Don't install or use monitoring equipment without
              considering privacy, tenant rights, building rules, and applicable laws.
            </p>
          </div>

          {/* Keep Your Property Records Updated */}
          <div className="subsection-plain">
            <h2>Keep Your Property Records Updated</h2>
            <p>
              Periodically review whether your records are complete and consistent — ownership documents,
              property identification details, tax records, Patta-related records, Encumbrance Certificate,
              survey information, rental documents, and maintenance records. The Government of Puducherry
              identifies registration, land survey, settlement, and patta transfer or mutation among the
              services handled through the Revenue and related departments, and the Registration Department's
              online system provides Encumbrance Certificates and certified copies. If you're planning to sell,
              transfer, develop, or otherwise make a major change, speak with the appropriate legal or
              property professional before taking action.
            </p>
          </div>

          {/* Understanding When You Need Professional Help */}
          <div className="subsection-plain">
            <h2>Understanding When You Need Professional Help</h2>
            <p>
              You don't necessarily need professional property management for every property. If you own a
              small vacant plot with a trusted family member nearby, occasional local support may be enough.
              Professional support becomes more useful when you live abroad permanently, own multiple
              properties, your property is rented, regular inspections are required, you don't have trusted
              family nearby, maintenance needs frequent coordination, you need regular reports, or you're
              planning to sell or develop the property.
            </p>
          </div>

          {/* Table */}
          <div className="subsection-plain">
            <h2>DIY vs Professional Property Management for Overseas Owners</h2>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Self-Management</th>
                    <th>Professional Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Property visits</td>
                    <td>Family/friend or owner</td>
                    <td>Local representative</td>
                  </tr>
                  <tr>
                    <td>Maintenance</td>
                    <td>Owner coordinates</td>
                    <td>Manager coordinates</td>
                  </tr>
                  <tr>
                    <td>Tenant communication</td>
                    <td>Owner handles</td>
                    <td>May be handled by manager</td>
                  </tr>
                  <tr>
                    <td>Emergency response</td>
                    <td>Depends on local contact</td>
                    <td>May have local support</td>
                  </tr>
                  <tr>
                    <td>Regular reporting</td>
                    <td>Owner collects updates</td>
                    <td>Can be part of service</td>
                  </tr>
                  <tr>
                    <td>Vendor coordination</td>
                    <td>Owner handles</td>
                    <td>May be included</td>
                  </tr>
                  <tr>
                    <td>Documentation organisation</td>
                    <td>Owner handles</td>
                    <td>Support may be available</td>
                  </tr>
                  <tr>
                    <td>Suitable for</td>
                    <td>Simple properties with local support</td>
                    <td>Owners living abroad or managing multiple properties</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "0.92rem" }}>
              The services offered by each provider can vary. Always confirm exactly what is included before hiring.
            </p>
          </div>

          {/* Be Careful With Legal and Financial Decisions */}
          <div className="subsection-plain">
            <h2>Be Careful With Legal and Financial Decisions</h2>
            <p>
              Managing a property from abroad is not only about maintenance — you may also need to make
              decisions related to property sale, rental agreements, Power of Attorney, property transfer,
              construction, loans, tax matters, registration, and inheritance. These matters can have legal or
              financial implications, so don't rely only on informal advice from friends or relatives. For
              important transactions, consult the appropriate lawyer, tax professional, registration
              professional, or other qualified expert. If you need registration-related services in Puducherry,
              the government provides online information and registration appointment services.
            </p>
          </div>

          {/* Plan for Your Next Visit to Pondicherry */}
          <div className="subsection-plain">
            <h2>Plan for Your Next Visit to Pondicherry</h2>
            <div className="usecase-grid">
              <div className="usecase-card">
                <h3>During Your Visit, You Can</h3>
                <ul>
                  <li>Inspect the property</li>
                  <li>Review documents</li>
                  <li>Meet your local representative</li>
                  <li>Check maintenance work</li>
                </ul>
              </div>
              <div className="usecase-card">
                <h3>Also Worth Doing</h3>
                <ul>
                  <li>Meet tenants, if applicable</li>
                  <li>Review outstanding issues</li>
                  <li>Update photographs</li>
                  <li>Discuss future plans</li>
                </ul>
              </div>
            </div>
            <p>
              If you own land around Pondicherry, Cuddalore, Villupuram, or Tindivanam, you can also review
              nearby development and accessibility before making future investment decisions.
            </p>
          </div>

          {/* Common Mistakes Overseas Property Owners Should Avoid */}
          <div className="subsection-plain">
            <h2>Common Mistakes Overseas Property Owners Should Avoid</h2>
            <div className="mistake-grid">
              <div className="mistake-card">
                <h3>Not Visiting or Inspecting</h3>
                <p>Even with local support, owners should not completely ignore their property.</p>
              </div>
              <div className="mistake-card">
                <h3>Depending on Only One Person</h3>
                <p>Having a backup local contact can be useful if the primary contact becomes unavailable.</p>
              </div>
              <div className="mistake-card">
                <h3>Not Keeping Receipts</h3>
                <p>Keep records of maintenance payments, taxes, utilities, and other expenses.</p>
              </div>
              <div className="mistake-card">
                <h3>Giving Unclear Instructions</h3>
                <p>Tell your representative exactly what they can approve and what requires your permission.</p>
              </div>
              <div className="mistake-card">
                <h3>Ignoring Small Problems</h3>
                <p>A minor leak, damaged boundary, or maintenance issue can become harder to fix if left unattended.</p>
              </div>
              <div className="mistake-card">
                <h3>Not Reviewing Documents</h3>
                <p>Keep your property documents organised and review them when necessary.</p>
              </div>
            </div>
          </div>

          {/* A Simple Remote Property Management Checklist */}
          <div className="subsection-plain">
            <h2>A Simple Remote Property Management Checklist</h2>
            <ul className="inline-checklist">
              <li>📁 Digital copies of important property documents</li>
              <li>🧑🤝🧑 A trusted local contact</li>
              <li>🔄 A backup contact</li>
              <li>🗓️ Property inspection schedule</li>
              <li>🧰 Maintenance contact list</li>
              <li>💰 Tax and bill reminders</li>
              <li>🏠 Tenant details, if applicable</li>
              <li>🚨 Emergency instructions</li>
              <li>📸 Property photographs</li>
              <li>🧾 Expense records</li>
              <li>✅ Clear approval limits</li>
              <li>⚖️ Professional legal support when required</li>
            </ul>
          </div>

          {/* Testimonial / Story Card */}
          <div className="success-card">
            <div className="stars">★★★★★</div>
            <p className="quote">
              "Living in Singapore, the hardest part was the time zone. Once we set up a monthly
              photo-and-report routine with a local contact, managing the property stopped feeling like guesswork."
            </p>
            <div className="client">
              Senthil K. <span>NRI Property Owner, based in Singapore</span>
            </div>
          </div>

          {/* FAQs */}
          <div className="subsection-plain" style={{ marginTop: "44px" }}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>Can I manage my Pondicherry property from another country?</h3>
              <p>
                Yes. You can manage many routine aspects remotely by using digital records, regular
                property inspections, local contacts, online services, and professional property
                management support when required.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need a property manager if I live abroad?</h3>
              <p>
                Not necessarily. If you have a reliable family member or local representative who can
                regularly check your property, you may be able to manage it with their help. Professional
                property management can be useful for regular inspections, tenant support, maintenance
                coordination, or emergency assistance.
              </p>
            </div>
            <div className="faq-item">
              <h3>How often should someone inspect my property?</h3>
              <p>
                There is no single frequency that applies to every property. It depends on whether the
                property is vacant, rented, under construction, or regularly occupied.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can property managers handle tenants and maintenance?</h3>
              <p>
                Some property management providers offer tenant communication and maintenance coordination.
                However, services vary between providers — always confirm the exact scope, charges, and
                additional expenses before signing an agreement.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I keep track of my Pondicherry property while living abroad?</h3>
              <p>
                Use a combination of digital document storage, regular photographs or videos, property
                inspection reports, WhatsApp or email updates, payment records, and a trusted local
                contact. This gives you better visibility even when you are outside India.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta">
            <h2>Looking for Verified Plots in Pondicherry and Nearby Areas?</h2>
            <p>
              The Plot One helps buyers and investors explore property opportunities across
              Pondicherry, Cuddalore, Villupuram, Tindivanam, Chennai, and other parts of Tamil Nadu — with
              transparent guidance, including support for owners living abroad.
            </p>
            <a
              className="final-cta-btn"
              href={`${WA}${encodeURIComponent("Hi, I'm based abroad and would like to explore verified plots in Pondicherry.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🏡 Get the Verified Plot-List
            </a>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="blog-aside">
          <div className="side-card">
            <div className="side-label">About the Brand</div>
            <div className="brand-row">
              <img
                src="/Logo/logobg.webp"
                alt="The Plot One"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="name">The Plot One</div>
            </div>
            <p className="desc">
              Helping NRIs and overseas owners manage and invest in verified property across Pondicherry
              and surrounding Tamil Nadu, with trusted local support.
            </p>
            <hr className="side-divider" />
            <div className="tags">
              <span className="tag-chip">#NRIProperty</span>
              <span className="tag-chip">#RemoteOwnership</span>
              <span className="tag-chip">#Pondicherry</span>
              <span className="tag-chip">#PropertyManagement</span>
            </div>
          </div>

          <div className="side-card">
            <div className="side-label">Remote Management Essentials</div>
            <ul className="checklist">
              <li>📁 Digital document folder</li>
              <li>🧑🤝🧑 Trusted local contact + backup</li>
              <li>🗓️ Inspection schedule</li>
              <li>💰 Tax &amp; bill reminders</li>
              <li>🚨 Emergency contact list</li>
              <li>📸 Photo/video updates</li>
              <li>⚖️ Legal support for major decisions</li>
            </ul>
          </div>

          <div className="side-card consult">
            <h4>Managing From Abroad?</h4>
            <p>Talk to our team about trusted local support for your Pondicherry property.</p>
            <a
              className="wa-btn"
              href={`${WA}${encodeURIComponent("Hi, I'm abroad and need help managing my Pondicherry property.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-4 h-4" /> Connect on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ManagePropertyAbroad;
