import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CartonFlow for Distributors & Wholesalers — Free Visibility Portal",
  description: "CartonFlow is free for distributors and wholesalers. Track inbound shipments, view documents, and communicate with your brand suppliers in one place.",
};

export default function Page() {
  const html = `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#04050f;color:#eef2ff;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:#818cf8;text-decoration:none}
a:hover{color:#a5b4fc}
.g{background:linear-gradient(135deg,#c4b5fd,#818cf8,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
nav{position:sticky;top:0;z-index:100;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(4,5,15,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.05)}
.nav-r{display:flex;align-items:center;gap:12px}
.nav-login{color:rgba(255,255,255,0.45);font-size:13px;font-weight:600;transition:color .2s}.nav-login:hover{color:#fff}
.btn-nav{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(79,70,229,0.4)}
.back{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:rgba(255,255,255,0.35);font-weight:600}.back:hover{color:#eef2ff}
.hero{padding:80px 48px 60px;max-width:1100px;margin:0 auto}
.badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(129,140,248,0.25);background:rgba(79,70,229,0.1);padding:6px 16px;border-radius:100px;font-size:12px;color:#a5b4fc;font-weight:600;margin-bottom:24px}
.badge-dot{width:6px;height:6px;border-radius:50%;background:#818cf8;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
h1{font-size:clamp(40px,6vw,72px);font-weight:900;letter-spacing:-2.5px;line-height:1.0;margin-bottom:20px}
.hero p{font-size:18px;color:rgba(238,242,255,0.5);max-width:580px;line-height:1.75;margin-bottom:36px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.btn-fill{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 6px 24px rgba(79,70,229,0.4)}
.btn-ghost{border:1px solid rgba(255,255,255,0.12);color:#eef2ff;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;background:rgba(255,255,255,0.04)}
.free-note{font-size:12px;color:rgba(255,255,255,0.25)}
.cards{max-width:1100px;margin:0 auto;padding:0 48px 80px;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:32px}
.card-icon{font-size:28px;margin-bottom:16px}
.card h3{font-size:16px;font-weight:800;color:#eef2ff;margin-bottom:10px}
.card p{font-size:13px;color:rgba(238,242,255,0.45);line-height:1.7}
.how{background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);padding:60px 48px}
.how-inner{max-width:1100px;margin:0 auto}
.how-inner h2{font-size:clamp(24px,3vw,40px);font-weight:900;letter-spacing:-1.5px;margin-bottom:48px}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.step-num{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;font-size:16px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-bottom:14px;box-shadow:0 4px 12px rgba(79,70,229,0.4)}
.step h4{font-size:15px;font-weight:700;color:#eef2ff;margin-bottom:8px}
.step p{font-size:13px;color:rgba(238,242,255,0.45);line-height:1.7}
.faq-s{max-width:720px;margin:0 auto;padding:60px 48px 80px}
.faq-s h2{font-size:clamp(22px,3vw,36px);font-weight:900;letter-spacing:-1px;margin-bottom:36px}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.07)}
.faq-q{width:100%;background:none;border:none;cursor:pointer;padding:16px 0;display:flex;justify-content:space-between;align-items:center;gap:16px;text-align:left;font-family:'Inter',sans-serif}
.faq-q span{font-size:14px;font-weight:600;color:#eef2ff}
.faq-ic{color:#818cf8;font-size:16px;transition:transform .2s;flex-shrink:0}.faq-ic.open{transform:rotate(180deg)}
.faq-body{font-size:13px;color:rgba(238,242,255,0.45);line-height:1.8;padding-bottom:16px;display:none}.faq-body.open{display:block}
.cta-s{background:#04050f;padding:60px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.04);position:relative;overflow:hidden}
.cta-s::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(79,70,229,0.1) 0%,transparent 65%);pointer-events:none}
.cta-s h2{font-size:clamp(26px,4vw,48px);font-weight:900;letter-spacing:-2px;margin-bottom:16px;position:relative;z-index:1}
.cta-s p{color:rgba(238,242,255,0.35);font-size:15px;margin-bottom:32px;position:relative;z-index:1}
.cta-s a{position:relative;z-index:1}
footer-bar{display:block;border-top:1px solid rgba(255,255,255,0.05);padding:32px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:12px;color:rgba(238,242,255,0.22)}
footer-bar a{color:rgba(238,242,255,0.35);font-size:12px}.footer-bar a:hover{color:rgba(238,242,255,0.7)}
.f-links{display:flex;gap:20px;flex-wrap:wrap}
@media(max-width:800px){nav,footer-bar{padding:0 20px}.hero,.cards,.how,.faq-s,.cta-s{padding-left:20px;padding-right:20px}.cards{grid-template-columns:1fr}.steps{grid-template-columns:1fr}}
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

<div class="hero">
  <div class="badge"><div class="badge-dot"></div> Always free for distributors and wholesalers</div>
  <h1>Visibility into<br/><span class="g">your inventory — free.</span></h1>
  <p>Your brand suppliers are using CartonFlow to manage their supply chain. Your distributor portal gives you real-time visibility into shipments coming your way — at no cost.</p>
  <div class="hero-cta">
    <a href="https://app.cartonflow.io/login" class="btn-fill">Log into your portal →</a>
  </div>
  <p class="free-note" style="margin-top:14px">Access is by invitation from your brand supplier · Already invited? Log in above</p>
</div>

<div class="cards">
  <div class="card">
    <div class="card-icon">🚚</div>
    <h3>Track your inbound shipments</h3>
    <p>See real-time status on every shipment your supplier has sent your way. No more chasing emails for ETAs or calling to find out if the truck has left.</p>
  </div>
  <div class="card">
    <div class="card-icon">📋</div>
    <h3>View shipment documents</h3>
    <p>Access packing lists, BOLs, customs documentation, and product specs — shared directly by your brand supplier, tied to the right shipment.</p>
  </div>
  <div class="card">
    <div class="card-icon">💬</div>
    <h3>Communicate per shipment</h3>
    <p>Ask questions, flag issues, and confirm receipts in a threaded message thread tied to each specific shipment. No more burying updates in email chains.</p>
  </div>
  <div class="card">
    <div class="card-icon">📊</div>
    <h3>Inventory visibility</h3>
    <p>See carton counts, SKUs, and destinations for your inbound inventory before it arrives. Plan your warehouse receiving with accurate, real-time data.</p>
  </div>
  <div class="card">
    <div class="card-icon">🔔</div>
    <h3>Milestone notifications</h3>
    <p>Get notified when your shipment departs, clears customs, and is out for delivery — without having to ask your supplier every time.</p>
  </div>
  <div class="card">
    <div class="card-icon">🆓</div>
    <h3>Free. Always.</h3>
    <p>CartonFlow is free for all distributors and wholesalers. Your brand suppliers pay the subscription. You get the visibility. No catch.</p>
  </div>
</div>

<div class="how">
  <div class="how-inner">
    <h2>How it <span class="g">works.</span></h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <h4>Your supplier invites you</h4>
        <p>Your brand supplier sends you an invitation from their CartonFlow account. You receive an email with a link to set up your free distributor portal.</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h4>Set up your account</h4>
        <p>Create your account in minutes. No configuration, no IT requirement — just your name, company, and password.</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h4>Track everything coming your way</h4>
        <p>Your portal shows all shipments your supplier has assigned to you — with real-time status, documents, and a direct line to communicate.</p>
      </div>
    </div>
  </div>
</div>

<div class="faq-s">
  <h2>Questions <span class="g">answered.</span></h2>
  <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Is this really free?</span><span class="faq-ic">▾</span></button><div class="faq-body">Yes, completely free for distributors and wholesalers. Your brand supplier pays the CartonFlow subscription. Your portal costs nothing, forever.</div></div>
  <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>How do we get access?</span><span class="faq-ic">▾</span></button><div class="faq-body">Your brand supplier sends you an invitation from their CartonFlow account. You'll receive an email with a setup link. Ask your supplier to invite you if you haven't received one.</div></div>
  <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Can we see all our suppliers' shipments?</span><span class="faq-ic">▾</span></button><div class="faq-body">You see shipments from any CartonFlow supplier who has invited you. Each supplier's data is kept separate — you only see what they share with you.</div></div>
  <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Do we need to install anything?</span><span class="faq-ic">▾</span></button><div class="faq-body">No. CartonFlow is a web-based platform — it works in any browser, on any device. No app required.</div></div>
</div>

<div class="cta-s">
  <h2>Ready to stop chasing<br/><span class="g">your supplier for updates?</span></h2>
  <p>Ask your brand supplier to invite you to CartonFlow, or contact us and we'll help get you connected.</p>
  <a href="mailto:info@pevarasystems.com" class="btn-fill">Contact us to get started →</a>
</div>

<footer-bar>
  <a href="/">&#169; 2026 CartonFlow by Pevara Systems</a>
  <div class="f-links">
    <a href="/privacy-policy">Privacy</a>
    <a href="/terms-of-service">Terms</a>
    <a href="/cancellation">Cancellation</a>
    <a href="/support">Support</a>
  </div>
</footer-bar>
<script>
function tf(btn){const b=btn.nextElementSibling,ic=btn.querySelector('.faq-ic'),open=b.classList.contains('open');document.querySelectorAll('.faq-body').forEach(x=>x.classList.remove('open'));document.querySelectorAll('.faq-ic').forEach(x=>x.classList.remove('open'));if(!open){b.classList.add('open');ic.classList.add('open');}}
</script>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
