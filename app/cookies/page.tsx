import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CartonFlow Cookie Policy — Pevara Systems",
  description: "CartonFlow uses cookies only for authentication. No advertising cookies.",
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
  <h1 class="page-title">Cookie<br/><span class='g'>Policy.</span></h1>
  <p class="page-date">Last updated: March 22, 2026 &nbsp;·&nbsp; Effective: March 22, 2026</p>
  
<div class="highlight"><p><strong>Short version:</strong> We use cookies only for authentication and basic analytics. No advertising cookies. No selling data.</p></div>

<h2>1. What Are Cookies</h2>
<p>Cookies are small text files stored in your browser when you visit a website. They help websites remember your session and preferences.</p>

<h2>2. Cookies We Use</h2>
<h3>Authentication cookies (essential)</h3>
<p>When you log into CartonFlow, we store a session cookie to keep you logged in. This cookie is essential — the platform cannot function without it. It expires when you log out or after 30 days of inactivity.</p>
<h3>Security cookies (essential)</h3>
<p>We store a CSRF token cookie to protect your account from cross-site request forgery attacks. This is a security requirement, not tracking.</p>
<h3>Preference cookies (optional)</h3>
<p>We may store your UI preferences (e.g. dark/light mode, dashboard layout) in a cookie or local storage to avoid re-asking on every visit.</p>

<h2>3. Cookies We Do NOT Use</h2>
<ul>
  <li>Advertising or retargeting cookies</li>
  <li>Third-party tracking cookies (Facebook Pixel, Google Ads, etc.)</li>
  <li>Analytics cookies that identify you personally</li>
</ul>

<h2>4. Marketing Site (cartonflow.io)</h2>
<p>The marketing site uses no cookies unless you log in or sign up. We may use basic anonymous analytics (page views, referrer) but do not track individual visitors.</p>

<h2>5. Managing Cookies</h2>
<p>You can delete or block cookies in your browser settings. Blocking authentication cookies will prevent you from logging into CartonFlow.</p>

<h2>6. Changes</h2>
<p>If we add new cookies, we'll update this policy. We'll notify you by email of any material changes.</p>

<h2>7. Contact</h2>
<p><a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a></p>

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
