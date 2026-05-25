// ════════════════════════════════════════════════════════════════════════════
// Homepage — v8 marketing overhaul (2026-05-16).
//
// Reframes CartonFlow from "freight tracking app" to "supply chain platform
// built for Amazon brands." Same dangerouslySetInnerHTML pattern as the
// previous homepage so the whole page lives as one self-contained string —
// the existing component library (Hero.tsx, Features.tsx, etc.) is kept on
// disk but no longer rendered from this entry point.
//
// All inline image references hit /screenshots-v8/* in /public. Logos use
// the white-and-indigo /screenshots-v8/cartonflow-logo-white.svg so the
// mark reads correctly on the dark background.
//
// Mobile responsiveness: covered via @media queries at 1100/780/520. The
// hero floating accent panels hide below 1100px because they overlap the
// product screenshot once the layout shrinks.
//
// Links: every nav / footer href points at an existing page on this site;
// the public sandbox CTA points at the isolated demo app. Book-a-demo CTAs
// remain anchored to the evaluation section until that scheduling flow ships.
// ════════════════════════════════════════════════════════════════════════════

export default function Home() {
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
.nav-links a:hover{color:var(--text)}
.nav-cta{display:flex;gap:10px;align-items:center}
.btn{padding:9px 18px;border-radius:8px;font-weight:600;font-size:14px;cursor:pointer;transition:all 140ms;border:none;display:inline-flex;align-items:center;gap:6px}
.btn-ghost{background:transparent;color:var(--text);border:1px solid var(--border-strong)}
.btn-ghost:hover{background:rgba(99,102,241,0.08)}
.btn-primary{background:var(--indigo);color:white}
.btn-primary:hover{background:var(--indigo-bright);transform:translateY(-1px);box-shadow:0 8px 24px -8px rgba(99,102,241,0.6)}
.btn-lg{padding:14px 26px;font-size:15px}

/* HERO */
.hero{padding:90px 0 40px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:1400px;height:700px;pointer-events:none;background:radial-gradient(ellipse,rgba(99,102,241,0.20) 0%,transparent 60%)}
.hero-copy{text-align:center;max-width:880px;margin:0 auto 60px;position:relative}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(99,102,241,0.12);border:1px solid var(--border-strong);color:var(--indigo-glow);font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:24px}
h1{font-size:clamp(36px,7vw,68px);font-weight:800;letter-spacing:-0.025em;line-height:1.05;margin-bottom:24px}
h1 .accent{background:linear-gradient(135deg,var(--indigo-glow) 0%,#c4b5fd 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:clamp(16px,2.2vw,20px);color:var(--text-muted);line-height:1.55;margin:0 auto 32px;max-width:680px}
.hero-ctas{display:flex;gap:12px;align-items:center;margin-bottom:28px;flex-wrap:wrap;justify-content:center}
.hero-meta{display:flex;gap:22px;font-size:13px;color:var(--text-dim);justify-content:center;flex-wrap:wrap}
.hero-meta-item{display:flex;align-items:center;gap:6px}
.check-dot{width:14px;height:14px;border-radius:50%;background:var(--emerald);display:inline-flex;align-items:center;justify-content:center;color:white}

/* Hero shot wrapper */
.hero-shot-wrap{position:relative;max-width:1240px;margin:0 auto;padding:0 32px}
.hero-shot{position:relative;border-radius:18px;overflow:hidden;border:1px solid var(--border-strong);box-shadow:0 60px 140px -40px rgba(0,0,0,0.85),0 0 0 1px rgba(99,102,241,0.12),0 0 120px -30px rgba(99,102,241,0.30)}
.hero-shot img{display:block;width:100%}
.hero-shot::after{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;background:linear-gradient(180deg,transparent 70%,rgba(10,14,26,0.45) 100%)}
.ui-panel{position:absolute;background:rgba(17,24,39,0.95);backdrop-filter:blur(12px);border:1px solid var(--border-strong);border-radius:14px;box-shadow:0 24px 60px -20px rgba(0,0,0,0.8),0 0 0 1px rgba(99,102,241,0.10);padding:14px;z-index:2}
.ui-panel-privacy-hero{top:60px;right:-20px;width:270px}
.ui-panel-rfq-hero{bottom:60px;left:-20px;width:260px}
.mock-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.mock-label{font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-dim);display:inline-flex;align-items:center;gap:6px}

/* PRIVACY STRIP */
.privacy-strip{padding:20px 0;background:linear-gradient(90deg,rgba(99,102,241,0.08) 0%,rgba(139,92,246,0.04) 100%);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.privacy-strip-inner{max-width:1240px;margin:0 auto;padding:0 32px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.privacy-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:6px;background:rgba(99,102,241,0.15);border:1px solid var(--border-strong);font-size:12px;font-weight:800;color:var(--indigo-glow);letter-spacing:0.04em;text-transform:uppercase}
.privacy-text{flex:1;min-width:280px;color:var(--text);font-size:15px;font-weight:500}
.privacy-text strong{color:var(--indigo-glow)}
.privacy-link{color:var(--indigo-glow);font-size:13px;font-weight:600;border-bottom:1px dashed var(--indigo-glow)}

/* SECTIONS */
section{padding:90px 0}
.section-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:14px}
h2{font-size:clamp(28px,4.5vw,40px);font-weight:800;letter-spacing:-0.02em;line-height:1.1;margin-bottom:18px}
.section-sub{font-size:17px;color:var(--text-muted);line-height:1.6;max-width:660px}
.section-header{margin-bottom:56px}
.section-header.centered{text-align:center;max-width:760px;margin-left:auto;margin-right:auto;margin-bottom:56px}
.section-header.centered .section-sub{margin:0 auto}

/* ORIGIN */
.origin{background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.origin-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:64px;align-items:center}
.origin h2{font-size:clamp(24px,3.5vw,34px)}
.lineage-logos{display:flex;flex-direction:column;align-items:stretch;gap:14px;padding:28px;background:var(--bg);border:1px solid var(--border);border-radius:14px}
.lineage-label{font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dim);text-align:center}
.lineage-row{display:flex;align-items:center;justify-content:space-around;gap:24px;padding:22px 20px;background:#ffffff;border-radius:10px;flex-wrap:wrap}
.lineage-logo{height:38px;width:auto;max-width:160px;object-fit:contain}

/* PROBLEM */
.problem{background:var(--bg)}
.stack-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:40px}
.stack-card{padding:18px 14px;background:var(--bg-elev);border:1px solid var(--border);border-radius:10px;text-align:center;opacity:0.7;transition:all 200ms}
.stack-card:hover{opacity:1}
.stack-tool{font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px}
.stack-cost{font-size:11px;color:var(--text-dim)}
.stack-role{font-size:11px;color:var(--text-muted);margin-top:8px;font-style:italic}
.stack-total{display:flex;justify-content:space-between;align-items:center;margin-top:28px;padding:18px 22px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.22);border-radius:12px;gap:12px;flex-wrap:wrap}
.stack-total-left{font-size:14px;color:var(--text-muted)}
.stack-total-right{font-size:22px;font-weight:800;color:var(--red)}
.arrow-down{display:block;width:30px;height:30px;margin:28px auto;border-right:2px solid var(--text-dim);border-bottom:2px solid var(--text-dim);transform:rotate(45deg)}
.solution-card{padding:28px 32px;background:linear-gradient(135deg,rgba(99,102,241,0.10),rgba(139,92,246,0.05));border:1px solid var(--border-strong);border-radius:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.solution-left{font-size:16px;font-weight:600;color:var(--text)}
.solution-right{display:flex;gap:14px;align-items:baseline}
.solution-price{font-size:28px;font-weight:800;color:var(--indigo-glow)}
.solution-saving{font-size:13px;color:var(--emerald);font-weight:700}

/* PILLARS */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.pillar{padding:28px;background:var(--bg-elev);border:1px solid var(--border);border-radius:16px;transition:all 200ms}
.pillar:hover{transform:translateY(-2px);border-color:var(--border-strong)}
.pillar-icon{width:44px;height:44px;border-radius:10px;background:rgba(99,102,241,0.14);display:flex;align-items:center;justify-content:center;margin-bottom:18px;color:var(--indigo-glow)}
.pillar-title{font-size:18px;font-weight:700;margin-bottom:10px}
.pillar-desc{font-size:14px;color:var(--text-muted);line-height:1.6;margin-bottom:14px}
.pillar-list{list-style:none;padding:0}
.pillar-list li{font-size:13px;color:var(--text);padding:6px 0;padding-left:22px;position:relative}
.pillar-list li svg{position:absolute;left:0;top:8px;color:var(--emerald)}

/* FEATURES */
.feature-row{display:grid;grid-template-columns:1fr 1.1fr;gap:64px;align-items:center;margin-bottom:100px}
.feature-row.reverse{grid-template-columns:1.1fr 1fr}
.feature-row.reverse .feature-text{order:2}
.feature-row.reverse .feature-image{order:1}
.feature-row:last-of-type{margin-bottom:0}
.feature-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:12px;display:inline-flex;align-items:center;gap:8px}
.feature-title{font-size:clamp(24px,3.5vw,32px);font-weight:800;letter-spacing:-0.02em;line-height:1.2;margin-bottom:16px}
.feature-desc{font-size:16px;color:var(--text-muted);line-height:1.65;margin-bottom:20px}
.feature-bullets{list-style:none;padding:0;margin-bottom:24px}
.feature-bullets li{padding:8px 0;padding-left:26px;position:relative;font-size:14px;color:var(--text)}
.feature-bullets li svg{position:absolute;left:0;top:9px;color:var(--indigo-glow)}
.feature-image{border-radius:14px;overflow:hidden;border:1px solid var(--border-strong);box-shadow:0 24px 60px -20px rgba(0,0,0,0.5);background:var(--bg-elev)}
.feature-image img{display:block;width:100%}
.feature-roi{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;background:rgba(16,185,129,0.10);border:1px solid rgba(16,185,129,0.30);color:var(--emerald);font-size:13px;font-weight:700;margin-top:8px}

/* B2B */
.b2b{background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.b2b-visual{padding:32px;background:var(--bg);border:1px solid var(--border-strong);border-radius:14px}
.b2b-workspaces{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;align-items:center}
.b2b-ws{padding:18px;background:var(--bg-elev);border:1px solid var(--border);border-radius:10px}
.b2b-ws-label{font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-dim);margin-bottom:8px}
.b2b-ws-name{font-size:16px;font-weight:700;margin-bottom:12px}
.b2b-ws-data{font-size:12px;color:var(--text-muted);line-height:1.7}

/* CODY */
.cody-quote{padding:18px 22px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;margin-bottom:10px;font-size:14px;color:var(--text-muted);position:relative;padding-left:44px}
.cody-quote::before{content:"Q";position:absolute;left:16px;top:16px;width:20px;height:20px;border-radius:50%;background:var(--bg-elev);border:1px solid var(--border-strong);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:var(--text-muted)}
.cody-answer{padding:18px 22px;background:linear-gradient(135deg,rgba(99,102,241,0.10),rgba(139,92,246,0.05));border:1px solid var(--border-strong);border-radius:10px;font-size:14px;color:var(--text);position:relative;padding-left:44px}
.cody-answer::before{content:"";position:absolute;left:16px;top:16px;width:20px;height:20px;border-radius:50%;background:var(--indigo);display:flex;align-items:center;justify-content:center}

/* DEMO */
.demo-section{background:var(--bg)}
.demo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.demo-card{padding:32px;background:var(--bg-elev);border:1px solid var(--border);border-radius:14px;text-align:left;position:relative;transition:all 200ms}
.demo-card:hover{transform:translateY(-3px);border-color:var(--border-strong)}
.demo-card.recommended{border-color:var(--indigo);box-shadow:0 0 0 1px var(--indigo),0 24px 60px -20px rgba(99,102,241,0.4)}
.demo-recommended-badge{position:absolute;top:-12px;left:32px;padding:4px 10px;border-radius:999px;background:var(--indigo);color:white;font-size:11px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase}
.demo-icon{width:36px;height:36px;border-radius:9px;background:rgba(99,102,241,0.14);color:var(--indigo-glow);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.demo-title{font-size:18px;font-weight:700;margin-bottom:10px}
.demo-desc{font-size:14px;color:var(--text-muted);line-height:1.6;margin-bottom:20px;min-height:70px}
.demo-cta{font-size:14px;font-weight:600;color:var(--indigo-glow);display:inline-flex;align-items:center;gap:6px}
.demo-cta.disabled{color:var(--text-dim);cursor:not-allowed}
.demo-soon{display:inline-block;margin-left:6px;padding:2px 8px;border-radius:999px;background:rgba(245,158,11,0.15);color:var(--amber);font-size:10px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase}

/* PRICING */
.pricing-card{max-width:540px;margin:0 auto;padding:40px;background:var(--bg-elev);border:1px solid var(--border-strong);border-radius:18px;box-shadow:0 24px 60px -20px rgba(99,102,241,0.3)}
.pricing-name{font-size:13px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--indigo-glow);margin-bottom:12px}
.pricing-headline{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;flex-wrap:wrap}
.pricing-price{font-size:52px;font-weight:800;letter-spacing:-0.02em}
.pricing-period{font-size:16px;color:var(--text-muted)}
.pricing-sub{font-size:14px;color:var(--text-muted);margin-bottom:28px}
.pricing-divider{height:1px;background:var(--border);margin:24px 0}
.pricing-addon{display:flex;justify-content:space-between;align-items:center;padding:12px 0;font-size:14px;gap:12px}
.pricing-addon-label{color:var(--text);font-weight:500}
.pricing-addon-detail{color:var(--text-muted);font-size:12px;margin-top:2px}
.pricing-addon-cost{font-weight:700;color:var(--text);white-space:nowrap}
.pricing-features{margin-top:28px}
.pricing-features li{list-style:none;padding:6px 0;padding-left:24px;position:relative;font-size:14px;color:var(--text)}
.pricing-features li svg{position:absolute;left:0;top:8px;color:var(--emerald)}

/* FAQ */
.faq-grid{max-width:800px;margin:0 auto}
.faq-item{padding:24px 0;border-bottom:1px solid var(--border)}
.faq-q{font-size:17px;font-weight:700;margin-bottom:10px;color:var(--text)}
.faq-a{font-size:15px;color:var(--text-muted);line-height:1.6}

/* FOOTER */
footer{padding:60px 0 40px;border-top:1px solid var(--border);background:var(--bg-elev)}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-tag{font-size:13px;color:var(--text-muted);margin-top:12px;max-width:280px;line-height:1.6}
.footer-col h4{font-size:12px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px}
.footer-col a{display:block;padding:6px 0;color:var(--text);font-size:14px;transition:color 120ms}
.footer-col a:hover{color:var(--indigo-glow)}
.footer-bottom{padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-dim);gap:16px;flex-wrap:wrap}

/* RESPONSIVE
   1100px → hide hero accent panels (they collide with the screenshot)
   780px  → single-column everything, mobile nav, smaller paddings
   520px  → tighter spacing, footer columns collapse */
@media (max-width:1100px){
  .ui-panel-privacy-hero,.ui-panel-rfq-hero{display:none}
}
@media (max-width:780px){
  .container,.hero-shot-wrap,.nav-inner,.privacy-strip-inner{padding-left:18px;padding-right:18px}
  .nav-links{display:none}
  .nav-inner{padding:12px 18px}
  .logo img{height:30px}
  section{padding:60px 0}
  .hero{padding:60px 0 30px}
  .hero-copy{margin-bottom:40px}
  .hero-eyebrow{font-size:11px;padding:5px 12px}
  .hero-meta{gap:14px}
  .origin-grid,.feature-row,.feature-row.reverse,.pillars,.demo-grid,.stack-grid,.b2b-workspaces{grid-template-columns:1fr;gap:28px}
  .feature-row.reverse .feature-text{order:1}
  .feature-row.reverse .feature-image{order:2}
  .feature-row{margin-bottom:60px}
  .stack-grid{grid-template-columns:repeat(2,1fr)}
  .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
  .pricing-card{padding:28px;margin:0 18px}
  .solution-card{padding:20px 22px;flex-direction:column;align-items:flex-start}
  .stack-total{flex-direction:column;align-items:flex-start}
}
@media (max-width:520px){
  .stack-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .hero-ctas{flex-direction:column;width:100%}
  .hero-ctas .btn{width:100%;justify-content:center}
  .nav-cta .btn-ghost{display:none}
  .pricing-card{margin:0 4px;padding:24px 20px}
  .pricing-price{font-size:42px}
  .lineage-row{padding:16px 12px;gap:14px}
  .lineage-logo{height:30px}
  .feature-eyebrow,.section-eyebrow{font-size:11px}
  h1{margin-bottom:18px}
  .section-header.centered{margin-bottom:36px}
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
    <symbol id="i-play" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>
    <symbol id="i-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/></symbol>
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
      <a href="#pricing">Pricing</a>
      <a href="/security">Security</a>
    </div>
    <div class="nav-cta">
      <a href="#demo" class="btn btn-ghost">Book a demo</a>
      <a href="https://app.cartonflow.io/signup" class="btn btn-primary">Start free trial</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-copy">
      <div class="hero-eyebrow">
        <svg class="icon-sm"><use href="#i-bolt"/></svg>
        Built for Amazon-first brands
      </div>
      <h1>The supply chain platform <span class="accent">built for Amazon brands.</span></h1>
      <p class="hero-sub">From supplier PO to FBA receipt &mdash; in one workspace your team can use and your competitors can&rsquo;t see. Replace the patchwork of forecasting, freight, and inventory tools with the operating system serious brands actually run on.</p>
      <div class="hero-ctas">
        <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg">Start 14-day free trial</a>
        <a href="https://demo.cartonflow.io/demo" class="btn btn-ghost btn-lg">Try the sandbox <svg class="icon-sm"><use href="#i-arrow-right"/></svg></a>
      </div>
      <div class="hero-meta">
        <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> No card required</span>
        <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> SP-API native</span>
        <span class="hero-meta-item"><span class="check-dot"><svg class="icon-sm" style="width:9px;height:9px"><use href="#i-check"/></svg></span> Setup in minutes</span>
      </div>
    </div>
  </div>

  <div class="hero-shot-wrap">
    <div class="hero-shot">
      <img src="/screenshots-v8/fresh-dashboard.png" alt="CartonFlow Mission Control dashboard" loading="eager">
    </div>

    <div class="ui-panel ui-panel-privacy-hero">
      <div class="mock-header">
        <span class="mock-label" style="color:var(--indigo-glow)"><svg class="icon-sm"><use href="#i-lock"/></svg> Privacy Mode &middot; ON</span>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:10px">
        <div style="font-size:10px;color:var(--text-dim);margin-bottom:2px">SUPPLIER</div>
        <div style="font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:6px">
          <span style="filter:blur(5px);user-select:none">Yongkang Acme</span>
          <span style="font-size:9px;padding:2px 6px;background:rgba(99,102,241,0.15);border-radius:4px;color:var(--indigo-glow);font-weight:700">ENCRYPTED</span>
        </div>
      </div>
      <div style="margin-top:8px;font-size:10px;color:var(--text-dim);line-height:1.5">Keys we don&rsquo;t hold. Data we can&rsquo;t read.</div>
    </div>

    <div class="ui-panel ui-panel-rfq-hero">
      <div class="mock-header">
        <span class="mock-label"><svg class="icon-sm"><use href="#i-tag"/></svg> Best bid received</span>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:10px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span style="font-size:12px;font-weight:700">Pacific Freight Co.</span>
          <span style="font-size:13px;font-weight:800;color:var(--emerald)">$4,280</span>
        </div>
        <div style="font-size:10px;color:var(--text-muted)">DDP &middot; 24-day transit &middot; 4.9 rating</div>
      </div>
      <div style="margin-top:8px;padding:4px 8px;background:rgba(16,185,129,0.12);border-radius:4px;font-size:10px;font-weight:700;color:var(--emerald)">Save $610 vs. average</div>
    </div>
  </div>
</section>

<div class="privacy-strip">
  <div class="privacy-strip-inner">
    <span class="privacy-badge"><svg class="icon-sm"><use href="#i-lock"/></svg> Privacy Mode</span>
    <span class="privacy-text">Your supplier list, costs, and POs are encrypted with keys we don&rsquo;t hold. <strong>Even we can&rsquo;t read them.</strong></span>
    <a href="/security" class="privacy-link">How it works <svg class="icon-sm"><use href="#i-arrow-right"/></svg></a>
  </div>
</div>

<section class="origin">
  <div class="container">
    <div class="origin-grid">
      <div>
        <div class="section-eyebrow">Why this exists</div>
        <h2>Fortune 100 supply chain patterns.<br>Built for Amazon brands.</h2>
        <p class="section-sub">CartonFlow takes the systems that run supply chains at companies like <strong style="color:var(--text)">Procter &amp; Gamble</strong>, <strong style="color:var(--text)">Honeywell</strong>, and <strong style="color:var(--text)">Amazon</strong> &mdash; end-to-end visibility, supplier privacy, exception-based management, single source of truth &mdash; and packages them for Amazon brands without the seven-figure ERP price tag.</p>
      </div>
      <div class="lineage-logos">
        <span class="lineage-label">Inspired by the supply chains at</span>
        <div class="lineage-row">
          <img class="lineage-logo" src="/screenshots-v8/logo-pg.svg" alt="Procter &amp; Gamble">
          <img class="lineage-logo" src="/screenshots-v8/logo-honeywell.svg" alt="Honeywell">
          <img class="lineage-logo" src="/screenshots-v8/logo-amazon.svg" alt="Amazon">
        </div>
      </div>
    </div>
  </div>
</section>

<section class="problem">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">The status quo</div>
      <h2>Your supply chain runs on five tools, three Slack channels,<br>and a spreadsheet your COO maintains.</h2>
      <p class="section-sub">Every Amazon brand we&rsquo;ve talked to runs the same patchwork. None of them like it.</p>
    </div>

    <div class="stack-grid">
      <div class="stack-card"><div class="stack-tool">SoStocked</div><div class="stack-cost">$129/mo</div><div class="stack-role">Inventory forecasting</div></div>
      <div class="stack-card"><div class="stack-tool">Inventory Lab</div><div class="stack-cost">$69/mo</div><div class="stack-role">Amazon inventory + COGS</div></div>
      <div class="stack-card"><div class="stack-tool">Freightos</div><div class="stack-cost">Per quote</div><div class="stack-role">Freight quoting</div></div>
      <div class="stack-card"><div class="stack-tool">Cin7 / DEAR</div><div class="stack-cost">$325+/mo</div><div class="stack-role">Supplier &amp; inventory ops</div></div>
      <div class="stack-card"><div class="stack-tool">Excel + Slack</div><div class="stack-cost">Your time</div><div class="stack-role">The glue</div></div>
    </div>

    <div class="stack-total">
      <div class="stack-total-left">Stack cost &middot; plus the operations lead who keeps it all in sync</div>
      <div class="stack-total-right">~$520+/mo</div>
    </div>

    <div class="arrow-down"></div>

    <div class="solution-card">
      <div class="solution-left">One workspace. PO to FBA. Same view for your team, your distributor, and your 3PL.</div>
      <div class="solution-right">
        <span class="solution-price">$249/mo</span>
        <span class="solution-saving">Save the stack</span>
      </div>
    </div>
  </div>
</section>

<section id="features">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">Why CartonFlow</div>
      <h2>Three things every Amazon brand needs.<br>Nobody else delivers all three.</h2>
    </div>

    <div class="pillars">
      <div class="pillar">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-box"/></svg></div>
        <div class="pillar-title">One workspace, PO to FBA</div>
        <div class="pillar-desc">Issue purchase orders, track production milestones, run freight auctions, follow ocean vessels, and confirm FBA receipt &mdash; without leaving the app.</div>
        <ul class="pillar-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Supplier PO lifecycle</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Live ocean &amp; last-mile tracking</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Inventory coverage forecasting</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>FBA receipt confirmation</li>
        </ul>
      </div>
      <div class="pillar" style="border-color:var(--border-strong);box-shadow:0 0 0 1px var(--border-strong)">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-lock"/></svg></div>
        <div class="pillar-title">Your suppliers stay yours</div>
        <div class="pillar-desc">Privacy Mode encrypts your supplier list, unit costs, and PO financials with keys we don&rsquo;t hold. No other platform in this space can offer this. Neither can your COO when they leave.</div>
        <ul class="pillar-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Client-side encryption (ECDH)</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Per-tenant key isolation</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Granular team permissions</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Confidential mask on every screen</li>
        </ul>
      </div>
      <div class="pillar">
        <div class="pillar-icon"><svg class="icon-lg"><use href="#i-bolt"/></svg></div>
        <div class="pillar-title">Built for Amazon brands</div>
        <div class="pillar-desc">SP-API native. FBA-aware everywhere. Container credit billing matches how your freight actually flows. Not a generic ERP rebadged for Amazon.</div>
        <ul class="pillar-list">
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Live FBA stock sync</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>30-day sales velocity refresh</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>FBA inbound window alerts</li>
          <li><svg class="icon-sm"><use href="#i-check"/></svg>Container-level billing model</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
  <div class="container">

    <div class="feature-row">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-tag"/></svg> Freight RFQ Marketplace</div>
        <h2 class="feature-title">One auction pays for the platform.<br>For a year.</h2>
        <p class="feature-desc">Stop emailing five 3PLs and waiting three days for quotes. Post a shipment, your trusted shippers bid in real time, you compare side-by-side and award in one click.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>DDP quotes from your network in 24-48 hours</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Side-by-side comparison: price, transit days, scorecard rating</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Award and book in one click &mdash; contract auto-generated</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Your 3PLs join for free. They want this too.</li>
        </ul>
        <div class="feature-roi">Brands save an average of 14% on first auction</div>
      </div>
      <div class="feature-image">
        <img src="/screenshots-v8/fresh-rfq-modal.png" alt="Launch RFQ modal with AI freight intelligence and service combo picker" loading="lazy">
      </div>
    </div>

    <div class="feature-row reverse">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-map"/></svg> Live Map</div>
        <h2 class="feature-title">See every vessel, every container,<br>every last mile.</h2>
        <p class="feature-desc">Real-time AIS positions for every ocean shipment, carton-level scan events from 100+ carriers via Shippo (FedEx, UPS, USPS, DHL, regional last-mile), and warehouse drop-offs on one interactive globe. Filter by status, click any pin for live ETA. Updated every few minutes &mdash; no refresh.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>AIS vessel tracking with port ETAs</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>100+ carriers worldwide via Shippo &mdash; carton-level scan geolocation</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Status filters: in transit, at customs, last mile, delivered</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Click any pin for shipment detail without leaving the map</li>
        </ul>
      </div>
      <div class="feature-image">
        <img src="/screenshots-v8/fresh-map.png" alt="Live shipment map with globe view and vessel tracking" loading="lazy">
      </div>
    </div>

    <div class="feature-row">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-chart"/></svg> Supply chain metrics</div>
        <h2 class="feature-title">The numbers every ops lead asks for &mdash;<br>recomputed in real time.</h2>
        <p class="feature-desc">Cartons in motion. Average door-to-door days. Shipment status mix. Charges vs speed vs cost. The questions you usually ask your operations lead, answered automatically from the data already in your workspace.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Door-to-door timeline benchmarks</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Shipment status mix at a glance</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Charges vs speed vs cost analysis</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Configurable date ranges (7d, 30d, 90d, custom)</li>
        </ul>
      </div>
      <div class="feature-image">
        <img src="/screenshots-v8/metrics-marketing.png" alt="Supply chain metrics page in CartonFlow" loading="lazy">
      </div>
    </div>

    <div class="feature-row reverse">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-shield"/></svg> Shipper Scorecards</div>
        <h2 class="feature-title">Know which 3PL is crushing it.<br>And which one is costing you.</h2>
        <p class="feature-desc">On-time delivery, pickup reliability, response time, days early or late. Every shipper your brand uses gets scored automatically, every month, in the same units. No more arguing about who&rsquo;s actually the best partner.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Auto-computed from shipment data, no manual entry</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Industry-standard benchmarks built in</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>What&rsquo;s working / what to fix breakdown</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Financial impact: cost vs paid vs outstanding</li>
        </ul>
      </div>
      <div class="feature-image">
        <img src="/screenshots-v8/fresh-scorecard.png" alt="Shipper scorecard with performance metrics" loading="lazy">
      </div>
    </div>

    <div class="feature-row">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-network"/></svg> Shipper Marketplace</div>
        <h2 class="feature-title">Find new 3PLs the same way<br>other brands found them.</h2>
        <p class="feature-desc">Browse every shipper in the CartonFlow network. See their lane coverage, on-time rate, and the brand reviews they&rsquo;ve actually earned. Send a connection request, run an auction with them, and add them to your scorecard the same day.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Discover shippers by lane, mode, and certification</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Real reviews from other brands &mdash; no astroturf</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>One-click connection request, no email back-and-forth</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Already a shipper? Get listed, earn reviews, win new business</li>
        </ul>
      </div>
      <div class="feature-image">
        <img src="/screenshots-v8/fresh-marketplace.png" alt="Shipper Marketplace with AI-suggested shippers" loading="lazy">
      </div>
    </div>

  </div>
</section>

<section class="b2b">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">Brand-to-brand partnerships</div>
      <h2>Connect to another brand&rsquo;s workspace<br>without giving up control.</h2>
      <p class="section-sub">Wholesaler shares Amazon inventory and run rates with the brand. Brand shares inbound shipment ETAs back. Both sides keep their own workspace; both sides decide exactly what flows across. No CSV exports. No emails. No data leaks.</p>
    </div>

    <div class="b2b-visual">
      <div class="b2b-workspaces">
        <div class="b2b-ws">
          <div class="b2b-ws-label">Wholesaler workspace</div>
          <div class="b2b-ws-name">Acme Distribution</div>
          <div class="b2b-ws-data">Shares with brand:<br>&middot; Amazon stock counts<br>&middot; Sales velocity per ASIN<br>&middot; Last 90 days of orders</div>
        </div>
        <div class="b2b-arrow" style="text-align:center">
          <svg viewBox="0 0 60 24" width="60" height="24" style="display:block;margin:0 auto">
            <line x1="0" y1="9" x2="56" y2="9" stroke="var(--indigo-glow)" stroke-width="1.5"/>
            <polyline points="50,4 56,9 50,14" fill="none" stroke="var(--indigo-glow)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="60" y1="20" x2="4" y2="20" stroke="var(--indigo-glow)" stroke-width="1.5"/>
            <polyline points="10,15 4,20 10,25" fill="none" stroke="var(--indigo-glow)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div style="font-size:10px;color:var(--indigo-glow);font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-top:6px">Two-way grant</div>
        </div>
        <div class="b2b-ws">
          <div class="b2b-ws-label">Brand workspace</div>
          <div class="b2b-ws-name">Your Brand</div>
          <div class="b2b-ws-data">Shares with wholesaler:<br>&middot; Inbound shipment ETAs<br>&middot; Production milestones<br>&middot; Tracking events</div>
        </div>
      </div>
      <div style="margin-top:24px;padding:16px 20px;background:rgba(99,102,241,0.06);border:1px solid var(--border);border-radius:10px;font-size:13px;color:var(--text-muted);line-height:1.6">
        <strong style="color:var(--indigo-glow)">Multi-Workspace view:</strong> See merged data from your workspace and any partner workspaces in one screen. KPIs stay yours-only. Each row is labeled with its source.
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="feature-row">
      <div class="feature-text">
        <div class="feature-eyebrow"><svg class="icon-sm"><use href="#i-sparkle"/></svg> Cody &middot; built-in AI assistant</div>
        <h2 class="feature-title">Ask supply chain questions<br>in plain English.</h2>
        <p class="feature-desc">Cody lives in your workspace and knows your data &mdash; your suppliers, your POs, your stock levels, your shipper performance. Ask it anything you&rsquo;d normally pull up four tabs for.</p>
        <ul class="feature-bullets">
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Grounded in your tenant&rsquo;s data, audit-logged</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Read-only by default; safe in shared sessions</li>
          <li><svg class="icon-sm"><use href="#i-arrow-right"/></svg>Privacy Mode aware &mdash; never sees encrypted fields</li>
        </ul>
      </div>
      <div>
        <div class="cody-quote">Which suppliers are tracking late on PO milestones this month?</div>
        <div class="cody-answer">Two suppliers are behind: <strong>Supplier #042</strong> on PO-2401 (4 days late on QC), and <strong>Supplier #119</strong> on PO-2398 (2 days late on production start). Both have pending nudges sent. Want me to draft a follow-up?</div>
        <div class="cody-quote" style="margin-top:10px">How many days of coverage does my top SKU have right now?</div>
        <div class="cody-answer">Your top SKU by velocity has 6 days of coverage at the current 12.7 units/day run rate. There&rsquo;s an inbound shipment of 7,140 units landing in 5 days, which would push coverage to ~580 days.</div>
      </div>
    </div>
  </div>
</section>

<section id="demo" class="demo-section">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">See it for yourself</div>
      <h2>Three ways to evaluate CartonFlow.</h2>
      <p class="section-sub">Pick the one that matches how you buy software. They all take less than 15 minutes.</p>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <div class="demo-icon"><svg class="icon-lg"><use href="#i-play"/></svg></div>
        <div class="demo-title">Try the sandbox</div>
        <div class="demo-desc">Pre-seeded brand workspace. Click through the actual product with realistic data. No signup, no card.</div>
        <a href="https://demo.cartonflow.io/demo" class="demo-cta">Open sandbox <svg class="icon-sm"><use href="#i-arrow-right"/></svg></a>
      </div>
      <div class="demo-card recommended">
        <span class="demo-recommended-badge">Most popular</span>
        <div class="demo-icon"><svg class="icon-lg"><use href="#i-rocket"/></svg></div>
        <div class="demo-title">Start a free trial</div>
        <div class="demo-desc">14 days, full access, your real data. Connect Amazon, invite your 3PL, ship your first PO inside the trial.</div>
        <a href="https://app.cartonflow.io/signup" class="demo-cta">Start free trial <svg class="icon-sm"><use href="#i-arrow-right"/></svg></a>
      </div>
      <div class="demo-card">
        <div class="demo-icon"><svg class="icon-lg"><use href="#i-phone"/></svg></div>
        <div class="demo-title">Book a demo</div>
        <div class="demo-desc">30-minute walkthrough with the founder. For 7- and 8-figure brands and multi-brand operators who want a tailored look.</div>
        <span class="demo-cta disabled">Coming soon <span class="demo-soon">In build</span></span>
      </div>
    </div>
  </div>
</section>

<section id="pricing" style="background:var(--bg-elev);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">Pricing</div>
      <h2>One plan. Everything included.</h2>
      <p class="section-sub">No tiers to navigate. No &ldquo;talk to sales&rdquo; gates. Add more workspaces or container tracking credits when you need them.</p>
    </div>

    <div class="pricing-card">
      <div class="pricing-name">CartonFlow Pro</div>
      <div class="pricing-headline">
        <span class="pricing-price">$249</span>
        <span class="pricing-period">/ month per workspace</span>
      </div>
      <div class="pricing-sub">Everything you need to run a single brand&rsquo;s end-to-end supply chain.</div>

      <ul class="pricing-features">
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Unlimited shipments, suppliers, and POs</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Unlimited team seats with granular permissions</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Privacy Mode (zero-knowledge encryption)</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Live ocean container tracking + last-mile scans</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Freight RFQ marketplace + shipper scorecards</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Brand-to-brand workspace connections</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Amazon SP-API integration + 30-day velocity sync</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>Cody AI assistant, grounded in your data</li>
        <li><svg class="icon-sm"><use href="#i-check"/></svg>3PLs, forwarders, and distributors join free</li>
      </ul>

      <div class="pricing-divider"></div>

      <div style="font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px">Add-ons</div>
      <div class="pricing-addon">
        <div>
          <div class="pricing-addon-label">Additional workspace</div>
          <div class="pricing-addon-detail">For multi-brand operators</div>
        </div>
        <div class="pricing-addon-cost">+$99 / mo each</div>
      </div>
      <div class="pricing-addon">
        <div>
          <div class="pricing-addon-label">Container tracking credits</div>
          <div class="pricing-addon-detail">Per ocean container shipment &middot; non-refundable</div>
        </div>
        <div class="pricing-addon-cost">5 &middot; 25 &middot; 100 packs</div>
      </div>

      <div style="margin-top:28px;display:flex;gap:10px;flex-wrap:wrap">
        <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg" style="flex:1;justify-content:center;min-width:200px">Start 14-day free trial</a>
        <a href="#demo" class="btn btn-ghost btn-lg">Book a demo</a>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-header centered">
      <div class="section-eyebrow">FAQ</div>
      <h2>What people ask before they sign up.</h2>
    </div>

    <div class="faq-grid">
      <div class="faq-item">
        <div class="faq-q">What makes CartonFlow different from SoStocked, Inventory Lab, or Cin7?</div>
        <div class="faq-a">Those are point tools &mdash; forecasting OR Amazon inventory OR multi-channel ops. CartonFlow is the operating system underneath all of them: purchase orders, suppliers, freight, FBA inventory, and shipper scorecards in one workspace. And it&rsquo;s the only platform in the space with zero-knowledge encryption &mdash; your supplier list and unit costs aren&rsquo;t in our database in plain text.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">What does Privacy Mode actually do?</div>
        <div class="faq-a">Your supplier names, contact info, unit costs, and PO financials are encrypted in your browser before they reach our servers. We hold the ciphertext; you hold the keys. Even our staff can&rsquo;t decrypt your data. If we got subpoenaed tomorrow, we couldn&rsquo;t hand over a supplier list because we don&rsquo;t have one in readable form. See the full breakdown on our <a href="/security" style="color:var(--indigo-glow);border-bottom:1px dashed var(--indigo-glow)">Trust Center</a>.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Who built CartonFlow?</div>
        <div class="faq-a">CartonFlow was designed by an operator with supply chain experience inside Procter &amp; Gamble, Honeywell, and Amazon. The product borrows the patterns that work at enterprise scale &mdash; supplier privacy, end-to-end visibility, exception-based management &mdash; and packages them for Amazon brands at a price that doesn&rsquo;t require a procurement department.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Do my 3PLs and distributors need to pay too?</div>
        <div class="faq-a">No. Your shipping partners and distributors join CartonFlow for free with their own login. They get a portal to update shipments, bid on freight, submit invoices, and message your team &mdash; at no cost to them. The network effect is the point.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">How fast can I get up and running?</div>
        <div class="faq-a">First shipment in the same session for most users. The onboarding wizard walks you through connecting Amazon (SP-API), importing your warehouses, and adding your suppliers. If you have a CSV, that&rsquo;s your import; if not, the wizard handles it manually.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">What if I run multiple brands?</div>
        <div class="faq-a">Add additional workspaces at $99/month each. Each brand gets its own isolated workspace with its own permissions, suppliers, and integrations. Switch between them from the org switcher &mdash; and with Multi-Workspace view, layer their data together when you need a portfolio view.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Can I cancel anytime?</div>
        <div class="faq-a">Yes. No contracts, no cancellation fees. Container tracking credits are non-refundable once purchased &mdash; but everything else cancels cleanly from your account settings. <a href="/cancellation" style="color:var(--indigo-glow);border-bottom:1px dashed var(--indigo-glow)">See cancellation policy</a>.</div>
      </div>
    </div>
  </div>
</section>

<section style="text-align:center;padding:100px 0;background:linear-gradient(135deg,rgba(79,70,229,0.08),rgba(139,92,246,0.04));border-top:1px solid var(--border)">
  <div class="container">
    <h2 style="margin-bottom:18px">Stop running your supply chain on five tools.</h2>
    <p class="section-sub" style="margin:0 auto 32px">Try CartonFlow free for 14 days. Connect Amazon, ship a PO, run an auction, see what changes.</p>
    <a href="https://app.cartonflow.io/signup" class="btn btn-primary btn-lg" style="margin-right:10px">Start your free trial</a>
    <a href="#demo" class="btn btn-ghost btn-lg">Book a demo first</a>
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
        <a href="#pricing">Pricing</a>
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
