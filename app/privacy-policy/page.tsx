import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CartonFlow Privacy Policy — Pevara Systems",
  description: "How CartonFlow collects, uses, and protects your data.",
};

export default function Page() {
  const html = `<style>

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#04050f;color:#eef2ff;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:#818cf8;text-decoration:none}.a:hover{color:#a5b4fc}
.g{background:linear-gradient(135deg,#c4b5fd,#818cf8,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
nav{position:sticky;top:0;z-index:100;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(4,5,15,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.05)}
.nav-r{display:flex;align-items:center;gap:12px}
.nav-login{color:rgba(255,255,255,0.45);font-size:13px;font-weight:600;transition:color .2s}
.nav-login:hover{color:#fff}
.btn-nav{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(79,70,229,0.4)}
.back{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:rgba(255,255,255,0.35);font-weight:600}
.back:hover{color:#eef2ff}
.page-wrap{max-width:760px;margin:0 auto;padding:64px 40px 100px}
.page-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#818cf8;background:rgba(79,70,229,0.1);border:1px solid rgba(79,70,229,0.2);border-radius:4px;padding:4px 10px;margin-bottom:20px}
.page-title{font-size:clamp(32px,5vw,52px);font-weight:900;letter-spacing:-2px;line-height:1.05;margin-bottom:12px}
.page-date{font-size:13px;color:rgba(238,242,255,0.3);margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.07)}
h2{font-size:18px;font-weight:800;letter-spacing:-0.3px;color:#eef2ff;margin:40px 0 12px}
h3{font-size:15px;font-weight:700;color:#a5b4fc;margin:24px 0 8px}
p{font-size:15px;color:rgba(238,242,255,0.55);line-height:1.8;margin-bottom:16px}
ul,ol{padding-left:20px;margin-bottom:16px}
li{font-size:15px;color:rgba(238,242,255,0.55);line-height:1.8;margin-bottom:6px}
.highlight{background:rgba(79,70,229,0.08);border:1px solid rgba(79,70,229,0.15);border-radius:10px;padding:20px 24px;margin:24px 0}
.highlight p{color:rgba(238,242,255,0.65);margin-bottom:0}
footer-bar{display:block;border-top:1px solid rgba(255,255,255,0.05);padding:32px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:12px;color:rgba(238,242,255,0.22)}
footer-bar a{color:rgba(238,242,255,0.35);font-size:12px}
footer-bar a:hover{color:rgba(238,242,255,0.7)}
.f-links{display:flex;gap:20px;flex-wrap:wrap}
@media(max-width:700px){nav{padding:0 20px}.page-wrap{padding:40px 20px 80px}footer-bar{padding:24px 20px}}

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
<div class="page-wrap">
  <div class="page-badge">Legal</div>
  <h1 class="page-title">Privacy<br/><span class='g'>Policy.</span></h1>
  <p class="page-date">Last updated: March 22, 2026 &nbsp;·&nbsp; Effective: March 22, 2026</p>
  
<div class="highlight"><p><strong>Short version:</strong> CartonFlow collects only what it needs to operate. We don't sell your data. Ever.</p></div>

<h2>1. Who We Are</h2>
<p>CartonFlow is operated by Pevara Systems. When we say "CartonFlow," "we," "us," or "our," we mean Pevara Systems. Questions? <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a></p>

<h2>2. What We Collect</h2>
<h3>Account information</h3>
<p>When you create an account we collect your name, email address, company name, and password (hashed — we never store it in plaintext).</p>
<h3>Shipment and logistics data</h3>
<p>Data you enter into the platform: shipments, products, destinations, 3PL contacts, messages, invoices, and documents. This data belongs to you.</p>
<h3>Usage data</h3>
<p>We collect standard server logs: IP address, browser type, pages visited, and timestamps. This helps us diagnose issues and improve the product.</p>
<h3>Payment data</h3>
<p>All payment processing is handled by Stripe. CartonFlow never sees or stores your full card number. We store only your Stripe customer ID and subscription status.</p>
<h3>Carrier credentials</h3>
<p>If you connect FedEx or UPS accounts, we store your API credentials (encrypted at rest) solely to pull tracking data on your behalf.</p>

<h2>3. How We Use Your Data</h2>
<ul>
  <li>To operate and provide the CartonFlow platform</li>
  <li>To send transactional emails (shipment alerts, invoices, weekly digests)</li>
  <li>To process billing via Stripe</li>
  <li>To monitor errors and improve reliability (Sentry)</li>
  <li>To comply with legal obligations</li>
</ul>
<p>We do not use your data for advertising. We do not sell your data to third parties. We do not use your logistics data to train AI models.</p>

<h2>4. Data Sharing</h2>
<p>We share data only with:</p>
<ul>
  <li><strong>Your 3PLs and partners</strong> — data you explicitly share with them through the platform</li>
  <li><strong>Stripe</strong> — for payment processing</li>
  <li><strong>Supabase / AWS</strong> — database and infrastructure hosting</li>
  <li><strong>Sentry</strong> — error monitoring (no PII in error payloads)</li>
  <li><strong>FedEx / UPS</strong> — only to retrieve tracking data using your own credentials</li>
</ul>

<h2>5. Data Retention</h2>
<p>We retain your data for as long as your account is active. If you cancel, we retain your data for 90 days before permanent deletion, unless you request immediate deletion.</p>

<h2>6. Your Rights</h2>
<p>You have the right to access, correct, export, or delete your data at any time. Email <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a> and we'll respond within 5 business days.</p>

<h2>7. Security</h2>
<p>All data is encrypted in transit (TLS) and at rest. Passwords are hashed using bcrypt. We use JWT-based authentication with short-lived access tokens and longer-lived refresh tokens stored securely.</p>

<h2>8. Cookies</h2>
<p>We use session cookies for authentication only. We do not use advertising or tracking cookies. See our <a href="/cookies">Cookie Policy</a> for details.</p>

<h2>9. Changes to This Policy</h2>
<p>We'll notify you by email if we make material changes to this policy. Continued use of CartonFlow after changes constitutes acceptance.</p>

<h2>10. Contact</h2>
<p>Pevara Systems · <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a></p>

</div>
<footer-bar>
  <a href="/">&#169; 2026 CartonFlow by Pevara Systems</a>
  <div class="f-links">
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
