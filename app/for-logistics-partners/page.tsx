// ════════════════════════════════════════════════════════════════════════════
// /for-logistics-partners — pitch for 3PLs, forwarders, last-mile carriers.
// Rebuilt 2026-05-16 to match the v8 design system and the new RFQ
// marketplace + scorecard + brand-network features. Same
// dangerouslySetInnerHTML pattern as the rest of the site.
//
// The shipper pitch is fundamentally different from the brand pitch:
//   • Brands pay; shippers join free.
//   • Brands buy the platform; shippers get distribution + reputation.
//   • The selling angles are: more business (RFQ + Marketplace),
//     less email (in-app messaging + scorecards), free seats.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For 3PLs & Shippers — CartonFlow",
  description: "CartonFlow is free for shipping partners. Win freight RFQs from brands in your lanes, get listed in the Shipper Marketplace, build a public scorecard from real performance data, and manage every client from one dashboard.",
};

export default function ForLogisticsPartnersPage() {
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

.hero{padding:90px 0 40px;position:relative;overflow:hidden;text-align:center}
.hero::before{content:"";position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:1400px;height:700px;pointer-events:none;background:radial-gradient(ellipse,rgba(16,185,129,0.16) 0%,transparent 60%)}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(16,185,129,0.14);border:1px solid rgba(16,185,129,0.30);color:var(--emerald);font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:22px;position:relative}
h1{font-size:clamp(36px,7vw,64px);font-weight:800;letter-spacing:-0.025em;line-height:1.05;margin-bottom:22px;position:relative}
h1 .accent{background:linear-gradient(135deg,#86efac 0%,var(--emerald) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:clamp(15px,2.2vw,19px);color:var(--text-muted);line-height:1.55;max-width:680px;margin:0 auto 32px;position:relative}
.hero-ctas{display:flex;gap:12px;align-items:center;margin-bottom:18px;flex-wrap:wrap;justify-content:center;position:relative}
.hero-meta{display:flex;gap:22px;font-size:13px;color:var(--text-dim);justify-content:center;flex-wrap:wrap;position:relative}
.hero-meta-item{display:flex;align-items:center;gap:6px}
.check-dot{width:14px;height:14px;border-radius:50%;background:var(--emerald);display:inline-flex;align-items:center;justify-content:center;color:white}

/* Big "FREE" callout */
.free-strip{padding:24px 0;background:linear-gradient(90deg,rgba(16,185,129,0.10) 0%,rgba(16,185,129,0.04) 100%);border-top:1px solid rgba(16,185,129,0.18);border-bottom:1px solid rgba(16,185,129,0.18)}
.free-strip-inner{max-width:1240px;margin:0 auto;padding:0 32px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;justify-content:center}
.free-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:6px;background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.40);font-size:13px;font-weight:800;color:var(--emerald);letter-spacing:0.04em;text-transform:uppercase}
.free-text{color:var(--text);font-size:16px;font-weight:500}
.free-text strong{color:var(--emerald)}

section{padding:90px 0}
.section-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:14px}
h2{font-size:clamp(28px,4.5vw,40px);font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:18px}
.section-sub{font-size:17px;color:var(--text-muted);line-height:1.6;max-width:660px}
.section-header{margin-bottom:56px}
.section-header.centered{text-align:center;max-width:760px;margin-left:auto;margin-right:auto;margin-bottom:56px}
.section-header.centered .section-sub{margin:0 auto}

/* THREE WINS */
.wins{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.win{padding:32px;background:var(--bg-elev);border:1px solid var(--border);border-radius:16px;transition:all 200ms}
.win:hover{transform:translateY(-3px);border-color:var(--border-strong)}
.win-icon{width:48px;height:48px;border-radius:12px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;margin-bottom:20px}
.win-title{font-size:20px;font-weight:800;margin-bottom:12px}
.win-desc{font-size:15px;color:var(--text-muted);line-height:1.6;margin-bottom:18px}
.win-stat{padding:10px 14px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.24);border-radius:8px;font-size:13px;color:var(--emerald);font-weight:700}

/* DEEP DIVE */
.deep{background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.deep-row{display:grid;grid-template-columns:1fr 1.1fr;gap:64px;align-items:center;margin-bottom:100px}
.deep-row.reverse{grid-template-columns:1.1fr 1fr}
.deep-row.reverse .deep-text{order:2}
.deep-row.reverse .deep-image{order:1}
.deep-row:last-of-type{margin-bottom:0}
.deep-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:12px;display:inline-flex;align-items:center;gap:8px}
.deep-title{font-size:clamp(24px,3.5vw,32px);font-weight:800;letter-spacing:-0.02em;line-height:1.2;margin-bottom:16px}
.deep-desc{font-size:16px;color:var(--text-muted);line-height:1.65;margin-bottom:20px}
.deep-bullets{list-style:none;padding:0}
.deep-bullets li{padding:8px 0;padding-left:26px;position:relative;font-size:14px;color:var(--text)}
.deep-bullets li svg{position:absolute;left:0;top:9px;color:var(--indigo-glow)}
.deep-image{border-radius:14px;overflow:hidden;border:1px solid var(--border-strong);box-shadow:0 24px 60px -20px rgba(0,0,0,0.5);background:var(--bg-elev)}
.deep-image img{display:block;width:100%}

/* COMPARISON */
.compare-card{padding:40px;background:var(--bg-elev);border:1px solid var(--border-strong);border-radius:16px;max-width:900px;margin:0 auto}
.compare-row{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:18px;align-items:center;padding:18px 0;border-bottom:1px solid var(--border);font-size:14px}
.compare-row:last-child{border-bottom:0}
.compare-row.header{font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-dim);padding:12px 0;border-bottom:1px solid var(--border-strong)}
.compare-row .label{color:var(--text);font-weight:600}
.compare-old{color:var(--text-muted);text-decoration:line-through;text-decoration-color:rgba(239,68,68,0.5)}
.compare-new{color:var(--emerald);font-weight:700}

/* FAQ */
.faq-grid{max-width:800px;margin:0 auto}
.faq-item{padding:24px 0;border-bottom:1px solid var(--border)}
.faq-q{font-size:17px;font-weight:700;margin-bottom:10px}
.faq-a{font-size:15px;color:var(--text-muted);line-height:1.6}

/* CTA */
.cta-strip{padding:90px 0;text-align:center;background:linear-gradient(135deg,rgba(16,185,129,0.10),rgba(16,185,129,0.04));border-top:1px solid var(--border)}
.cta-strip h2{margin-bottom:14px}
.cta-strip p{font-size:16px;color:var(--text-muted);margin:0 auto 28px;max-width:560px}
.cta-strip .btn-primary{background:var(--emerald)}
.cta-strip .btn-primary:hover{background:#0ea571;box-shadow:0 8px 24px -8px rgba(16,185,129,0.6)}

footer{padding:60px 0 40px;border-top:1px solid var(--border);background:var(--bg-elev)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-tag{font-size:13px;color:var(--text-muted);margin-top:12px;max-width:280px;line-height:1.6}
.footer-col h4{font-size:12px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px}
.footer-col a{display:block;padding:6px 0;color:var(--text);font-size:14px;transition:color 120ms}
.footer-col a:hover{color:var(--indigo-glow)}
.footer-bottom{padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-dim);gap:16px;flex-wrap:wrap}

@media (max-width:980px){
  .wins{grid-template-columns:1fr;gap:18px}
  .deep-row,.deep-row.reverse{grid-template-columns:1fr;gap:28px}
  .deep-row.reverse .deep-text{order:1}
  .deep-row.reverse .deep-image{order:2}
}
@media (max-width:780px){
  .nav-links{display:none}
  .nav-inner{padding:12px 18px}
  .container,.nav-inner,.free-strip-inner{padding-left:18px;padding-right:18px}
  section{padding:50px 0}
  .hero{padding:50px 0 30px}
  .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
  .compare-card{padding:24px 20px}
  .compare-row{font-size:13px;gap:10px}
}
@media (max-width:520px){
  .hero-ctas{flex-direction:column;width:100%}
  .hero-ctas .btn{width:100%;justify-content:center}
  .nav-cta .btn-ghost{display:none}
  .footer-grid{grid-template-columns:1fr}
  .compare-row{grid-template-columns:1fr;gap:6px}
  .compare-row.header{grid-template-columns:1fr 1fr 1fr;font-size:10px}
}
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></symbol>
    <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></symbol>
    <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></symbol>
    <symbol id="i-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></symbol>
    <symbol id="i-network" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
    <symbol id="i-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
    <symbol id="i-receipt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></symbol>
  </defs>
</svg>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <img src="/screenshots-v8/cartonflow-logo-white.svg" alt="CartonFlow">
    </a>
    <div class="nav-links">
      <a href="/features">Features</a>
      <a href="/for-logistics-partners" class="active">For 3PLs</a>
      <a href="/#pricing">Pricing</a>
      <a href="/security">Security</a>
    </div>
    <div class="nav-cta">
      <a href="/#demo" class="btn btn-ghost">Talk to us</a>
      <a href="https://app.cartonflow.io/signup" class="btn btn-primary">Join free</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-eyebrow">
      <svg class="icon-sm"><use href="#i-truck"/></svg>
      For 3PLs, forwarders &amp; last-mile carriers
    </div>
    <h1>Join the network<br><span class="accent">brands actually use.</span></h1>
    <p class="hero-sub">Get listed in the Shipper Marketplace. Win freight RFQs from brands in your lanes. Manage every client from one dashboard. <strong style="color:var(--emerald)">Free, forever.</strong></p>
    <div class="hero-ctas">
      <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg">Join the network</a>
      <a href="/#demo" class="btn btn-ghost btn-lg">Talk to sales <svg class="icon-sm"><use href="#i-arrow-right"/></svg></a>
    </div>
    <div class="hero-meta">
      <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> Free forever</span>
      <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> Unlimited clients</span>
      <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> No contract</span>
    </div>
  </div>
</section>

<!-- Free strip -->
<div class="free-strip">
  <div class="free-strip-inner">
    <span class="free-badge">$0 / month</span>
    <span class="free-text">Brands pay for the platform. <strong>You get every shipper feature at no cost.</strong> No seat fees, no setup, no annual contract.</span>
  </div>
</div>

<!-- Three wins -->
<section>
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">What you get</div>
      <h2>Three reasons real shippers join.</h2>
      <p class="section-sub">CartonFlow isn&rsquo;t another portal that adds work to your day. It removes work, sends new business your way, and builds a reputation that travels with you.</p>
    </div>

    <div class="wins">
      <div class="win">
        <div class="win-icon"><svg class="icon-lg"><use href="#i-tag"/></svg></div>
        <div class="win-title">Win freight from brands</div>
        <div class="win-desc">Brands launch freight RFQs in CartonFlow and broadcast to their trusted shippers. You see the cargo profile, lane, and timing &mdash; place a DDP bid in two minutes. No email tag.</div>
        <div class="win-stat">First RFQ awarded usually within 48 hours</div>
      </div>
      <div class="win">
        <div class="win-icon"><svg class="icon-lg"><use href="#i-network"/></svg></div>
        <div class="win-title">Get found by new brands</div>
        <div class="win-desc">List your company in the Shipper Marketplace. Brands filter by lane, mode, and FBA certification. AI-suggested matches based on their shipment history put you in front of the right ones.</div>
        <div class="win-stat">No paid listings &mdash; reputation wins</div>
      </div>
      <div class="win">
        <div class="win-icon"><svg class="icon-lg"><use href="#i-star"/></svg></div>
        <div class="win-title">Build a public scorecard</div>
        <div class="win-desc">Every shipment you handle feeds into your CartonFlow scorecard. On-time delivery, pickup reliability, response time, reviews from real brands. Your scorecard travels with you across the network.</div>
        <div class="win-stat">Verified performance, no astroturf</div>
      </div>
    </div>
  </div>
</section>

<!-- Deep dives -->
<section class="deep">
  <div class="container">

    <div class="deep-row">
      <div class="deep-text">
        <div class="deep-eyebrow"><svg class="icon-sm"><use href="#i-tag"/></svg> Freight RFQ marketplace</div>
        <h2 class="deep-title">Stop chasing brands<br>over email.</h2>
        <p class="deep-desc">A brand posts a shipment with full cargo specs (cartons, weight, CBM, dims, lanes, urgency). You see it the moment it&rsquo;s live, bid DDP with transit days, and compete on price + service + your scorecard rating &mdash; not who replied first.</p>
        <ul class="deep-bullets">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Full cargo specs upfront &mdash; no follow-up questions</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Bid in two minutes: price, transit days, service notes</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Win, lose, or learn &mdash; AI-scored comparison shows you why</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Contract auto-generated on award. You ship.</li>
        </ul>
      </div>
      <div class="deep-image">
        <img src="/screenshots-v8/fresh-rfq-modal.png" alt="Launch RFQ modal" loading="lazy">
      </div>
    </div>

    <div class="deep-row reverse">
      <div class="deep-text">
        <div class="deep-eyebrow"><svg class="icon-sm"><use href="#i-network"/></svg> Shipper Marketplace</div>
        <h2 class="deep-title">Get listed where brands<br>actually go to find shippers.</h2>
        <p class="deep-desc">Your profile lives in the Shipper Marketplace. Lane coverage, mode (ocean, air, last mile), certifications (FBA-certified, customs broker, hazmat). Brands send connection requests one click at a time &mdash; no cold outreach.</p>
        <ul class="deep-bullets">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Free listing &mdash; no "promoted" tiers</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>AI-suggested to brands based on lane + cargo profile match</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Verified reviews from real brand customers</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Brand sends connect request &rarr; you accept &rarr; auctions start arriving</li>
        </ul>
      </div>
      <div class="deep-image">
        <img src="/screenshots-v8/fresh-marketplace.png" alt="Shipper Marketplace" loading="lazy">
      </div>
    </div>

    <div class="deep-row">
      <div class="deep-text">
        <div class="deep-eyebrow"><svg class="icon-sm"><use href="#i-shield"/></svg> Public scorecards</div>
        <h2 class="deep-title">Your performance is your<br>biggest sales asset.</h2>
        <p class="deep-desc">Every shipment auto-feeds your CartonFlow scorecard. On-time rate, pickup reliability, average response time, days early or late, customer rating. The scorecard is public to the brands you serve &mdash; and to brands evaluating you.</p>
        <ul class="deep-bullets">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Auto-computed from your shipment data &mdash; no manual entry</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Industry-standard benchmarks (not vibes)</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>"What&rsquo;s working" + "what to fix" coaching breakdown</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Strong scorecard &rarr; more invites &rarr; more wins</li>
        </ul>
      </div>
      <div class="deep-image">
        <img src="/screenshots-v8/fresh-scorecard.png" alt="Shipper scorecard" loading="lazy">
      </div>
    </div>

  </div>
</section>

<!-- Comparison -->
<section>
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">Compared to your current setup</div>
      <h2>What changes the day you join.</h2>
    </div>

    <div class="compare-card">
      <div class="compare-row header">
        <div></div>
        <div>Today</div>
        <div>On CartonFlow</div>
      </div>
      <div class="compare-row">
        <div class="label">Quote requests arrive via</div>
        <div class="compare-old">Email + WhatsApp + voicemail</div>
        <div class="compare-new">Structured RFQs with full cargo specs</div>
      </div>
      <div class="compare-row">
        <div class="label">Time from RFQ to bid</div>
        <div class="compare-old">30+ minutes of clarifying questions</div>
        <div class="compare-new">2 minutes — specs are already there</div>
      </div>
      <div class="compare-row">
        <div class="label">How brands choose you</div>
        <div class="compare-old">Whoever replies first</div>
        <div class="compare-new">Side-by-side: price, transit, scorecard, reviews</div>
      </div>
      <div class="compare-row">
        <div class="label">Tracking updates you push</div>
        <div class="compare-old">Forwarded emails, screenshots, manual</div>
        <div class="compare-new">Inline in the shipment thread, one tap</div>
      </div>
      <div class="compare-row">
        <div class="label">Invoice submission</div>
        <div class="compare-old">PDF attached to email, paid in 60 days</div>
        <div class="compare-new">Submit in the portal, line items reviewed in real time</div>
      </div>
      <div class="compare-row">
        <div class="label">Finding new brand clients</div>
        <div class="compare-old">Cold outreach + referrals</div>
        <div class="compare-new">Listed in the Marketplace; brands request you</div>
      </div>
      <div class="compare-row">
        <div class="label">Cost to you</div>
        <div class="compare-old">N/A</div>
        <div class="compare-new">$0 / month, no seat fees, no contract</div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section style="background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">FAQ</div>
      <h2>What 3PLs ask before joining.</h2>
    </div>

    <div class="faq-grid">
      <div class="faq-item">
        <div class="faq-q">It&rsquo;s really free?</div>
        <div class="faq-a">Yes. Brands pay for the platform; shippers, forwarders, distributors, and customs brokers get every feature at no cost. No seat fees, no setup, no annual contract, no card on file.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Do I have to use CartonFlow exclusively?</div>
        <div class="faq-a">No. You keep your existing TMS, your existing customers, your existing rates. CartonFlow lives alongside whatever you already run &mdash; it just gives you a single inbox for any brand that uses it.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">How does the Marketplace listing work?</div>
        <div class="faq-a">You build a free profile: lane coverage, modes, certifications, lead times, reviews. Brands searching for shippers in your lanes find you. There&rsquo;s no "promoted" tier &mdash; ranking is driven by your actual scorecard performance and reviews from brands you&rsquo;ve served.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">What do reviews look like?</div>
        <div class="faq-a">Verified, one per shipment. After a shipment is delivered, the brand can leave a rating (1&ndash;5) and short comment. Only brands who actually shipped with you can review &mdash; no anonymous trash, no astroturf, no review-bombing.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Can I bid on RFQs from brands I&rsquo;m not connected to?</div>
        <div class="faq-a">No &mdash; brands choose which shipper network sees each RFQ. To get into a brand&rsquo;s network you either get found via the Marketplace, get invited directly by them, or get suggested by CartonFlow&rsquo;s AI based on your lane match.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">How do I get paid?</div>
        <div class="faq-a">Same way you do today &mdash; payment terms are between you and the brand. CartonFlow just makes invoice submission and approval visible in real time so nothing gets lost in someone&rsquo;s inbox.</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-strip">
  <div class="container">
    <h2>Join the brands shipping with CartonFlow.</h2>
    <p>Build your free profile in five minutes. Get connected to brands in your lanes. First RFQ usually comes within the first week.</p>
    <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg" style="margin-right:10px">Join free</a>
    <a href="/#demo" class="btn btn-ghost btn-lg">Talk to us first</a>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="logo">
          <img src="/screenshots-v8/cartonflow-logo-white.svg" alt="CartonFlow" style="height:36px">
        </a>
        <p class="footer-tag">The supply chain platform built for Amazon brands. Shippers join free &mdash; build a network, win RFQs, get a public scorecard.</p>
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
        <a href="https://app.cartonflow.io/signup">Join free</a>
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
