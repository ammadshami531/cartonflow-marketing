import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure — CartonFlow",
  description: "How to report a security vulnerability to CartonFlow. Our coordinated disclosure policy, scope, safe harbor, and what to expect when you report.",
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

.page-wrap{max-width:820px;margin:0 auto;padding:64px 40px 100px}
.page-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#818cf8;background:rgba(79,70,229,0.1);border:1px solid rgba(79,70,229,0.2);border-radius:4px;padding:4px 10px;margin-bottom:20px}
.page-title{font-size:clamp(34px,5.5vw,56px);font-weight:900;letter-spacing:-2px;line-height:1.05;margin-bottom:16px}
.page-lead{font-size:16px;line-height:1.7;color:rgba(238,242,255,0.6);max-width:640px;margin-bottom:14px}
.page-date{font-size:13px;color:rgba(238,242,255,0.3);margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.07)}

.tldr{background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.06));border:1px solid rgba(99,102,241,0.22);border-radius:14px;padding:24px 28px;margin-bottom:48px}
.tldr h3{font-size:14px;font-weight:800;color:#a5b4fc;margin-bottom:10px;letter-spacing:-0.2px}
.tldr p{font-size:14.5px;line-height:1.7;color:rgba(238,242,255,0.7);margin-bottom:0}
.tldr code{background:rgba(255,255,255,0.06);padding:2px 8px;border-radius:5px;font-size:13px;color:#a5b4fc;font-family:'SF Mono',ui-monospace,monospace}

h2{font-size:22px;font-weight:900;letter-spacing:-0.6px;color:#eef2ff;margin:48px 0 14px}
h3{font-size:15.5px;font-weight:800;color:#c4b5fd;margin:24px 0 8px;letter-spacing:-0.2px}
p{font-size:15px;color:rgba(238,242,255,0.6);line-height:1.8;margin-bottom:16px}
ul,ol{padding-left:22px;margin-bottom:16px}
li{font-size:15px;color:rgba(238,242,255,0.6);line-height:1.8;margin-bottom:6px}
li strong,p strong{color:#eef2ff;font-weight:700}

.scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0 24px}
.scope-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px}
.scope-card.in{border-color:rgba(34,197,94,0.22);background:rgba(34,197,94,0.03)}
.scope-card.out{border-color:rgba(239,68,68,0.18);background:rgba(239,68,68,0.03)}
.scope-card h4{font-size:13px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px}
.scope-card.in h4{color:#86efac}
.scope-card.out h4{color:#fca5a5}
.scope-card ul{padding-left:18px;margin:0}
.scope-card li{font-size:13.5px;line-height:1.6;color:rgba(238,242,255,0.62);margin-bottom:5px}

.timeline{margin:8px 0 24px;padding:0;list-style:none;border-left:2px solid rgba(99,102,241,0.25);padding-left:20px}
.timeline li{position:relative;padding:6px 0 10px;color:rgba(238,242,255,0.6);font-size:14.5px;line-height:1.65;margin-bottom:0}
.timeline li::before{content:'';position:absolute;left:-26px;top:14px;width:10px;height:10px;border-radius:50%;background:#6366f1;box-shadow:0 0 0 4px rgba(99,102,241,0.18)}
.timeline strong{color:#eef2ff;font-weight:700}

.contact-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:24px 28px;margin:24px 0}
.contact-card .row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:14px}
.contact-card .row:last-child{border-bottom:none}
.contact-card .key{color:rgba(238,242,255,0.5);font-weight:600}
.contact-card .val{color:#eef2ff;font-weight:700}
.contact-card .val a{color:#a5b4fc}

footer-bar{display:block;border-top:1px solid rgba(255,255,255,0.05);padding:32px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:12px;color:rgba(238,242,255,0.22)}
footer-bar a{color:rgba(238,242,255,0.35);font-size:12px}
footer-bar a:hover{color:rgba(238,242,255,0.7)}
.f-links{display:flex;gap:20px;flex-wrap:wrap}

@media(max-width:700px){
  nav{padding:0 20px}
  .page-wrap{padding:40px 20px 80px}
  .scope-grid{grid-template-columns:1fr}
  .contact-card .row{flex-direction:column;gap:4px;padding:10px 0}
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
  <h1 class="page-title">Responsible <span class="g">disclosure.</span></h1>
  <p class="page-lead">If you've found a security issue in CartonFlow, we want to hear from you. This page tells you how to report it, what we'll do in response, and the legal protections we offer for good-faith research.</p>
  <p class="page-date">Last updated: May 2, 2026 &nbsp;·&nbsp; Effective: May 2, 2026</p>

  <div class="tldr">
    <h3>TL;DR</h3>
    <p>Email <code>support@cartonflow.io</code> with details. Don't access data that isn't yours. We'll respond within 2 business days, work with you on a fix, and won't pursue legal action against good-faith research conducted within this policy.</p>
  </div>

  <h2>1. How to report</h2>
  <p>The fastest way to reach the security team is by email:</p>
  <div class="contact-card">
    <div class="row"><span class="key">Primary contact</span><span class="val"><a href="mailto:support@cartonflow.io">support@cartonflow.io</a></span></div>
    <div class="row"><span class="key">PGP key</span><span class="val"><a href="/.well-known/security.txt">security.txt</a></span></div>
    <div class="row"><span class="key">Response SLA</span><span class="val">2 business days</span></div>
    <div class="row"><span class="key">Languages</span><span class="val">English</span></div>
  </div>

  <p>Please include in your report:</p>
  <ul>
    <li>A clear description of the issue and the asset affected (e.g. <code style="background:rgba(255,255,255,0.06);padding:1px 6px;border-radius:4px;font-size:13px;color:#a5b4fc">app.cartonflow.io/api/...</code>)</li>
    <li>Steps to reproduce, or a proof-of-concept that doesn't access data belonging to other tenants</li>
    <li>Your assessment of impact (what an attacker could do)</li>
    <li>Whether you'd like credit, and the name to credit you under</li>
  </ul>

  <h2>2. Scope</h2>
  <div class="scope-grid">
    <div class="scope-card in">
      <h4>✓ In scope</h4>
      <ul>
        <li>app.cartonflow.io and its API endpoints</li>
        <li>cartonflow.io marketing site</li>
        <li>Authentication and session handling</li>
        <li>Tenant-isolation issues</li>
        <li>Privacy Mode encryption flaws</li>
        <li>Stored XSS, SSRF, IDOR, SQL injection</li>
        <li>Subscription / billing logic flaws</li>
      </ul>
    </div>
    <div class="scope-card out">
      <h4>✗ Out of scope</h4>
      <ul>
        <li>Denial-of-service or volumetric attacks</li>
        <li>Social engineering of staff or customers</li>
        <li>Physical attacks against our offices or vendors</li>
        <li>Issues in third-party services (report to that vendor)</li>
        <li>Missing security headers without demonstrated impact</li>
        <li>Self-XSS or clickjacking on non-sensitive pages</li>
        <li>Findings from automated scanners with no PoC</li>
      </ul>
    </div>
  </div>

  <h2>3. Rules of engagement</h2>
  <p>To stay within this policy and our safe-harbor protections:</p>
  <ul>
    <li><strong>Use your own test account.</strong> Don't probe with another customer's account, even with their permission.</li>
    <li><strong>Don't access, modify, or delete data that isn't yours.</strong> Stop at the first indication of cross-tenant access and report it.</li>
    <li><strong>Don't run automated scans against production.</strong> Tools like Nessus, Burp active scanner, or sqlmap against live tenants are not permitted. Manual or low-volume testing is fine.</li>
    <li><strong>No DoS, no resource exhaustion, no spam.</strong></li>
    <li><strong>Don't publicly disclose</strong> until we've confirmed a fix or 90 days have elapsed (whichever is sooner), unless we agree to a different timeline together.</li>
    <li><strong>Don't extort.</strong> We pay for confirmed bugs (see below). Threats of disclosure to extract payment terminate the safe-harbor.</li>
  </ul>

  <h2>4. What we promise in return</h2>
  <ul>
    <li><strong>Acknowledgment within 2 business days</strong> of receiving your report.</li>
    <li><strong>Triage update within 5 business days</strong> with severity assessment.</li>
    <li><strong>Fix timeline shared</strong> based on severity (see SLA below).</li>
    <li><strong>Credit in our hall of fame</strong> if you'd like, after the fix ships.</li>
    <li><strong>No legal action</strong> against good-faith research that follows this policy.</li>
  </ul>

  <h2>5. Remediation SLAs</h2>
  <ul>
    <li><strong>Critical</strong> (data exposure, account takeover, RCE): patch within 24 hours, public disclosure within 7 days post-fix.</li>
    <li><strong>High</strong> (privilege escalation, sensitive info leak): patch within 7 days.</li>
    <li><strong>Medium</strong> (limited-impact vulnerabilities): patch within 30 days.</li>
    <li><strong>Low</strong> (best-practice deviations): patch on next scheduled release.</li>
  </ul>

  <h2>6. What happens after you report</h2>
  <ol class="timeline">
    <li><strong>Day 0–2:</strong> We acknowledge receipt and assign a tracking ID.</li>
    <li><strong>Day 2–5:</strong> Reproduce, triage, and confirm severity.</li>
    <li><strong>Day 5+:</strong> Patch development. We may ask clarifying questions or share a draft fix for you to verify.</li>
    <li><strong>Patch ships:</strong> We deploy the fix and notify you. If the issue affected customers, we send breach-notification emails per our 72-hour SLA.</li>
    <li><strong>Public credit:</strong> Once fixed, we add you to our security acknowledgments page (with your permission).</li>
  </ol>

  <h2>7. Safe harbor</h2>
  <p>CartonFlow will not pursue civil or criminal action against researchers who:</p>
  <ul>
    <li>Make a good-faith effort to comply with this policy</li>
    <li>Report vulnerabilities promptly</li>
    <li>Avoid privacy violations, service disruption, and data destruction</li>
    <li>Do not exploit the vulnerability beyond what's needed to demonstrate impact</li>
  </ul>
  <p>If a third party brings legal action against you for activities conducted within this policy, we will make our position public on your behalf.</p>

  <h2>8. Recognition</h2>
  <p>We don't currently run a formal paid bounty program, but we offer discretionary recognition for confirmed, well-documented vulnerabilities — based on severity, exploitability, and report quality. Researchers who follow this policy are also publicly credited (with their consent) on our <a href="/security">Trust Center</a>.</p>
  <p>A formal bounty program is on our roadmap as we grow.</p>

  <h2>9. Contact</h2>
  <p>For all security-related correspondence: <a href="mailto:support@cartonflow.io">support@cartonflow.io</a></p>
  <p>For non-security questions, please use <a href="/support">support</a>.</p>
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
