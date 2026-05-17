// ════════════════════════════════════════════════════════════════════════════
// /security — Trust Center. Rebuilt 2026-05-16 with v8 chrome + palette.
// Substantive content (Privacy Mode spotlight, the 5 layers, Amazon SP-API
// callout, subprocessors, incident response, compliance) preserved from the
// prior page — it was already solid; only the framing/visuals changed.
//
// Role labels updated: the prior copy mentioned "distributor" which no
// longer exists as a role in the app. Now references owner/admin/member/
// 3pl_partner consistently.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Center — CartonFlow",
  description: "How CartonFlow protects your supply chain data. Privacy Mode (zero-knowledge encryption), tenant isolation, granular permissions, audit logging, subprocessors, incident response, and our compliance status — plainly stated.",
};

export default function SecurityPage() {
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

/* HERO */
.hero{padding:80px 0 50px;position:relative;overflow:hidden;text-align:center}
.hero::before{content:"";position:absolute;top:-180px;left:50%;transform:translateX(-50%);width:1200px;height:600px;pointer-events:none;background:radial-gradient(ellipse,rgba(99,102,241,0.16) 0%,transparent 60%)}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(99,102,241,0.12);border:1px solid var(--border-strong);color:var(--indigo-glow);font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:20px;position:relative}
h1{font-size:clamp(36px,6vw,56px);font-weight:800;letter-spacing:-0.02em;line-height:1.05;margin-bottom:18px;position:relative}
h1 .accent{background:linear-gradient(135deg,var(--indigo-glow) 0%,#c4b5fd 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:clamp(15px,2vw,18px);color:var(--text-muted);line-height:1.6;max-width:720px;margin:0 auto 28px;position:relative}
.hero-quicklinks{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;font-size:13px;position:relative}
.hero-quicklinks a{color:var(--indigo-glow);font-weight:600;border-bottom:1px dashed var(--indigo-glow)}

/* PILLAR TRIO */
.pillars-strip{padding:60px 0;background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.pillar{padding:28px;background:var(--bg);border:1px solid var(--border);border-radius:14px}
.pillar-icon{width:44px;height:44px;border-radius:10px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.pillar h3{font-size:17px;font-weight:700;margin-bottom:10px}
.pillar p{font-size:14px;color:var(--text-muted);line-height:1.6}

/* PRIVACY SPOTLIGHT */
.spotlight{padding:80px 0}
.spotlight-card{display:grid;grid-template-columns:1.6fr 1fr;gap:48px;align-items:center;padding:40px;background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(139,92,246,0.05));border:1px solid var(--border-strong);border-radius:16px}
.spotlight-tag{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:999px;background:rgba(99,102,241,0.18);border:1px solid var(--border-strong);color:var(--indigo-glow);font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:14px}
.spotlight-card h2{font-size:clamp(24px,3.5vw,32px);font-weight:800;letter-spacing:-0.02em;line-height:1.15;margin-bottom:14px}
.spotlight-card p{font-size:15px;color:var(--text-muted);line-height:1.65;margin-bottom:12px}
.spotlight-icon{display:flex;align-items:center;justify-content:center;width:160px;height:160px;border-radius:50%;background:rgba(99,102,241,0.12);color:var(--indigo-glow);margin:0 auto}
.spotlight-icon svg{width:80px;height:80px}

/* SECTIONS */
section{padding:80px 0}
.section{border-top:1px solid var(--border)}
.section:nth-of-type(even){background:var(--bg-elev)}
.section-label{font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:12px}
h2{font-size:clamp(26px,3.8vw,36px);font-weight:800;letter-spacing:-0.02em;line-height:1.15;margin-bottom:14px}
.section-lead{font-size:17px;color:var(--text-muted);line-height:1.6;max-width:760px;margin-bottom:36px}

.feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.feature{padding:24px;background:var(--bg);border:1px solid var(--border);border-radius:12px}
.section:nth-of-type(even) .feature{background:var(--bg-card)}
.feature-h{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.feature-dot{width:8px;height:8px;border-radius:50%;background:var(--indigo-glow)}
.feature-h h3{font-size:15px;font-weight:700}
.feature p{font-size:13px;color:var(--text-muted);line-height:1.6}

.amazon-card{padding:32px;background:var(--bg);border:1px solid var(--border-strong);border-radius:14px}
.section:nth-of-type(even) .amazon-card{background:var(--bg-card)}
.amazon-card h3{font-size:18px;font-weight:700;margin-bottom:12px;color:var(--text)}
.amazon-card p{font-size:14px;color:var(--text-muted);line-height:1.65;margin-bottom:16px}
.amazon-list{list-style:none;padding:0;margin-top:18px}
.amazon-list li{padding:10px 0;padding-left:26px;position:relative;font-size:14px;color:var(--text);line-height:1.55;border-top:1px solid var(--border)}
.amazon-list li:first-child{border-top:0}
.amazon-list li::before{content:"✓";position:absolute;left:0;top:10px;color:var(--emerald);font-weight:900}
.amazon-list strong{color:var(--text);font-weight:700}

.sub-table{margin-top:24px;background:var(--bg);border:1px solid var(--border);border-radius:12px;overflow:hidden}
.section:nth-of-type(even) .sub-table{background:var(--bg-card)}
.sub-row{display:grid;grid-template-columns:180px 1.5fr 120px;gap:18px;padding:14px 22px;border-top:1px solid var(--border);font-size:13px;align-items:center}
.sub-row:first-child{border-top:0}
.sub-head{font-size:11px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-dim);padding:12px 22px}
.sub-name{font-weight:700;color:var(--text)}
.sub-purpose{color:var(--text-muted);line-height:1.5}
.sub-region{font-size:12px;color:var(--text-muted);font-weight:600}
.sub-cta{margin-top:18px;font-size:14px;color:var(--text-muted);line-height:1.6}
.sub-cta a{color:var(--indigo-glow);font-weight:700;border-bottom:1px dashed var(--indigo-glow)}

.process{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.proc{display:flex;gap:18px;padding:22px;background:var(--bg);border:1px solid var(--border);border-radius:12px}
.section:nth-of-type(even) .proc{background:var(--bg-card)}
.proc-num{flex-shrink:0;width:36px;height:36px;border-radius:9px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}
.proc-body h3{font-size:15px;font-weight:700;margin-bottom:6px}
.proc-body p{font-size:13px;color:var(--text-muted);line-height:1.6}
.proc-body a{color:var(--indigo-glow);font-weight:600;border-bottom:1px dashed var(--indigo-glow)}

/* CTA */
.cta-row{padding:90px 0;text-align:center;background:linear-gradient(135deg,rgba(79,70,229,0.10),rgba(139,92,246,0.04));border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.cta-row h2{margin-bottom:12px}
.cta-row p{font-size:16px;color:var(--text-muted);max-width:560px;margin:0 auto 28px}
.cta-actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}

footer{padding:60px 0 40px;background:var(--bg-elev)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-tag{font-size:13px;color:var(--text-muted);margin-top:12px;max-width:280px;line-height:1.6}
.footer-col h4{font-size:12px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px}
.footer-col a{display:block;padding:6px 0;color:var(--text);font-size:14px;transition:color 120ms}
.footer-col a:hover{color:var(--indigo-glow)}
.footer-bottom{padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-dim);gap:16px;flex-wrap:wrap}

@media (max-width:980px){
  .pillars,.feature-grid,.process{grid-template-columns:1fr;gap:14px}
  .spotlight-card{grid-template-columns:1fr;gap:24px;text-align:center}
  .spotlight-icon{width:120px;height:120px}
  .spotlight-icon svg{width:60px;height:60px}
  .sub-row{grid-template-columns:1fr;gap:6px;padding:14px 18px}
  .sub-head{display:none}
}
@media (max-width:780px){
  .nav-links{display:none}
  .nav-inner{padding:12px 18px}
  .container,.nav-inner{padding-left:18px;padding-right:18px}
  section{padding:50px 0}
  .hero{padding:50px 0 30px}
  .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
  .spotlight-card,.amazon-card{padding:24px 20px}
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
    <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></symbol>
  </defs>
</svg>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <img src="/screenshots-v8/cartonflow-logo-white.svg" alt="CartonFlow">
    </a>
    <div class="nav-links">
      <a href="/features">Features</a>
      <a href="/for-logistics-partners">For 3PLs</a>
      <a href="/#pricing">Pricing</a>
      <a href="/security" class="active">Security</a>
    </div>
    <div class="nav-cta">
      <a href="/#demo" class="btn btn-ghost">Book a demo</a>
      <a href="https://app.cartonflow.io/signup" class="btn btn-primary">Start free trial</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-eyebrow">
      <svg class="icon-sm"><use href="#i-shield"/></svg>
      Trust Center
    </div>
    <h1>Security built for <span class="accent">supply chains.</span></h1>
    <p class="hero-sub">Your supplier list, product catalog, purchase orders, and shipment data are some of your most sensitive operational assets. We built CartonFlow assuming a competitor could be on the other side of the wall.</p>
    <div class="hero-quicklinks">
      <a href="/security-disclosure">Report a vulnerability &rarr;</a>
      <a href="/subprocessors">Subprocessor list &rarr;</a>
      <a href="/privacy-policy">Privacy policy &rarr;</a>
      <a href="mailto:support@cartonflow.io">Email security team &rarr;</a>
    </div>
  </div>
</section>

<!-- 3-up pillars -->
<div class="pillars-strip">
  <div class="container">
    <div class="pillars">
      <div class="pillar">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-lock"/></svg></div>
        <h3>Privacy Mode</h3>
        <p>Client-side encryption. Supplier and product names live as ciphertext on our servers &mdash; even CartonFlow staff can&rsquo;t decrypt them.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-shield"/></svg></div>
        <h3>Tenant isolation</h3>
        <p>Every database read filters on your tenant ID at the query layer. Tenant A can&rsquo;t see Tenant B&rsquo;s data even in error scenarios.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-file"/></svg></div>
        <h3>Full audit trail</h3>
        <p>Every action by you, your team, and our AI assistant is logged to an append-only audit table. Investigate any change later.</p>
      </div>
    </div>
  </div>
</div>

<!-- Privacy Mode spotlight -->
<section class="spotlight">
  <div class="container">
    <div class="spotlight-card">
      <div>
        <div class="spotlight-tag"><svg class="icon-sm"><use href="#i-lock"/></svg> Differentiator</div>
        <h2>Privacy Mode: data we<br>literally cannot read.</h2>
        <p>For tenants that turn it on, product names, ASINs, SKUs, and supplier names are encrypted in your browser before they reach our servers. The decryption key never leaves your device.</p>
        <p>If we got subpoenaed, hacked, or had a rogue employee &mdash; there&rsquo;s nothing useful for them to read. The data on our database is opaque ciphertext.</p>
        <p style="margin-top:18px"><a href="/privacy-policy" style="font-size:13px;font-weight:700;color:var(--indigo-glow);border-bottom:1px dashed var(--indigo-glow)">Read the technical details in our Privacy Policy &rarr;</a></p>
      </div>
      <div class="spotlight-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
    </div>
  </div>
</section>

<!-- Encryption & access -->
<section class="section">
  <div class="container">
    <div class="section-label">Layer 1 &middot; Data protection</div>
    <h2>Your data, encrypted at every step.</h2>
    <p class="section-lead">Standard encryption everywhere, with stronger protection available for tenants who need it.</p>
    <div class="feature-grid">
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>TLS 1.3 in transit</h3></div>
        <p>Every byte between you and CartonFlow flows over TLS 1.3. HSTS preload directive tells browsers to never connect over HTTP again.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>AES-256 at rest</h3></div>
        <p>Database storage is AES-256 encrypted at rest by default &mdash; the standard the U.S. government uses for top-secret data.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>Argon2id passwords</h3></div>
        <p>Passwords are hashed with Argon2id &mdash; the OWASP-recommended algorithm. Even if our database leaked, passwords stay protected.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>Two-factor authentication</h3></div>
        <p>TOTP-based 2FA for any account that wants it. Required setting available for accounts with elevated permissions.</p>
      </div>
    </div>
  </div>
</section>

<!-- Isolation -->
<section class="section">
  <div class="container">
    <div class="section-label">Layer 2 &middot; Isolation</div>
    <h2>One database, but every tenant lives alone.</h2>
    <p class="section-lead">Multi-tenant architecture done right: isolation enforced at the lowest possible layer, not after-the-fact in application code.</p>
    <div class="feature-grid">
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>Query-layer tenant filter</h3></div>
        <p>Every read filters on your tenant ID. Even an internal bug can&rsquo;t accidentally show one customer&rsquo;s data to another.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>JWT session tokens</h3></div>
        <p>Short-lived signed tokens carry your authentication. Revocable instantly via password change or 2FA reset.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>Granular permissions</h3></div>
        <p>14 modules &times; 5 actions per team member. Owner, admin, user, and shipper-partner roles each only see what their job requires.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot"></span><h3>Production access logged</h3></div>
        <p>Internal access to production infrastructure is gated, MFA-enforced, and recorded in an immutable audit log.</p>
      </div>
    </div>
  </div>
</section>

<!-- Amazon callout -->
<section class="section">
  <div class="container">
    <div class="section-label">Common question</div>
    <h2>Will CartonFlow get my Amazon account flagged?</h2>
    <p class="section-lead">Short answer: <strong style="color:var(--text);font-weight:800">no</strong>. Here&rsquo;s why we&rsquo;re confident saying that.</p>
    <div class="amazon-card">
      <h3>We use Amazon&rsquo;s official SP-API the way Amazon intends.</h3>
      <p>CartonFlow integrates with Amazon Selling Partner API through Amazon&rsquo;s standard OAuth flow. You explicitly authorize the connection from your Seller Central account; you can revoke it anytime.</p>
      <ul class="amazon-list">
        <li><strong>OAuth-scoped, revocable:</strong> we never see your Amazon password. You grant only the permissions we ask for, and you can revoke from Seller Central with one click.</li>
        <li><strong>Rate-limit compliant:</strong> we respect Amazon&rsquo;s per-endpoint rate limits with exponential backoff. You won&rsquo;t get throttled because of CartonFlow.</li>
        <li><strong>Read-mostly access:</strong> 95% of our calls are read operations (sales velocity, FBA inventory, shipment status). Reads cannot flag accounts.</li>
        <li><strong>No policy-violation surfaces:</strong> account flagging happens for review manipulation, counterfeits, policy violations, suspicious login patterns. None of those are things CartonFlow touches.</li>
      </ul>
    </div>
  </div>
</section>

<!-- Subprocessors -->
<section class="section">
  <div class="container">
    <div class="section-label">Layer 3 &middot; Vendors</div>
    <h2>The companies that touch your data.</h2>
    <p class="section-lead">Every B2B service relies on vendors. We pick ones we trust, with regions and purposes clearly defined. Updated as our stack evolves.</p>
    <div class="sub-table">
      <div class="sub-row sub-head"><div>Vendor</div><div>Purpose</div><div>Region</div></div>
      <div class="sub-row"><div class="sub-name">Fly.io</div><div class="sub-purpose">Application hosting (cartonflow.io app servers)</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">Supabase</div><div class="sub-purpose">Postgres database hosting (encrypted at rest)</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">Cloudflare</div><div class="sub-purpose">DNS, DDoS protection, edge caching</div><div class="sub-region">Global edge</div></div>
      <div class="sub-row"><div class="sub-name">Stripe</div><div class="sub-purpose">Payment processing (PCI DSS Level 1)</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">Resend</div><div class="sub-purpose">Transactional email delivery</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">Sentry</div><div class="sub-purpose">Error monitoring (no PII in error payloads)</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">Upstash</div><div class="sub-purpose">Redis-based rate limiting</div><div class="sub-region">US</div></div>
      <div class="sub-row"><div class="sub-name">OpenAI / Anthropic / Google AI</div><div class="sub-purpose">AI assistant inference (zero-retention agreements; data not used to train models)</div><div class="sub-region">US</div></div>
    </div>
    <p class="sub-cta">We notify customers via email and update this page <strong style="color:var(--text)">at least 30 days before adding a new subprocessor</strong>. <a href="/subprocessors">View the full subprocessor list &rarr;</a></p>
  </div>
</section>

<!-- Operations -->
<section class="section">
  <div class="container">
    <div class="section-label">Layer 4 &middot; Operations</div>
    <h2>What happens when something goes wrong.</h2>
    <p class="section-lead">Real security is the process behind the product. Here&rsquo;s how we operate.</p>
    <div class="process">
      <div class="proc"><div class="proc-num">01</div><div class="proc-body"><h3>Incident response</h3><p>Documented runbook for security incidents. Affected customers notified within 72 hours per industry standard. Post-incident report published within 7 days.</p></div></div>
      <div class="proc"><div class="proc-num">02</div><div class="proc-body"><h3>Vulnerability management</h3><p>Dependencies scanned weekly via Dependabot. Critical CVEs patched within 7 days; high-severity within 30. Reviewed and tracked in a public-style log.</p></div></div>
      <div class="proc"><div class="proc-num">03</div><div class="proc-body"><h3>Backup &amp; restore</h3><p>Daily automated database backups. Restore drills run quarterly to verify backups are usable. Point-in-time recovery available for the last 7 days.</p></div></div>
      <div class="proc"><div class="proc-num">04</div><div class="proc-body"><h3>Responsible disclosure</h3><p>Found a vulnerability? Report it safely to <a href="mailto:support@cartonflow.io">support@cartonflow.io</a>. We respond within 2 business days and won&rsquo;t pursue legal action against good-faith research. <a href="/security-disclosure">Read the full disclosure policy &rarr;</a></p></div></div>
      <div class="proc"><div class="proc-num">05</div><div class="proc-body"><h3>Audit logs</h3><p>Every action that changes your data is recorded &mdash; who did it, when, from what IP, what was the before/after. Available to account owners on request.</p></div></div>
      <div class="proc"><div class="proc-num">06</div><div class="proc-body"><h3>Data Processing Agreement</h3><p>DPA available on request for any customer needing one for GDPR, CCPA, or internal procurement. Email <a href="mailto:support@cartonflow.io">support@cartonflow.io</a>.</p></div></div>
    </div>
  </div>
</section>

<!-- Compliance -->
<section class="section">
  <div class="container">
    <div class="section-label">Layer 5 &middot; Compliance</div>
    <h2>Compliance status, plainly stated.</h2>
    <p class="section-lead">We&rsquo;d rather tell you exactly where we are than imply we have certifications we don&rsquo;t. Here&rsquo;s the honest picture.</p>
    <div class="feature-grid">
      <div class="feature" style="border-color:rgba(16,185,129,0.30);background:rgba(16,185,129,0.04)">
        <div class="feature-h"><span class="feature-dot" style="background:var(--emerald)"></span><h3>GDPR-aligned</h3></div>
        <p>Data subject rights honored: access, correction, export, deletion. EU customers supported with SCCs in our DPA.</p>
      </div>
      <div class="feature" style="border-color:rgba(16,185,129,0.30);background:rgba(16,185,129,0.04)">
        <div class="feature-h"><span class="feature-dot" style="background:var(--emerald)"></span><h3>CCPA aligned</h3></div>
        <p>California consumer privacy rights honored. We don&rsquo;t sell your data and never have.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot" style="background:var(--text-dim)"></span><h3>SOC 2 &mdash; on the roadmap</h3></div>
        <p>We&rsquo;re not yet SOC 2 certified. If your procurement requires it, talk to us &mdash; we&rsquo;ll share our timeline and the controls we&rsquo;ve already implemented from the framework.</p>
      </div>
      <div class="feature">
        <div class="feature-h"><span class="feature-dot" style="background:var(--text-dim)"></span><h3>Pentest &mdash; on the roadmap</h3></div>
        <p>No third-party pentest report yet. Enterprise customers can request our internal security review and threat model under NDA.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-row">
  <div class="container">
    <h2>Have a security question we didn&rsquo;t answer?</h2>
    <p>Or need a DPA, security questionnaire response, or pentest report under NDA?</p>
    <div class="cta-actions">
      <a href="mailto:support@cartonflow.io" class="btn btn-primary btn-lg">Email support@cartonflow.io</a>
      <a href="/security-disclosure" class="btn btn-ghost btn-lg">Disclosure policy</a>
      <a href="/subprocessors" class="btn btn-ghost btn-lg">Subprocessors</a>
    </div>
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
