import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Trust — CartonFlow",
  description: "How CartonFlow protects your supply chain data. Privacy Mode, encryption, tenant isolation, audit logging, and our security operations.",
};

export default function Page() {
  const html = `<style>

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#04050f;color:#eef2ff;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:#818cf8;text-decoration:none}
a:hover{color:#a5b4fc}
.g{background:linear-gradient(135deg,#c4b5fd,#818cf8,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

nav{position:sticky;top:0;z-index:100;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(4,5,15,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.05)}
.nav-r{display:flex;align-items:center;gap:12px}
.nav-login{color:rgba(255,255,255,0.45);font-size:13px;font-weight:600;transition:color .2s}
.nav-login:hover{color:#fff}
.btn-nav{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(79,70,229,0.4)}
.back{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:rgba(255,255,255,0.35);font-weight:600}
.back:hover{color:#eef2ff}

/* ── Hero ──────────────────────────────────── */
.hero{position:relative;max-width:1100px;margin:0 auto;padding:80px 40px 60px;text-align:center;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 30% 20%,rgba(99,102,241,0.18),transparent 55%),radial-gradient(circle at 70% 80%,rgba(168,85,247,0.14),transparent 60%);pointer-events:none}
.hero-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#818cf8;background:rgba(79,70,229,0.1);border:1px solid rgba(79,70,229,0.2);border-radius:4px;padding:5px 12px;margin-bottom:24px}
.hero-title{font-size:clamp(40px,6vw,68px);font-weight:900;letter-spacing:-2.5px;line-height:1.05;margin-bottom:20px}
.hero-sub{max-width:680px;margin:0 auto;font-size:17px;line-height:1.65;color:rgba(238,242,255,0.55)}
.hero-quicklinks{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;margin-top:28px}
.hero-quicklinks a{font-size:13px;font-weight:700;color:#a5b4fc;padding:7px 14px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);transition:all .15s ease}
.hero-quicklinks a:hover{background:rgba(99,102,241,0.1);border-color:rgba(99,102,241,0.3);color:#c4b5fd}

/* ── Pillars: 3-up feature row ─────────────── */
.pillars{max-width:1100px;margin:32px auto 64px;padding:0 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.pillar{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:24px;transition:transform .15s ease,border-color .15s ease}
.pillar:hover{transform:translateY(-2px);border-color:rgba(99,102,241,0.4)}
.pillar-icon{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:14px;background:linear-gradient(135deg,#4F46E5,#7C3AED);box-shadow:0 8px 20px -8px rgba(79,70,229,0.6)}
.pillar h3{font-size:15px;font-weight:800;color:#eef2ff;margin-bottom:6px;letter-spacing:-0.2px}
.pillar p{font-size:13px;color:rgba(238,242,255,0.5);line-height:1.55}

/* ── Standalone "Privacy Mode" highlight ───── */
.spotlight{max-width:1100px;margin:0 auto 80px;padding:0 40px}
.spotlight-card{background:linear-gradient(135deg,rgba(99,102,241,0.08) 0%,rgba(168,85,247,0.06) 100%);border:1px solid rgba(99,102,241,0.25);border-radius:20px;padding:40px 44px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;position:relative;overflow:hidden}
.spotlight-card::after{content:'';position:absolute;right:-80px;top:-80px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(168,85,247,0.18),transparent 70%);pointer-events:none}
.spotlight-tag{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#a5b4fc;margin-bottom:14px}
.spotlight-card h2{font-size:32px;font-weight:900;letter-spacing:-1px;line-height:1.1;margin-bottom:14px;color:#eef2ff}
.spotlight-card p{font-size:14.5px;line-height:1.7;color:rgba(238,242,255,0.62);margin-bottom:14px}
.spotlight-card p:last-of-type{margin-bottom:0}
.spotlight-icon{font-size:120px;line-height:1;text-align:center;filter:drop-shadow(0 8px 30px rgba(168,85,247,0.4))}

/* ── Section header ────────────────────────── */
.section{max-width:1100px;margin:0 auto 64px;padding:0 40px}
.section-label{font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#818cf8;margin-bottom:10px}
.section h2{font-size:34px;font-weight:900;letter-spacing:-1.2px;line-height:1.1;color:#eef2ff;margin-bottom:14px;max-width:680px}
.section-lead{font-size:15.5px;line-height:1.7;color:rgba(238,242,255,0.55);margin-bottom:32px;max-width:680px}

/* ── Two-column feature grid ───────────────── */
.feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.feature{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:22px}
.feature-h{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.feature-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);box-shadow:0 0 0 4px rgba(99,102,241,0.12);flex-shrink:0}
.feature h3{font-size:14.5px;font-weight:800;color:#eef2ff;letter-spacing:-0.2px}
.feature p{font-size:13px;line-height:1.6;color:rgba(238,242,255,0.5)}

/* ── Subprocessors preview ─────────────────── */
.sub-table{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:14px;overflow:hidden}
.sub-row{display:grid;grid-template-columns:160px 1fr 100px;gap:24px;padding:14px 22px;align-items:center;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04)}
.sub-row:last-child{border-bottom:none}
.sub-row.sub-head{font-size:10.5px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:rgba(238,242,255,0.4);background:rgba(255,255,255,0.02)}
.sub-name{color:#eef2ff;font-weight:700}
.sub-purpose{color:rgba(238,242,255,0.6);line-height:1.55}
.sub-region{color:rgba(238,242,255,0.45);font-size:12px}
.sub-cta{margin-top:14px;font-size:13px;color:#a5b4fc}

/* ── Amazon callout ────────────────────────── */
.amazon-card{background:rgba(255,153,0,0.04);border:1px solid rgba(255,153,0,0.18);border-radius:16px;padding:32px}
.amazon-card h3{font-size:20px;font-weight:800;color:#FED7AA;margin-bottom:8px;letter-spacing:-0.3px}
.amazon-card p{font-size:14.5px;line-height:1.7;color:rgba(238,242,255,0.62);margin-bottom:14px}
.amazon-card p:last-of-type{margin-bottom:0}
.amazon-list{margin-top:14px;padding-left:0;list-style:none}
.amazon-list li{font-size:13.5px;line-height:1.6;color:rgba(238,242,255,0.55);padding-left:24px;position:relative;margin-bottom:10px}
.amazon-list li::before{content:'✓';position:absolute;left:0;top:0;color:#FB923C;font-weight:900}
.amazon-list strong{color:#eef2ff;font-weight:700}

/* ── Process / Operations ──────────────────── */
.process{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.proc{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:22px;display:flex;gap:14px;align-items:flex-start}
.proc-num{flex-shrink:0;width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#7C3AED);font-size:11px;font-weight:900;color:#fff;display:flex;align-items:center;justify-content:center;letter-spacing:.5px}
.proc-body h3{font-size:14.5px;font-weight:800;color:#eef2ff;margin-bottom:6px;letter-spacing:-0.2px}
.proc-body p{font-size:13px;line-height:1.55;color:rgba(238,242,255,0.5)}

/* ── CTA ───────────────────────────────────── */
.cta-row{max-width:1100px;margin:80px auto 40px;padding:48px 40px;text-align:center;background:linear-gradient(135deg,rgba(99,102,241,0.06),rgba(168,85,247,0.06));border:1px solid rgba(99,102,241,0.18);border-radius:20px}
.cta-row h2{font-size:28px;font-weight:900;letter-spacing:-1px;color:#eef2ff;margin-bottom:8px}
.cta-row p{font-size:14.5px;color:rgba(238,242,255,0.6);margin-bottom:22px}
.cta-actions{display:inline-flex;gap:10px;flex-wrap:wrap;justify-content:center}
.cta-actions a{padding:11px 20px;border-radius:10px;font-size:13.5px;font-weight:700;letter-spacing:.1px}
.cta-primary{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;box-shadow:0 8px 20px -8px rgba(79,70,229,0.6)}
.cta-secondary{background:rgba(255,255,255,0.04);color:#a5b4fc;border:1px solid rgba(255,255,255,0.1)}

/* ── Footer ────────────────────────────────── */
footer-bar{display:block;border-top:1px solid rgba(255,255,255,0.05);padding:32px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:12px;color:rgba(238,242,255,0.22)}
footer-bar a{color:rgba(238,242,255,0.35);font-size:12px}
footer-bar a:hover{color:rgba(238,242,255,0.7)}
.f-links{display:flex;gap:20px;flex-wrap:wrap}

@media(max-width:900px){
  nav{padding:0 20px}
  .hero{padding:48px 20px 32px}
  .hero-quicklinks{gap:8px;margin-top:22px}
  .hero-quicklinks a{font-size:12px;padding:6px 11px}
  .pillars{grid-template-columns:1fr;gap:12px;padding:0 20px;margin-bottom:48px}
  .spotlight{padding:0 20px;margin-bottom:56px}
  .spotlight-card{grid-template-columns:1fr;padding:28px 24px;gap:20px;text-align:center}
  .spotlight-icon{font-size:80px}
  .section{padding:0 20px;margin-bottom:48px}
  .section h2{font-size:26px}
  .feature-grid,.process{grid-template-columns:1fr}
  .sub-row{grid-template-columns:1fr;gap:6px;padding:14px 18px}
  .sub-row.sub-head{display:none}
  .sub-region{font-size:11px}
  .cta-row{padding:32px 24px;margin:48px 20px 32px}
  footer-bar{padding:24px 20px}
}

</style>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

<nav>
  <div style="display:flex;align-items:center;gap:20px">
    <a href="/"><svg width="120" height="26" viewBox="0 0 300 64" fill="none">
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#0A0F1E"/>
      <rect x="1" y="1" width="62" height="62" rx="14" stroke="#4F46E5" stroke-width="2"/>
      <text x="7" y="47" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#4F46E5">C</text>
      <text x="32" y="47" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#FFF">F</text>
      <text x="80" y="42" font-family="Arial Black,sans-serif" font-weight="900" font-size="28" letter-spacing="-0.5"><tspan fill="#FFF">Carton</tspan><tspan fill="#4F46E5">Flow</tspan></text>
    </svg></a>
    <a href="/" class="back">← Back to home</a>
  </div>
  <div class="nav-r">
    <a href="https://app.cartonflow.io/login" class="nav-login">Log in</a>
    <a href="https://app.cartonflow.io/signup" class="btn-nav">Start free trial</a>
  </div>
</nav>

<!-- ─── HERO ─── -->
<section class="hero">
  <div class="hero-badge">Trust Center</div>
  <h1 class="hero-title">Security <span class="g">built for supply chains.</span></h1>
  <p class="hero-sub">Your supplier list, product catalog, purchase orders, and shipment data are some of your most sensitive operational assets. We built CartonFlow assuming a competitor could be on the other side of the wall.</p>
  <div class="hero-quicklinks">
    <a href="/security-disclosure">Report a vulnerability →</a>
    <a href="/subprocessors">Subprocessor list →</a>
    <a href="/privacy-policy">Privacy policy →</a>
    <a href="mailto:support@cartonflow.io">Email security team →</a>
  </div>
</section>

<!-- ─── 3-UP PILLARS ─── -->
<section class="pillars">
  <div class="pillar">
    <div class="pillar-icon">🔐</div>
    <h3>Privacy Mode</h3>
    <p>Optional client-side encryption. Your supplier and product names live encrypted on our servers — even CartonFlow staff can't decrypt them.</p>
  </div>
  <div class="pillar">
    <div class="pillar-icon">🛡️</div>
    <h3>Tenant isolation</h3>
    <p>Every database read filters on your account ID at the query layer. Account A can't see Account B's data even in error scenarios.</p>
  </div>
  <div class="pillar">
    <div class="pillar-icon">📋</div>
    <h3>Full audit trail</h3>
    <p>Every action by you, your team, and our AI assistant is logged to an append-only audit table. Investigate any change later.</p>
  </div>
</section>

<!-- ─── PRIVACY MODE SPOTLIGHT ─── -->
<section class="spotlight">
  <div class="spotlight-card">
    <div>
      <div class="spotlight-tag">Differentiator</div>
      <h2>Privacy Mode: data we<br/>literally cannot read.</h2>
      <p>For tenants that turn it on, product names, ASINs, SKUs, and supplier names are encrypted in your browser before they reach our servers. The decryption key never leaves your device.</p>
      <p>If we got subpoenaed, hacked, or had a rogue employee — there's nothing useful for them to read. The data on our database is opaque ciphertext.</p>
      <p style="margin-top:18px"><a href="/privacy-policy" style="font-size:13px;font-weight:700;color:#a5b4fc">Read the technical details in our Privacy Policy →</a></p>
    </div>
    <div class="spotlight-icon">🔒</div>
  </div>
</section>

<!-- ─── ENCRYPTION & ACCESS ─── -->
<section class="section">
  <div class="section-label">Layer 1 · Data protection</div>
  <h2>Your data, encrypted at every step.</h2>
  <p class="section-lead">Standard encryption everywhere, with stronger protection available for tenants who need it.</p>
  <div class="feature-grid">
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>TLS 1.3 in transit</h3></div>
      <p>Every byte between you and CartonFlow flows over TLS 1.3. HSTS preload directive tells browsers to never connect over HTTP again.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>AES-256 at rest</h3></div>
      <p>Database storage is AES-256 encrypted at rest by default — the standard the U.S. government uses for top-secret data.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>Argon2id passwords</h3></div>
      <p>Passwords are hashed with Argon2id — the OWASP-recommended algorithm. Even if our database leaked, passwords stay protected.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>Two-factor authentication</h3></div>
      <p>TOTP-based 2FA for any account that wants it. Required setting available for accounts with elevated permissions.</p>
    </div>
  </div>
</section>

<!-- ─── ISOLATION & ACCESS CONTROL ─── -->
<section class="section">
  <div class="section-label">Layer 2 · Isolation</div>
  <h2>One database, but every tenant lives alone.</h2>
  <p class="section-lead">Multi-tenant architecture done right: isolation enforced at the lowest possible layer, not after-the-fact in application code.</p>
  <div class="feature-grid">
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>Query-layer tenant filter</h3></div>
      <p>Every read filters on your tenant ID. Even an internal bug can't accidentally show one customer's data to another.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>JWT session tokens</h3></div>
      <p>Short-lived signed tokens carry your authentication. Revocable instantly via password change or 2FA reset.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>Role-based permissions</h3></div>
      <p>Owner, distributor, 3PL partner, and read-only roles — each only sees what their job requires.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot"></span><h3>Production access logged</h3></div>
      <p>Internal access to production infrastructure is gated, MFA-enforced, and recorded in an immutable audit log.</p>
    </div>
  </div>
</section>

<!-- ─── AMAZON CALLOUT ─── -->
<section class="section">
  <div class="section-label">Common question</div>
  <h2>Will CartonFlow get my Amazon account flagged?</h2>
  <p class="section-lead">Short answer: <strong style="color:#eef2ff;font-weight:800">no</strong>. Here's why we're confident saying that.</p>
  <div class="amazon-card">
    <h3>We use Amazon's official SP-API the way Amazon intends.</h3>
    <p>CartonFlow integrates with Amazon Selling Partner API through Amazon's standard OAuth flow. You explicitly authorize the connection from your Seller Central account; you can revoke it anytime.</p>
    <ul class="amazon-list">
      <li><strong>OAuth-scoped, revocable:</strong> we never see your Amazon password. You grant only the permissions we ask for, and you can revoke from Seller Central with one click.</li>
      <li><strong>Rate-limit compliant:</strong> we respect Amazon's per-endpoint rate limits with exponential backoff. You won't get throttled because of CartonFlow.</li>
      <li><strong>Read-mostly access:</strong> 95% of our calls are read operations (sales velocity, FBA inventory, shipment status). Reads cannot flag accounts.</li>
      <li><strong>No policy-violation surfaces:</strong> account flagging happens for review manipulation, counterfeits, policy violations, suspicious login patterns. None of those are things CartonFlow touches.</li>
    </ul>
  </div>
</section>

<!-- ─── SUBPROCESSORS ─── -->
<section class="section">
  <div class="section-label">Layer 3 · Vendors</div>
  <h2>The companies that touch your data.</h2>
  <p class="section-lead">Every B2B service relies on vendors. We pick ones we trust, with regions and purposes clearly defined. Updated as our stack evolves.</p>
  <div class="sub-table">
    <div class="sub-row sub-head">
      <div>Vendor</div><div>Purpose</div><div>Region</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Fly.io</div>
      <div class="sub-purpose">Application hosting (cartonflow.io app servers)</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Supabase</div>
      <div class="sub-purpose">Postgres database hosting (encrypted at rest)</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Cloudflare</div>
      <div class="sub-purpose">DNS, DDoS protection, edge caching</div>
      <div class="sub-region">Global edge</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Stripe</div>
      <div class="sub-purpose">Payment processing (PCI DSS Level 1)</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Resend</div>
      <div class="sub-purpose">Transactional email delivery</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Sentry</div>
      <div class="sub-purpose">Error monitoring (no PII in error payloads)</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">Upstash</div>
      <div class="sub-purpose">Redis-based rate limiting</div>
      <div class="sub-region">US</div>
    </div>
    <div class="sub-row">
      <div class="sub-name">OpenAI / Anthropic / Google AI</div>
      <div class="sub-purpose">AI assistant inference (zero-retention agreements; data not used to train models)</div>
      <div class="sub-region">US</div>
    </div>
  </div>
  <p class="sub-cta">We notify customers via email and update this page <strong style="color:#eef2ff">at least 30 days before adding a new subprocessor</strong>. <a href="/subprocessors">View the full subprocessor list →</a></p>
</section>

<!-- ─── OPERATIONS ─── -->
<section class="section">
  <div class="section-label">Layer 4 · Operations</div>
  <h2>What happens when something goes wrong.</h2>
  <p class="section-lead">Real security is the process behind the product. Here's how we operate.</p>
  <div class="process">
    <div class="proc">
      <div class="proc-num">01</div>
      <div class="proc-body">
        <h3>Incident response</h3>
        <p>Documented runbook for security incidents. Affected customers notified within 72 hours per industry standard. Post-incident report published within 7 days.</p>
      </div>
    </div>
    <div class="proc">
      <div class="proc-num">02</div>
      <div class="proc-body">
        <h3>Vulnerability management</h3>
        <p>Dependencies scanned weekly via Dependabot. Critical CVEs patched within 7 days; high-severity within 30. Reviewed and tracked in a public-style log.</p>
      </div>
    </div>
    <div class="proc">
      <div class="proc-num">03</div>
      <div class="proc-body">
        <h3>Backup &amp; restore</h3>
        <p>Daily automated database backups. Restore drills run quarterly to verify backups are usable. Point-in-time recovery available for the last 7 days.</p>
      </div>
    </div>
    <div class="proc">
      <div class="proc-num">04</div>
      <div class="proc-body">
        <h3>Responsible disclosure</h3>
        <p>Found a vulnerability? Report it safely to <a href="mailto:support@cartonflow.io">support@cartonflow.io</a>. We respond within 2 business days and won't pursue legal action against good-faith research. <a href="/security-disclosure" style="font-weight:700">Read the full disclosure policy →</a></p>
      </div>
    </div>
    <div class="proc">
      <div class="proc-num">05</div>
      <div class="proc-body">
        <h3>Audit logs</h3>
        <p>Every action that changes your data is recorded — who did it, when, from what IP, what was the before/after. Available to account owners on request.</p>
      </div>
    </div>
    <div class="proc">
      <div class="proc-num">06</div>
      <div class="proc-body">
        <h3>Data Processing Agreement</h3>
        <p>DPA available on request for any customer needing one for GDPR, CCPA, or internal procurement. Email <a href="mailto:support@cartonflow.io">support@cartonflow.io</a>.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── COMPLIANCE STATUS ─── -->
<section class="section">
  <div class="section-label">Layer 5 · Compliance</div>
  <h2>Compliance status, plainly stated.</h2>
  <p class="section-lead">We'd rather tell you exactly where we are than imply we have certifications we don't. Here's the honest picture.</p>
  <div class="feature-grid">
    <div class="feature" style="border-color:rgba(34,197,94,0.25);background:rgba(34,197,94,0.03)">
      <div class="feature-h"><span class="feature-dot" style="background:linear-gradient(135deg,#10B981,#22C55E)"></span><h3>GDPR-aligned</h3></div>
      <p>Data subject rights honored: access, correction, export, deletion. EU customers supported with SCCs in our DPA.</p>
    </div>
    <div class="feature" style="border-color:rgba(34,197,94,0.25);background:rgba(34,197,94,0.03)">
      <div class="feature-h"><span class="feature-dot" style="background:linear-gradient(135deg,#10B981,#22C55E)"></span><h3>CCPA aligned</h3></div>
      <p>California consumer privacy rights honored. We don't sell your data and never have.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot" style="background:rgba(238,242,255,0.4)"></span><h3>SOC 2 — on the roadmap</h3></div>
      <p>We're not yet SOC 2 certified. If your procurement requires it, talk to us — we'll share our timeline and the controls we've already implemented from the framework.</p>
    </div>
    <div class="feature">
      <div class="feature-h"><span class="feature-dot" style="background:rgba(238,242,255,0.4)"></span><h3>Pentest — on the roadmap</h3></div>
      <p>No third-party pen test report yet. Enterprise customers can request our internal security review and threat model under NDA.</p>
    </div>
  </div>
</section>

<!-- ─── CTA ─── -->
<section class="cta-row">
  <h2>Have a security question we didn't answer?</h2>
  <p>Or need a DPA, security questionnaire response, or pen-test report under NDA?</p>
  <div class="cta-actions">
    <a href="mailto:support@cartonflow.io" class="cta-primary">Email support@cartonflow.io</a>
    <a href="/security-disclosure" class="cta-secondary">Disclosure policy</a>
    <a href="/subprocessors" class="cta-secondary">View subprocessors</a>
  </div>
</section>

<footer-bar>
  <a href="/">&#169; 2026 CartonFlow by Pevara Systems</a>
  <div class="f-links">
    <a href="/security">Security</a>
    <a href="/privacy-policy">Privacy</a>
    <a href="/terms-of-service">Terms</a>
    <a href="/cancellation">Cancellation</a>
    <a href="/acceptable-use">Acceptable Use</a>
    <a href="/cookies">Cookies</a>
    <a href="/support">Support</a>
  </div>
</footer-bar>`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
