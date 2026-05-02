import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subprocessors — CartonFlow",
  description: "The complete list of third-party subprocessors that CartonFlow uses to deliver the platform, with the data they handle and where they store it.",
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

.page-wrap{max-width:1100px;margin:0 auto;padding:64px 40px 100px}
.page-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#818cf8;background:rgba(79,70,229,0.1);border:1px solid rgba(79,70,229,0.2);border-radius:4px;padding:4px 10px;margin-bottom:20px}
.page-title{font-size:clamp(32px,5vw,52px);font-weight:900;letter-spacing:-2px;line-height:1.05;margin-bottom:14px}
.page-lead{font-size:16px;line-height:1.7;color:rgba(238,242,255,0.55);max-width:740px;margin-bottom:14px}
.page-date{font-size:13px;color:rgba(238,242,255,0.3);margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.07)}

.notice{background:rgba(79,70,229,0.08);border:1px solid rgba(79,70,229,0.18);border-radius:14px;padding:22px 28px;margin-bottom:48px}
.notice h3{font-size:14px;font-weight:800;color:#a5b4fc;letter-spacing:-0.2px;margin-bottom:8px}
.notice p{font-size:14px;color:rgba(238,242,255,0.65);line-height:1.65;margin-bottom:0}

.cat-block{margin-bottom:56px}
.cat-label{font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#818cf8;margin-bottom:8px}
.cat-title{font-size:24px;font-weight:900;color:#eef2ff;letter-spacing:-0.8px;margin-bottom:20px}

.sub-table{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:14px;overflow:hidden}
.sub-row{display:grid;grid-template-columns:160px 1fr 220px 90px;gap:24px;padding:16px 22px;align-items:start;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04)}
.sub-row:last-child{border-bottom:none}
.sub-row.sub-head{font-size:10.5px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:rgba(238,242,255,0.4);background:rgba(255,255,255,0.02)}
.sub-name{color:#eef2ff;font-weight:700;font-size:13.5px}
.sub-name a{color:#a5b4fc;font-size:11px;font-weight:600;display:block;margin-top:3px}
.sub-purpose{color:rgba(238,242,255,0.6);line-height:1.55}
.sub-data{color:rgba(238,242,255,0.45);font-size:12px;line-height:1.55}
.sub-region{color:rgba(238,242,255,0.45);font-size:12px}

.faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.faq-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:22px}
.faq-card h3{font-size:14.5px;font-weight:800;color:#eef2ff;margin-bottom:8px;letter-spacing:-0.2px}
.faq-card p{font-size:13px;line-height:1.65;color:rgba(238,242,255,0.55)}

.cta-row{margin:64px 0 0;padding:36px 40px;text-align:center;background:linear-gradient(135deg,rgba(99,102,241,0.06),rgba(168,85,247,0.06));border:1px solid rgba(99,102,241,0.18);border-radius:16px}
.cta-row h2{font-size:22px;font-weight:900;letter-spacing:-0.6px;color:#eef2ff;margin-bottom:6px}
.cta-row p{font-size:14px;color:rgba(238,242,255,0.6);margin-bottom:18px}
.cta-actions{display:inline-flex;gap:10px;flex-wrap:wrap;justify-content:center}
.cta-actions a{padding:11px 20px;border-radius:10px;font-size:13.5px;font-weight:700}
.cta-primary{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;box-shadow:0 8px 20px -8px rgba(79,70,229,0.6)}
.cta-secondary{background:rgba(255,255,255,0.04);color:#a5b4fc;border:1px solid rgba(255,255,255,0.1)}

footer-bar{display:block;border-top:1px solid rgba(255,255,255,0.05);padding:32px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:12px;color:rgba(238,242,255,0.22)}
footer-bar a{color:rgba(238,242,255,0.35);font-size:12px}
footer-bar a:hover{color:rgba(238,242,255,0.7)}
.f-links{display:flex;gap:20px;flex-wrap:wrap}

@media(max-width:900px){
  nav{padding:0 20px}
  .page-wrap{padding:40px 20px 80px}
  .sub-row{grid-template-columns:1fr;gap:8px;padding:18px 18px}
  .sub-row.sub-head{display:none}
  .sub-name{font-size:14px}
  .faq-grid{grid-template-columns:1fr}
  .cta-row{padding:28px 24px}
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
    <a href="/security" class="back">← Back to Trust Center</a>
  </div>
  <div class="nav-r">
    <a href="https://app.cartonflow.io/login" class="nav-login">Log in</a>
    <a href="https://app.cartonflow.io/signup" class="btn-nav">Start free trial</a>
  </div>
</nav>

<div class="page-wrap">
  <div class="page-badge">Trust Center</div>
  <h1 class="page-title"><span class="g">Subprocessors.</span></h1>
  <p class="page-lead">A complete list of the third-party services that CartonFlow uses to operate the platform, organized by what they help us do. We're upfront about every vendor that may touch your data.</p>
  <p class="page-date">Last updated: May 2, 2026 &nbsp;·&nbsp; Reviewed quarterly</p>

  <div class="notice">
    <h3>Notification of changes</h3>
    <p>We notify customers via email <strong style="color:#eef2ff;font-weight:700">at least 30 days before adding a new subprocessor</strong> that processes customer data. To subscribe to subprocessor change alerts, email <a href="mailto:support@cartonflow.io">support@cartonflow.io</a> from your account email.</p>
  </div>

  <!-- ─── INFRASTRUCTURE ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 1</div>
    <h2 class="cat-title">Infrastructure &amp; hosting</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Fly.io<a href="https://fly.io/legal/privacy-policy/" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Application server hosting for app.cartonflow.io and API endpoints</div>
        <div class="sub-data">Application traffic, request logs (no payload bodies)</div>
        <div class="sub-region">US (IAD, ORD)</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Supabase<a href="https://supabase.com/privacy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Managed Postgres database with point-in-time recovery</div>
        <div class="sub-data">All customer data at rest (encrypted AES-256)</div>
        <div class="sub-region">US East</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Cloudflare<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">DNS, DDoS protection, CDN edge caching for marketing site</div>
        <div class="sub-data">Request metadata only (IP, User-Agent, URL)</div>
        <div class="sub-region">Global edge</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Vercel<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Hosting for cartonflow.io marketing site (no customer data)</div>
        <div class="sub-data">Marketing site visitor analytics only</div>
        <div class="sub-region">US</div>
      </div>
    </div>
  </div>

  <!-- ─── PAYMENTS ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 2</div>
    <h2 class="cat-title">Payments &amp; billing</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Stripe<a href="https://stripe.com/privacy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Subscription billing, card processing, invoice management (PCI DSS Level 1)</div>
        <div class="sub-data">Card numbers (Stripe-tokenized, never seen by us), billing email, subscription metadata</div>
        <div class="sub-region">US</div>
      </div>
    </div>
  </div>

  <!-- ─── COMMUNICATIONS ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 3</div>
    <h2 class="cat-title">Communications</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Resend<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Transactional email delivery (alerts, invoices, password resets, weekly digests)</div>
        <div class="sub-data">Recipient email addresses, message content</div>
        <div class="sub-region">US</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">OneSignal<a href="https://onesignal.com/privacy_policy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Mobile push notification delivery</div>
        <div class="sub-data">Device push tokens, notification payloads</div>
        <div class="sub-region">US</div>
      </div>
    </div>
  </div>

  <!-- ─── OBSERVABILITY ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 4</div>
    <h2 class="cat-title">Observability &amp; security</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Sentry<a href="https://sentry.io/privacy/" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Application error monitoring and performance traces</div>
        <div class="sub-data">Stack traces, request URLs (PII scrubbed at SDK layer)</div>
        <div class="sub-region">US</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Upstash<a href="https://upstash.com/trust/privacy.pdf" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Redis-based rate limiting and ephemeral caching</div>
        <div class="sub-data">IP addresses, request counts (TTL: minutes)</div>
        <div class="sub-region">US East</div>
      </div>
    </div>
  </div>

  <!-- ─── AI ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 5</div>
    <h2 class="cat-title">AI inference</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">OpenAI<a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noopener">policies →</a></div>
        <div class="sub-purpose">AI assistant (Cody) inference for fast queries</div>
        <div class="sub-data">User questions and decrypted context. Per OpenAI's API data-usage policy, API inputs are not used to train OpenAI models.</div>
        <div class="sub-region">US</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Anthropic<a href="https://www.anthropic.com/legal/commercial-terms" target="_blank" rel="noopener">terms →</a></div>
        <div class="sub-purpose">AI assistant (Cody) inference for complex reasoning</div>
        <div class="sub-data">User questions and decrypted context. Per Anthropic's commercial terms, API inputs are not used to train Anthropic models.</div>
        <div class="sub-region">US</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Google AI<a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener">terms →</a></div>
        <div class="sub-purpose">AI assistant (Cody) inference for high-volume tier-1 queries</div>
        <div class="sub-data">User questions and decrypted context. Per Google's paid-tier Gemini API terms, prompts and responses are not used to improve their models.</div>
        <div class="sub-region">US</div>
      </div>
    </div>
  </div>

  <!-- ─── INTEGRATIONS ─── -->
  <div class="cat-block">
    <div class="cat-label">Category 6</div>
    <h2 class="cat-title">Customer-authorized integrations</h2>
    <div class="sub-table">
      <div class="sub-row sub-head">
        <div>Vendor</div><div>Purpose</div><div>Data processed</div><div>Region</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">Amazon SP-API<a href="https://developer-docs.amazon.com/sp-api/docs/data-protection-policy" target="_blank" rel="noopener">policy →</a></div>
        <div class="sub-purpose">Read-only access to seller orders, inventory, and shipments (only when you authorize via OAuth)</div>
        <div class="sub-data">Order data, FBA inventory, shipment status — only data Amazon's API exposes for your seller account</div>
        <div class="sub-region">Amazon-managed</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">FedEx Web Services<a href="https://www.fedex.com/en-us/trust-center/global-privacy-notice.html" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Tracking data retrieval (only when you connect a FedEx account)</div>
        <div class="sub-data">Tracking numbers, shipment status events</div>
        <div class="sub-region">US</div>
      </div>
      <div class="sub-row">
        <div class="sub-name">UPS API<a href="https://www.ups.com/upsdeveloperkit/privacy-policy" target="_blank" rel="noopener">privacy →</a></div>
        <div class="sub-purpose">Tracking data retrieval (only when you connect a UPS account)</div>
        <div class="sub-data">Tracking numbers, shipment status events</div>
        <div class="sub-region">US</div>
      </div>
    </div>
  </div>

  <!-- ─── FAQ ─── -->
  <div class="cat-block">
    <div class="cat-label">FAQ</div>
    <h2 class="cat-title">Common questions</h2>
    <div class="faq-grid">
      <div class="faq-card">
        <h3>Do AI vendors train on my data?</h3>
        <p>No. Per the published API terms of OpenAI, Anthropic, and Google's paid-tier Gemini API, prompts and responses sent through their APIs are not used to train their models. We link to each vendor's terms in the table above so you can verify.</p>
      </div>
      <div class="faq-card">
        <h3>How does Privacy Mode change this list?</h3>
        <p>If Privacy Mode is on, supplier and product names reach Supabase already encrypted. Subprocessors that handle that data (Sentry, AI providers) only see ciphertext or redacted placeholders.</p>
      </div>
      <div class="faq-card">
        <h3>Can I request a sub-list of vendors that touch <em>my</em> data?</h3>
        <p>Yes. Email <a href="mailto:support@cartonflow.io">support@cartonflow.io</a> and we'll generate a tenant-specific report based on which integrations you've enabled.</p>
      </div>
      <div class="faq-card">
        <h3>What happens if a subprocessor has a breach?</h3>
        <p>We treat third-party breaches as our own incidents. Affected customers are notified within 72 hours of confirmation, with a post-incident report within 7 days.</p>
      </div>
    </div>
  </div>

  <div class="cta-row">
    <h2>Need a Data Processing Agreement?</h2>
    <p>DPAs available for any customer who needs one for procurement, GDPR, or internal compliance.</p>
    <div class="cta-actions">
      <a href="mailto:support@cartonflow.io" class="cta-primary">Request a DPA</a>
      <a href="/security" class="cta-secondary">Trust Center</a>
    </div>
  </div>
</div>

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
