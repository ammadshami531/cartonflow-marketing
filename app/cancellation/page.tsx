import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CartonFlow Cancellation & Refund Policy — Pevara Systems",
  description: "Cancel anytime, no questions asked. Monthly and annual refund details.",
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
  <h1 class="page-title">Cancellation &amp;<br/><span class='g'>Refund Policy.</span></h1>
  <p class="page-date">Last updated: March 22, 2026 &nbsp;·&nbsp; Effective: March 22, 2026</p>
  
<div class="highlight"><p><strong>Short version:</strong> Cancel anytime, no questions asked. Monthly plans stop at end of cycle. Annual plans get a prorated refund after 30 days.</p></div>

<h2>1. Cancelling Your Subscription</h2>
<p>You can cancel your CartonFlow subscription at any time from your account dashboard under <strong>Settings → Billing → Manage Subscription</strong>. This opens the Stripe Billing Portal where you can cancel, change plans, or update payment info. No phone calls, no forms, no waiting.</p>

<h2>2. What Happens When You Cancel</h2>
<ul>
  <li>Your account remains active until the end of your current billing period</li>
  <li>You will not be charged again after cancellation</li>
  <li>Your data is retained for 90 days after the billing period ends, then permanently deleted</li>
  <li>You can export your data at any time before deletion</li>
</ul>

<h2>3. Free Trial Cancellations</h2>
<p>If you cancel during your 14-day free trial, you will not be charged. Your account will remain active until the trial end date.</p>

<h2>4. Monthly Plan Refunds</h2>
<p>Monthly plans are non-refundable for the current billing period. When you cancel, you keep access through the end of the period you've paid for. No partial-month refunds.</p>

<h2>5. Annual Plan Refunds</h2>
<p>Annual plans are eligible for a prorated refund of unused months if you cancel after the first 30 days. To request a refund, email <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a> with your account email. Refunds are processed within 5–10 business days via the original payment method.</p>
<p>Example: If you paid $756 for an annual Basic plan and cancel after 4 months, you are eligible for a refund of 8/12 × $756 = $504.</p>

<h2>6. Refunds for Service Outages</h2>
<p>If CartonFlow experiences a verified outage exceeding 24 consecutive hours, we will provide a prorated credit for the affected period upon request.</p>

<h2>7. Disputed Charges</h2>
<p>Before disputing a charge with your bank, please email us at <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a>. We resolve billing disputes quickly and chargebacks result in immediate account suspension.</p>

<h2>8. 3PL / Partner Accounts</h2>
<p>Partner (3PL, forwarder, distributor) accounts are always free and do not require cancellation. They are automatically deactivated if the inviting brand's subscription lapses.</p>

<h2>9. Contact</h2>
<p>Billing questions: <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a> — we respond within 1 business day.</p>

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
