// ════════════════════════════════════════════════════════════════════════════
// /features — deep-dive feature breakdown. Rebuilt 2026-05-16 to match the
// v8 homepage positioning. Same dangerouslySetInnerHTML pattern + same dark
// palette so the chrome (nav, footer, type system) lines up with the new
// homepage. Sections are organized by job-to-be-done, not by surface area.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — CartonFlow",
  description: "Every CartonFlow feature, organized by what it actually does for your supply chain. Stock Watch, Privacy Mode, freight RFQ marketplace, live container tracking, shipper scorecards, brand-to-brand partnerships, Cody AI, and more.",
};

export default function FeaturesPage() {
  const html = String.raw`<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{
  --bg:#0a0e1a;--bg-elev:#111827;--bg-card:#1a2336;
  --border:rgba(99,102,241,0.14);--border-strong:rgba(99,102,241,0.32);
  --text:#f1f5f9;--text-muted:#94a3b8;--text-dim:#64748b;
  --indigo:#4F46E5;--indigo-bright:#6366f1;--indigo-glow:#818cf8;
  --emerald:#10b981;--amber:#f59e0b;--red:#ef4444;
}
body{background:var(--bg);color:var(--text);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.icon{display:inline-block;width:18px;height:18px;vertical-align:middle;flex-shrink:0}
.icon-sm{width:14px;height:14px}
.icon-lg{width:22px;height:22px}
.container{max-width:1240px;margin:0 auto;padding:0 32px}

/* NAV */
nav{position:sticky;top:0;z-index:50;background:rgba(10,14,26,0.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 32px;max-width:1240px;margin:0 auto;gap:16px}
.logo{display:flex;align-items:center;gap:10px;flex-shrink:0}
.logo img{height:36px;width:auto}
.nav-links{display:flex;gap:28px}
.nav-links a{color:var(--text-muted);font-weight:500;font-size:14px;transition:color 120ms}
.nav-links a:hover,.nav-links a.active{color:var(--text)}
.nav-cta{display:flex;gap:10px;align-items:center}
.btn{padding:9px 18px;border-radius:8px;font-weight:600;font-size:14px;cursor:pointer;transition:all 140ms;border:none;display:inline-flex;align-items:center;gap:6px}
.btn-ghost{background:transparent;color:var(--text);border:1px solid var(--border-strong)}
.btn-ghost:hover{background:rgba(99,102,241,0.08)}
.btn-primary{background:var(--indigo);color:white}
.btn-primary:hover{background:var(--indigo-bright);transform:translateY(-1px);box-shadow:0 8px 24px -8px rgba(99,102,241,0.6)}
.btn-lg{padding:14px 26px;font-size:15px}

/* PAGE HERO */
.page-hero{padding:80px 0 50px;position:relative;overflow:hidden;text-align:center}
.page-hero::before{content:"";position:absolute;top:-180px;left:50%;transform:translateX(-50%);width:1200px;height:600px;pointer-events:none;background:radial-gradient(ellipse,rgba(99,102,241,0.16) 0%,transparent 60%)}
.page-hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(99,102,241,0.12);border:1px solid var(--border-strong);color:var(--indigo-glow);font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:20px;position:relative}
h1{font-size:clamp(36px,6vw,56px);font-weight:800;letter-spacing:-0.02em;line-height:1.05;margin-bottom:18px;position:relative}
h1 .accent{background:linear-gradient(135deg,var(--indigo-glow) 0%,#c4b5fd 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.page-hero-sub{font-size:clamp(15px,2vw,18px);color:var(--text-muted);line-height:1.6;max-width:680px;margin:0 auto;position:relative}

/* JUMP NAV — sticky table of contents */
.jump-nav{position:sticky;top:64px;z-index:40;background:rgba(10,14,26,0.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);overflow-x:auto;padding:12px 0}
.jump-nav-inner{display:flex;gap:6px;padding:0 32px;max-width:1240px;margin:0 auto;flex-wrap:nowrap;white-space:nowrap}
.jump-link{padding:6px 12px;border-radius:6px;font-size:12px;font-weight:600;color:var(--text-muted);transition:all 140ms;flex-shrink:0}
.jump-link:hover{color:var(--text);background:rgba(99,102,241,0.08)}

/* CATEGORY SECTIONS */
.category{padding:80px 0;border-top:1px solid var(--border)}
.category:nth-child(even){background:var(--bg-elev)}
.category-header{display:flex;align-items:flex-start;gap:20px;margin-bottom:40px}
.category-num{flex-shrink:0;width:48px;height:48px;border-radius:12px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800}
.category-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:6px}
h2{font-size:clamp(26px,3.8vw,36px);font-weight:800;letter-spacing:-0.02em;line-height:1.15;margin-bottom:14px}
.category-sub{font-size:17px;color:var(--text-muted);line-height:1.6;max-width:760px}

/* FEATURE CARD GRID */
.feature-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:24px}
.feature-card{padding:24px;background:var(--bg);border:1px solid var(--border);border-radius:12px;transition:all 200ms}
.category:nth-child(even) .feature-card{background:var(--bg-card)}
.feature-card:hover{border-color:var(--border-strong);transform:translateY(-2px)}
.feature-card-icon{width:36px;height:36px;border-radius:9px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.feature-card-title{font-size:15px;font-weight:700;margin-bottom:8px}
.feature-card-desc{font-size:13px;color:var(--text-muted);line-height:1.55}

/* DEEP DIVE ROW (screenshot + copy) */
.deep-row{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;margin-top:36px}
.deep-row.reverse{grid-template-columns:1.1fr 1fr}
.deep-row.reverse .deep-text{order:2}
.deep-row.reverse .deep-image{order:1}
.deep-image{border-radius:14px;overflow:hidden;border:1px solid var(--border-strong);box-shadow:0 24px 60px -20px rgba(0,0,0,0.5);background:var(--bg-elev)}
.deep-image img{width:100%;display:block}
.deep-text h3{font-size:22px;font-weight:700;margin-bottom:12px}
.deep-text p{font-size:14px;color:var(--text-muted);line-height:1.65;margin-bottom:14px}
.deep-list{list-style:none;padding:0}
.deep-list li{font-size:13px;color:var(--text);padding:6px 0;padding-left:22px;position:relative}
.deep-list li svg{position:absolute;left:0;top:8px;color:var(--indigo-glow)}

/* CTA STRIP */
.cta-strip{padding:80px 0;text-align:center;background:linear-gradient(135deg,rgba(79,70,229,0.10),rgba(139,92,246,0.04));border-top:1px solid var(--border)}
.cta-strip h2{margin-bottom:14px}
.cta-strip p{font-size:16px;color:var(--text-muted);margin:0 auto 28px;max-width:560px}

/* FOOTER */
footer{padding:60px 0 40px;border-top:1px solid var(--border);background:var(--bg-elev)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-tag{font-size:13px;color:var(--text-muted);margin-top:12px;max-width:280px;line-height:1.6}
.footer-col h4{font-size:12px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px}
.footer-col a{display:block;padding:6px 0;color:var(--text);font-size:14px;transition:color 120ms}
.footer-col a:hover{color:var(--indigo-glow)}
.footer-bottom{padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-dim);gap:16px;flex-wrap:wrap}

/* RESPONSIVE */
@media (max-width:980px){
  .deep-row,.deep-row.reverse{grid-template-columns:1fr;gap:28px}
  .deep-row.reverse .deep-text{order:1}
  .deep-row.reverse .deep-image{order:2}
}
@media (max-width:780px){
  .nav-links{display:none}
  .nav-inner{padding:12px 18px}
  .container,.nav-inner,.jump-nav-inner{padding-left:18px;padding-right:18px}
  .page-hero{padding:50px 0 30px}
  .category{padding:50px 0}
  .category-header{flex-direction:column;gap:14px;margin-bottom:28px}
  .feature-cards{grid-template-columns:1fr;gap:14px}
  .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
}
@media (max-width:520px){
  .nav-cta .btn-ghost{display:none}
  .footer-grid{grid-template-columns:1fr}
}
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol>
    <symbol id="i-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></symbol>
    <symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></symbol>
    <symbol id="i-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
    <symbol id="i-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></symbol>
    <symbol id="i-network" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></symbol>
    <symbol id="i-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.5 6 6 2.5-6 2.5L12 20l-2.5-6-6-2.5 6-2.5L12 3z"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
    <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></symbol>
    <symbol id="i-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></symbol>
    <symbol id="i-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></symbol>
    <symbol id="i-receipt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></symbol>
    <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></symbol>
  </defs>
</svg>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <img src="/screenshots-v8/cartonflow-logo-white.svg" alt="CartonFlow">
    </a>
    <div class="nav-links">
      <a href="/features" class="active">Features</a>
      <a href="/for-logistics-partners">For 3PLs</a>
      <a href="/#pricing">Pricing</a>
      <a href="/security">Security</a>
    </div>
    <div class="nav-cta">
      <a href="/#demo" class="btn btn-ghost">Book a demo</a>
      <a href="https://app.cartonflow.io/signup" class="btn btn-primary">Start free trial</a>
    </div>
  </div>
</nav>

<section class="page-hero">
  <div class="container">
    <div class="page-hero-eyebrow">
      <svg class="icon-sm"><use href="#i-bolt"/></svg>
      Every feature, organized by job
    </div>
    <h1>Everything CartonFlow does,<br><span class="accent">in one screen.</span></h1>
    <p class="page-hero-sub">An honest catalog of what shipped. Grouped by the supply-chain job each feature actually does for you &mdash; not by which page it lives on.</p>
  </div>
</section>

<div class="jump-nav">
  <div class="jump-nav-inner">
    <a href="#supply" class="jump-link">Supply planning</a>
    <a href="#freight" class="jump-link">Freight &amp; tracking</a>
    <a href="#partners" class="jump-link">Partners &amp; network</a>
    <a href="#privacy" class="jump-link">Privacy &amp; security</a>
    <a href="#ai" class="jump-link">AI &amp; automation</a>
    <a href="#admin" class="jump-link">Workspace &amp; admin</a>
    <a href="#integrations" class="jump-link">Integrations</a>
  </div>
</div>

<section id="supply" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">01</div>
      <div>
        <div class="category-eyebrow">Supply planning</div>
        <h2>Forecast, reorder, and never miss<br>an FBA window again.</h2>
        <p class="category-sub">The reorder cycle every Amazon brand runs &mdash; in one workspace, fed by your live Amazon stock and your real PO timelines instead of a quarterly spreadsheet refresh.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-chart"/></svg></div><div class="feature-card-title">Stock Watch</div><div class="feature-card-desc">Pinned ASINs sorted worst-coverage-first. Red / amber / green at a glance, with a horizontal coverage bar scaled 0&ndash;90 days.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bolt"/></svg></div><div class="feature-card-title">Inventory Coverage Forecast</div><div class="feature-card-desc">Days-of-coverage projection per SKU, accounting for current FBA stock, inbound shipments, and your 30-day run rate.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-file"/></svg></div><div class="feature-card-title">Purchase Order Lifecycle</div><div class="feature-card-desc">Issue, acknowledge, in-production, QC, ready-to-ship, shipped, delivered-FBA. Every milestone tracked, every supplier nudged automatically when they drift.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-users"/></svg></div><div class="feature-card-title">Supplier directory</div><div class="feature-card-desc">Contact, lead time, MOQ, payment terms, scorecard. Encrypted client-side when Privacy Mode is on so nobody &mdash; including us &mdash; can read your factory list.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">Reorder cue</div><div class="feature-card-desc">"In 6 days", "ASAP", "Overdue", or a real reorder-by date &mdash; computed from coverage minus production + transit lead time.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-receipt"/></svg></div><div class="feature-card-title">FBA inbound window alerts</div><div class="feature-card-desc">Penalty-side window monitoring &mdash; you get warned before the 24-hour lock window closes, not after.</div></div>
    </div>

    <div class="deep-row">
      <div class="deep-text">
        <h3>Coverage you can act on, not just look at.</h3>
        <p>Every SKU gets a coverage row sorted by urgency. Critical ones (zero on hand, real run rate) sit at the top with a "Reorder ASAP" cue. Healthy ones (60+ days) collapse to a single quiet line at the bottom. The dashboard answers the only inventory question that matters: <strong style="color:var(--text)">what do I need to act on right now?</strong></p>
        <ul class="deep-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>30-day run rate from Amazon orderMetrics</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Manual override per SKU for seasonal launches</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Inbound shipments factored into runway</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>One-click refresh pulls fresh FBA stock + velocity in parallel</li>
        </ul>
      </div>
      <div class="deep-image"><img src="/screenshots-v8/fresh-dashboard.png" alt="Stock Watch on the CartonFlow dashboard" loading="lazy"></div>
    </div>
  </div>
</section>

<section id="freight" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">02</div>
      <div>
        <div class="category-eyebrow">Freight &amp; tracking</div>
        <h2>From booking to FBA receipt &mdash;<br>without a Slack channel per shipment.</h2>
        <p class="category-sub">Post a shipment, run an auction, watch the vessel cross the Pacific, confirm FBA receipt. Same workspace, same view, same team.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-tag"/></svg></div><div class="feature-card-title">Freight RFQ marketplace</div><div class="feature-card-desc">Post once, your shippers bid in real time. Compare price, transit days, and scorecard rating side-by-side. Award and book in one click.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-globe"/></svg></div><div class="feature-card-title">Live ocean tracking</div><div class="feature-card-desc">Real-time AIS vessel positions on a globe view. Port ETAs, transit progress, customs status. Refreshed every few minutes &mdash; no manual pull.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-truck"/></svg></div><div class="feature-card-title">Last-mile carton scans</div><div class="feature-card-desc">FedEx + UPS scan events per carton, geocoded onto the same map. Know which box landed at which FC, not just which shipment.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-map"/></svg></div><div class="feature-card-title">Multi-destination routing</div><div class="feature-card-desc">Split a single PO across multiple FBA warehouses (or custom 3PL drops) in one shipment. Track each leg independently.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">Anomaly alerts</div><div class="feature-card-desc">Delayed ETAs, missed milestones, customs holds. You get pinged before the problem reaches your customer service team.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-receipt"/></svg></div><div class="feature-card-title">Container credit billing</div><div class="feature-card-desc">Pay per ocean container, not per seat. Non-refundable credit packs of 5 / 25 / 100 &mdash; aligned with how freight actually flows.</div></div>
    </div>

    <div class="deep-row reverse">
      <div class="deep-text">
        <h3>One auction pays for the platform. For a year.</h3>
        <p>Stop emailing five shippers and waiting three days for quotes. The RFQ flow asks for cartons, weight, and CBM (auto-calculated from your product catalog), lets you pick service combos (ocean + last mile), and broadcasts to your trusted shipper network. Bids come back within 24&ndash;48 hours with DDP pricing, transit days, and the shipper&rsquo;s CartonFlow scorecard right next to the number.</p>
        <ul class="deep-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>AI-suggested optimal carriers based on your shipment history</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Service combo picker (ocean route + last mile per row)</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Urgency selector: standard / urgent / critical</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Side-by-side bid comparison with AI scoring</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Award + contract auto-generation in one click</li>
        </ul>
      </div>
      <div class="deep-image"><img src="/screenshots-v8/fresh-rfq-modal.png" alt="Launch RFQ modal with AI freight intelligence" loading="lazy"></div>
    </div>

    <div class="deep-row">
      <div class="deep-text">
        <h3>Every vessel, every container, every last mile.</h3>
        <p>The Live Map shows your entire freight footprint at once. AIS-tracked vessels with port ETAs, FedEx/UPS carton scans geocoded onto the same view, warehouse drop-offs marked. Filter by status (transit, customs, last mile, delayed) and click any pin for the shipment detail without leaving the map.</p>
        <ul class="deep-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Globe + flat map views</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Status filters with live counts</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Vessel detail: speed, heading, ETA, port queue position</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Auto-refresh every few minutes</li>
        </ul>
      </div>
      <div class="deep-image"><img src="/screenshots-v8/fresh-map.png" alt="Live shipment map" loading="lazy"></div>
    </div>
  </div>
</section>

<section id="partners" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">03</div>
      <div>
        <div class="category-eyebrow">Partners &amp; network</div>
        <h2>The network effect every Amazon brand<br>has been waiting for.</h2>
        <p class="category-sub">Find new shippers from real brand reviews. Connect to other brand workspaces without giving up your data. Score every partner automatically.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-network"/></svg></div><div class="feature-card-title">Shipper Marketplace</div><div class="feature-card-desc">Discover 3PLs other brands actually use. Filter by lane, mode, FBA certification. See real reviews &mdash; no astroturf. Send a connection request in one click.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-shield"/></svg></div><div class="feature-card-title">Shipper Scorecards</div><div class="feature-card-desc">On-time delivery, pickup reliability, response time, days early or late. Auto-computed from shipment data every month, on industry-standard benchmarks.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-link"/></svg></div><div class="feature-card-title">Brand-to-Brand partnerships</div><div class="feature-card-desc">Connect to another brand&rsquo;s workspace. Each side keeps their own; each side decides exactly what flows across. No CSV exports, no manual sync.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-globe"/></svg></div><div class="feature-card-title">Multi-Workspace view</div><div class="feature-card-desc">Layer partner workspaces on top of your own. See merged shipments, inventory, POs in one screen. KPIs stay yours-only; each row labeled with its source.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-message"/></svg></div><div class="feature-card-title">Built-in messaging</div><div class="feature-card-desc">Threaded messages tied to each shipment, shared between your team, your 3PL, and your distributor. Email is no longer the source of truth.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-receipt"/></svg></div><div class="feature-card-title">Invoice portal</div><div class="feature-card-desc">3PLs submit invoices directly in the platform. Review line items, approve, mark paid. Billing history always one click away &mdash; no PDF chasing.</div></div>
    </div>

    <div class="deep-row reverse">
      <div class="deep-text">
        <h3>Find shippers the same way<br>other brands found them.</h3>
        <p>The Shipper Marketplace is your network effect. AI-suggested shippers based on your actual shipment history, lane coverage filters, and reviews from other CartonFlow brands sit alongside every shipper your network already trusts. Send a connection request, run an auction with them within the hour, add them to your scorecard the same day.</p>
        <ul class="deep-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Suggested by lane + cargo profile</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Verified brand reviews with ratings</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>One-click connect &mdash; no email back-and-forth</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Already a shipper? Get listed and win new business</li>
        </ul>
      </div>
      <div class="deep-image"><img src="/screenshots-v8/fresh-marketplace.png" alt="Shipper marketplace" loading="lazy"></div>
    </div>

    <div class="deep-row">
      <div class="deep-text">
        <h3>Know which 3PL is crushing it.<br>And which one is costing you.</h3>
        <p>Every shipper your brand uses gets scored automatically. On-time delivery, pickup reliability, response time, days early or late, customer ratings, financial impact &mdash; all from shipment data already in the platform. No manual entry. No spreadsheet. No more arguing about who&rsquo;s actually the best partner.</p>
        <ul class="deep-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>"What&rsquo;s working" / "What to fix" breakdown per shipper</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Industry-standard benchmarks built in</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Financial breakdown: cost / paid / outstanding</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Compare across all your partners or drill into one</li>
        </ul>
      </div>
      <div class="deep-image"><img src="/screenshots-v8/fresh-scorecard.png" alt="Shipper scorecard" loading="lazy"></div>
    </div>
  </div>
</section>

<section id="privacy" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">04</div>
      <div>
        <div class="category-eyebrow">Privacy &amp; security</div>
        <h2>Built assuming a competitor<br>could be on the other side of the wall.</h2>
        <p class="category-sub">Most platforms ingest your supplier list and unit costs to "improve recommendations." CartonFlow can&rsquo;t &mdash; we don&rsquo;t hold the keys. Full breakdown on our <a href="/security" style="color:var(--indigo-glow);border-bottom:1px dashed var(--indigo-glow)">Trust Center</a>.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-lock"/></svg></div><div class="feature-card-title">Privacy Mode</div><div class="feature-card-desc">Supplier names, contacts, unit costs, and PO financials are encrypted client-side. We hold ciphertext; you hold the keys. Even our staff can&rsquo;t read it.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-shield"/></svg></div><div class="feature-card-title">Confidential mask</div><div class="feature-card-desc">Server-side scrubber. A team member with shipments access but not confidential access sees "Supplier #42" instead of the real factory name on every screen.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-users"/></svg></div><div class="feature-card-title">Granular team permissions</div><div class="feature-card-desc">14 modules &times; 5 actions per team member. Shopify-grade access control without the enterprise complexity.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-file"/></svg></div><div class="feature-card-title">Tenant isolation</div><div class="feature-card-desc">Per-tenant keys. Per-tenant data partitions. Cross-tenant access requires an explicit, revocable grant. No accidental data commingling.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-check"/></svg></div><div class="feature-card-title">Audit log</div><div class="feature-card-desc">Every read, write, permission change, and partner grant is logged with actor, target, and timestamp.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">Disclosure policy</div><div class="feature-card-desc">Critical CVEs patched within 7 days. Quarterly restore drills. Public disclosure timeline. The SLAs are on our Trust Center, not buried in a contract.</div></div>
    </div>
  </div>
</section>

<section id="ai" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">05</div>
      <div>
        <div class="category-eyebrow">AI &amp; automation</div>
        <h2>Ask supply chain questions<br>in plain English.</h2>
        <p class="category-sub">Cody lives in your workspace and knows your data &mdash; suppliers, POs, stock levels, shipper performance. Ask it anything you&rsquo;d normally pull up four tabs for.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-sparkle"/></svg></div><div class="feature-card-title">Cody AI assistant</div><div class="feature-card-desc">Grounded in your tenant&rsquo;s data. Audit-logged. Read-only by default. Privacy Mode aware &mdash; never sees encrypted fields.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-chart"/></svg></div><div class="feature-card-title">AI freight intelligence</div><div class="feature-card-desc">RFQ flow recommends carriers and consolidation strategies based on your shipment history and current bids. Quantified savings, not vibes.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">AI inventory brief</div><div class="feature-card-desc">Weekly summary of what changed &mdash; SKUs that flipped to critical, POs that slipped, shippers that missed SLA &mdash; in three paragraphs you&rsquo;ll actually read.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-message"/></svg></div><div class="feature-card-title">Supplier nudge automation</div><div class="feature-card-desc">Pre-templated production-status follow-ups your supplier sees from your domain. Sent automatically when a PO milestone slips past a threshold.</div></div>
    </div>
  </div>
</section>

<section id="admin" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">06</div>
      <div>
        <div class="category-eyebrow">Workspace &amp; admin</div>
        <h2>Multi-brand operators welcome.<br>One login. Many workspaces.</h2>
        <p class="category-sub">Run multiple Amazon brands from one CartonFlow login. Each brand fully isolated, each brand individually billable.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-box"/></svg></div><div class="feature-card-title">Multiple workspaces</div><div class="feature-card-desc">$99/mo per additional brand workspace. Isolated suppliers, products, permissions, integrations. Switch between them from the org switcher.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-users"/></svg></div><div class="feature-card-title">Unlimited team seats</div><div class="feature-card-desc">Add as many users as you need at no extra cost. Permission presets (Owner, Admin, Operations, Shipper, Custom) plus per-action overrides.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-link"/></svg></div><div class="feature-card-title">Free partner seats</div><div class="feature-card-desc">3PLs, forwarders, and distributors join with their own login &mdash; at no cost to them or you. The network effect is the point.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-file"/></svg></div><div class="feature-card-title">Document hub</div><div class="feature-card-desc">BOLs, PODs, commercial invoices, customs docs, certificates. Categorized, encrypted, role-gated.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">Notifications</div><div class="feature-card-desc">Email, in-app, and push (mobile PWA). Per-user thresholds for shipment events, PO milestones, RFQ bids, partner activity.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-chart"/></svg></div><div class="feature-card-title">Supply chain metrics</div><div class="feature-card-desc">Door-to-door benchmarks, status mix, charges vs speed vs cost. The metrics every ops lead asks for &mdash; recomputed in real time.</div></div>
    </div>
  </div>
</section>

<section id="integrations" class="category">
  <div class="container">
    <div class="category-header">
      <div class="category-num">07</div>
      <div>
        <div class="category-eyebrow">Integrations</div>
        <h2>SP-API native. Carrier-native.<br>Not "import your CSV every Monday."</h2>
        <p class="category-sub">The data already lives in Amazon, your shipper portals, and your tracking carriers. CartonFlow reads it directly &mdash; no spreadsheet middleware.</p>
      </div>
    </div>

    <div class="feature-cards">
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-link"/></svg></div><div class="feature-card-title">Amazon SP-API</div><div class="feature-card-desc">Live FBA inventory sync, 30-day sales velocity refresh, inbound shipment status, FC table fallback. Connected via the official Amazon developer flow.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-truck"/></svg></div><div class="feature-card-title">FedEx + UPS tracking</div><div class="feature-card-desc">Bring your own developer credentials. CartonFlow uses them to pull carton-level scan events on your behalf. Your rates, your accounts, no markup.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-globe"/></svg></div><div class="feature-card-title">AIS vessel feed</div><div class="feature-card-desc">Ocean container positions via our AIS provider. Refreshed every few minutes for every shipment with a container number assigned.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-bell"/></svg></div><div class="feature-card-title">Email + push delivery</div><div class="feature-card-desc">Transactional email via Resend. Mobile push via OneSignal. Per-user opt-in for each notification type.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-receipt"/></svg></div><div class="feature-card-title">Stripe billing</div><div class="feature-card-desc">Subscription + container credit purchases. Saved card, change plan, download invoices &mdash; all standard, no surprises.</div></div>
      <div class="feature-card"><div class="feature-card-icon"><svg class="icon-lg"><use href="#i-shield"/></svg></div><div class="feature-card-title">Sentry observability</div><div class="feature-card-desc">Error monitoring and performance tracing baked in. When something does break we see it before you do.</div></div>
    </div>
  </div>
</section>

<section class="cta-strip">
  <div class="container">
    <h2>Want to see all of this running on your data?</h2>
    <p>Start a 14-day free trial &mdash; no card. Connect Amazon, invite your 3PL, ship your first PO inside the trial.</p>
    <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg" style="margin-right:10px">Start free trial</a>
    <a href="/#demo" class="btn btn-ghost btn-lg">Book a demo first</a>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="logo">
          <img src="/screenshots-v8/cartonflow-logo-white.svg" alt="CartonFlow" style="height:36px">
        </a>
        <p class="footer-tag">The supply chain platform built for Amazon brands. From supplier PO to FBA receipt &mdash; in one workspace your team can use and your competitors can&rsquo;t see.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/security">Security</a>
        <a href="/support">Support</a>
      </div>
      <div class="footer-col">
        <h4>For</h4>
        <a href="/features">Amazon brands</a>
        <a href="/for-logistics-partners">3PLs &amp; shippers</a>
        <a href="https://app.cartonflow.io/signup">Start free trial</a>
      </div>
      <div class="footer-col">
        <h4>Trust</h4>
        <a href="/security">Trust Center</a>
        <a href="/security-disclosure">Security disclosure</a>
        <a href="/subprocessors">Subprocessors</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/privacy-policy">Privacy policy</a>
        <a href="/terms-of-service">Terms of service</a>
        <a href="/acceptable-use">Acceptable use</a>
        <a href="/cookies">Cookies</a>
        <a href="/cancellation">Cancellation</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 CartonFlow. All rights reserved.</div>
      <div>SOC 2 in progress &middot; TLS encryption &middot; ISO 27001 roadmap</div>
    </div>
  </div>
</footer>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
