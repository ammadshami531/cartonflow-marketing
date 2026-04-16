export default function Home() {
  const html = `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#04050f;color:#eef2ff;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.g{background:linear-gradient(135deg,#c4b5fd,#818cf8,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

nav{position:fixed;top:0;left:0;right:0;z-index:200;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;transition:background .3s}
nav.scrolled{background:rgba(4,5,15,0.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.05)}
.nav-r{display:flex;align-items:center;gap:12px}
.login{color:rgba(255,255,255,0.45);text-decoration:none;font-size:13px;font-weight:600;transition:color .2s}.login:hover{color:#fff}
.btn-nav{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;transition:all .2s;box-shadow:0 4px 15px rgba(79,70,229,0.4)}.btn-nav:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(79,70,229,0.5)}

.hero{min-height:100vh;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 40px}
.hero-bg{position:absolute;inset:0;background:#04050f;overflow:hidden}
.hero-bg::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse 60% 40% at 30% 40%,rgba(79,70,229,0.15) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 70% 60%,rgba(139,92,246,0.10) 0%,transparent 60%);animation:bgShift 12s ease-in-out infinite alternate}
@keyframes bgShift{0%{transform:translate(0,0)}100%{transform:translate(-3%,2%)}}
.hero-bg::after{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px);background-size:80px 80px}
.hero-inner{position:relative;z-index:1;max-width:900px}
.hero-badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(129,140,248,0.25);background:rgba(79,70,229,0.1);backdrop-filter:blur(8px);padding:6px 16px;border-radius:100px;font-size:12px;color:#a5b4fc;font-weight:600;margin-bottom:36px;letter-spacing:0.3px}
.badge-dot{width:6px;height:6px;border-radius:50%;background:#818cf8;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
h1{font-size:clamp(52px,8vw,96px);font-weight:900;line-height:1.0;letter-spacing:-3px;margin-bottom:28px;color:#eef2ff}
.hero-sub{font-size:18px;color:rgba(238,242,255,0.5);max-width:540px;margin:0 auto 44px;line-height:1.75}
.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:16px}
.btn-xl{padding:15px 36px;font-size:15px;font-weight:700;border-radius:10px;text-decoration:none;display:inline-block;transition:all .2s}
.btn-fill{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;box-shadow:0 6px 25px rgba(79,70,229,0.45)}.btn-fill:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(79,70,229,0.6)}
.btn-ghost{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);color:#eef2ff;backdrop-filter:blur(8px)}.btn-ghost:hover{background:rgba(255,255,255,0.08)}
.hero-note{font-size:12px;color:rgba(255,255,255,0.25)}
.scroll-ind{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:rgba(255,255,255,0.2);font-size:11px;letter-spacing:2px;text-transform:uppercase;animation:bounce 2s ease-in-out infinite}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(6px)}}

.fp{position:relative;min-height:100vh;overflow:hidden;display:flex;align-items:center}
.fp-bg{position:absolute;inset:0;z-index:0}
.fp-bg img{width:100%;height:100%;object-fit:cover;object-position:top left;display:block}
.fp-overlay{position:absolute;inset:0;z-index:1}
.fp-overlay.left{background:linear-gradient(90deg,rgba(4,5,15,0.97) 0%,rgba(4,5,15,0.88) 35%,rgba(4,5,15,0.5) 60%,rgba(4,5,15,0.1) 100%)}
.fp-overlay.right{background:linear-gradient(270deg,rgba(4,5,15,0.97) 0%,rgba(4,5,15,0.88) 35%,rgba(4,5,15,0.5) 60%,rgba(4,5,15,0.1) 100%)}
.fp-glow{position:absolute;z-index:1;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(79,70,229,0.14) 0%,transparent 65%);pointer-events:none;top:50%;transform:translateY(-50%)}
.fp-glow.left{left:-80px}.fp-glow.right{left:auto;right:-80px}
.fp-content{position:relative;z-index:2;max-width:clamp(480px,35vw,600px);padding:80px 60px}
.fp-content.ra{margin-left:auto;text-align:right}
.fp-num{font-size:100px;font-weight:900;line-height:1;letter-spacing:-5px;color:rgba(255,255,255,0.03);position:absolute;top:-10px;left:40px;pointer-events:none}
.fp-num.rn{left:auto;right:40px}
.fp-tag{display:inline-flex;align-items:center;gap:6px;font-size:clamp(10px,0.8vw,13px);font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#a5b4fc;margin-bottom:18px}
.fp-tag::before{content:'';width:20px;height:2px;background:#6366f1;flex-shrink:0}
.fp-content.ra .fp-tag{flex-direction:row-reverse}
.fp-content.ra .fp-tag::before{content:''}
.fp-content.ra .fp-tag::after{content:'';width:20px;height:2px;background:#6366f1;flex-shrink:0}
h2{font-size:clamp(30px,4vw,52px);font-weight:800;letter-spacing:-1.5px;line-height:1.1;margin-bottom:16px;color:#eef2ff}
.fp-content p{font-size:clamp(15px,1.15vw,19px);color:rgba(238,242,255,0.5);line-height:1.8;margin-bottom:24px}
.fp-list{list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:28px}
.fp-list li{display:flex;gap:10px;font-size:clamp(13px,1vw,17px);color:rgba(238,242,255,0.65);align-items:center}
.fp-list li::before{content:'';width:6px;height:6px;border-radius:50%;background:#818cf8;flex-shrink:0}
.fp-content.ra .fp-list li{flex-direction:row-reverse}
.fp-btn{display:inline-block;background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;padding:12px 26px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;box-shadow:0 4px 15px rgba(79,70,229,0.35)}.fp-btn:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(79,70,229,0.5)}

.stats{background:#04050f;padding:60px;border-top:1px solid rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.04)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;max-width:1100px;margin:0 auto;text-align:center}
.stat-n{font-size:52px;font-weight:900;letter-spacing:-2px;margin-bottom:6px}
.stat-l{font-size:clamp(13px,1vw,16px);color:rgba(238,242,255,0.35);line-height:1.5}

.hiw{background:#04050f;padding:100px 60px;border-top:1px solid rgba(255,255,255,0.04)}
.hiw-hd{max-width:1100px;margin:0 auto 64px}
.hiw-hd h2{font-size:clamp(28px,4vw,52px);font-weight:900;letter-spacing:-2px;margin-bottom:10px}
.hiw-hd p{color:rgba(238,242,255,0.35);font-size:16px;max-width:560px}

.pain-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1100px;margin:0 auto 72px}
.pain-card{border-radius:16px;padding:32px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);position:relative;overflow:hidden}
.pain-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#4F46E5,#6366f1)}
.pain-icon{font-size:28px;margin-bottom:16px}
.pain-stat{font-size:42px;font-weight:900;letter-spacing:-2px;margin-bottom:8px}
.pain-label{font-size:clamp(14px,1.1vw,17px);font-weight:700;color:#eef2ff;margin-bottom:10px}
.pain-desc{font-size:clamp(13px,1vw,16px);color:rgba(238,242,255,0.45);line-height:1.65}
.pain-solve{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:12px;font-weight:700;color:#a5b4fc;letter-spacing:0.3px}
.pain-solve::before{content:'→';color:#6366f1}

.ba-wrap{max-width:1100px;margin:0 auto}
.ba-title{font-size:clamp(20px,2.5vw,28px);font-weight:800;letter-spacing:-0.5px;margin-bottom:36px;color:rgba(238,242,255,0.6);text-align:center}
.ba-panels{display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:center}
.ba-panel-label{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:16px}
.ba-panel-label.bl{color:rgba(239,68,68,0.6)}
.ba-panel-label.gl{color:#818cf8}
.ba-divider{display:flex;flex-direction:column;align-items:center;gap:10px;padding:0 24px}
.ba-vs{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#4F46E5,#6366f1);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff;box-shadow:0 4px 16px rgba(79,70,229,0.5);flex-shrink:0}
.ba-line{width:1px;height:80px;background:linear-gradient(to bottom,transparent,rgba(79,70,229,0.3),transparent)}

.collage{position:relative;height:480px}
.collage-win{position:absolute;border-radius:12px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.6);font-size:11px}

.cw-wa{background:#111b21;width:240px;top:0;left:0;transform:rotate(-4deg);z-index:1}
.cw-wa-bar{background:#1f2c34;padding:9px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,0.05)}
.cw-avatar{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0}
.cw-name{font-size:12px;font-weight:600;color:#e9edef;line-height:1.2}
.cw-status{font-size:9px;color:#8696a0}
.cw-body{padding:10px;display:flex;flex-direction:column;gap:7px;background:#0b141a;min-height:160px}
.wm{max-width:85%;padding:6px 9px;border-radius:7px;font-size:10px;line-height:1.45;color:#e9edef}
.wm.r{background:#202c33;align-self:flex-start;border-top-left-radius:2px}
.wm.s{background:#005c4b;align-self:flex-end;border-top-right-radius:2px}
.wm-t{font-size:8px;color:rgba(255,255,255,0.28);text-align:right;margin-top:2px}
.wa-unread{background:#25d366;color:#111;border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-left:auto}

.cw-wc{background:#1a1a1a;width:230px;top:30px;left:180px;transform:rotate(3deg);z-index:2}
.cw-wc-bar{background:#252525;padding:9px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,0.06)}
.cw-wc-body{padding:10px;display:flex;flex-direction:column;gap:7px;min-height:140px}
.wcm{max-width:85%;padding:6px 9px;border-radius:7px;font-size:10px;line-height:1.4;color:#e5e5e5}
.wcm.r{background:#333;align-self:flex-start}
.wcm.s{background:#07c160;align-self:flex-end;color:#fff}

.cw-em{background:#1c1c1e;width:260px;bottom:0;left:60px;transform:rotate(-2deg);z-index:3}
.cw-em-bar{background:#2c2c2e;padding:9px 12px;border-bottom:1px solid rgba(255,255,255,0.06)}
.cw-em-subj{font-size:11px;font-weight:700;color:#e5e5e5;margin-bottom:2px}
.cw-em-from{font-size:9px;color:rgba(255,255,255,0.3)}
.cw-em-body{padding:12px;color:rgba(255,255,255,0.42);font-size:10px;line-height:1.65;min-height:100px}
.cw-em-body strong{color:rgba(255,255,255,0.7)}

.collage-noise{position:absolute;inset:0;background:radial-gradient(ellipse 80% 80% at 50% 50%,rgba(239,68,68,0.04) 0%,transparent 70%);pointer-events:none;z-index:10}

.cf-panel{background:#0e1020;border-radius:16px;border:1px solid rgba(79,70,229,0.3);overflow:hidden;box-shadow:0 24px 80px rgba(79,70,229,0.15)}
.cf-panel-bar{background:#090c1a;padding:11px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(79,70,229,0.15)}
.cf-logo-sm{width:28px;height:28px;border-radius:7px;background:linear-gradient(135deg,#4F46E5,#6366f1);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff;flex-shrink:0}
.cf-panel-title{font-size:12px;font-weight:700;color:#eef2ff;flex:1}
.cf-status-chip{font-size:9px;font-weight:700;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.3);color:#4ade80;border-radius:4px;padding:3px 8px}
.cf-panel-body{padding:14px;display:flex;flex-direction:column;gap:9px}
.cf-milestone-bar{background:rgba(34,197,94,0.07);border:1px solid rgba(34,197,94,0.18);border-radius:8px;padding:8px 12px;font-size:10px;color:#4ade80;display:flex;align-items:center;gap:8px}
.cf-msg-row{display:flex;flex-direction:column;gap:4px}
.cf-sender-tag{font-size:9px;font-weight:700;color:#a5b4fc;background:rgba(79,70,229,0.15);border-radius:3px;padding:1px 6px;display:inline-block;align-self:flex-start}
.cf-sender-tag.you{align-self:flex-end;background:rgba(79,70,229,0.2);color:#818cf8}
.cf-bubble{border-radius:9px;padding:8px 11px;font-size:10px;line-height:1.5}
.cf-bubble.recv{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.07);color:rgba(238,242,255,0.7);align-self:flex-start;max-width:88%}
.cf-bubble.sent{background:rgba(79,70,229,0.18);border:1px solid rgba(79,70,229,0.28);color:#eef2ff;align-self:flex-end;max-width:88%}
.cf-invoice-card{background:rgba(79,70,229,0.07);border:1px solid rgba(79,70,229,0.18);border-radius:10px;padding:11px 13px}
.cf-inv-title{font-size:10px;font-weight:700;color:#a5b4fc;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center}
.cf-inv-line{display:flex;justify-content:space-between;font-size:9px;color:rgba(238,242,255,0.38);padding:2px 0}
.cf-inv-total{display:flex;justify-content:space-between;font-size:10px;font-weight:700;color:rgba(238,242,255,0.7);border-top:1px solid rgba(255,255,255,0.07);margin-top:5px;padding-top:5px}
.cf-paid-btn{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;font-size:9px;font-weight:700;border-radius:4px;padding:3px 10px;display:inline-block}

.ba-points{margin-top:14px;display:flex;flex-direction:column;gap:6px}
.ba-point{font-size:12px;color:rgba(238,242,255,0.42);display:flex;align-items:flex-start;gap:8px;line-height:1.45}
.ba-point.bad-pt .pt-dot{color:rgba(239,68,68,0.55);flex-shrink:0;font-weight:700}
.ba-point.good-pt .pt-dot{color:#818cf8;flex-shrink:0;font-weight:700}

.pricing{background:#04050f;padding:100px 60px;border-top:1px solid rgba(255,255,255,0.04)}
.p-hd{text-align:center;margin-bottom:56px}
.p-eye{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#818cf8;margin-bottom:14px}
.p-hd h2{font-size:clamp(32px,4vw,54px);font-weight:900;letter-spacing:-2px;margin-bottom:8px}
.p-hd p{color:rgba(238,242,255,0.35);font-size:16px}
.toggle-row{display:flex;justify-content:center;margin-bottom:48px}
.t-bg{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:4px;display:flex;gap:4px}
.t-b{padding:8px 22px;border-radius:7px;border:none;cursor:pointer;font-size:13px;font-weight:700;background:transparent;color:rgba(238,242,255,0.4);font-family:'Inter',sans-serif;transition:all .15s}
.t-b.on{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;box-shadow:0 2px 10px rgba(79,70,229,0.4)}
.plans{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:900px;margin:0 auto}
.plan{border-radius:20px;padding:44px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07)}
.plan.pro{border-color:rgba(79,70,229,0.45);background:rgba(79,70,229,0.05);position:relative}
.pro-label{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;font-size:11px;font-weight:700;padding:4px 16px;border-radius:100px;white-space:nowrap;box-shadow:0 4px 12px rgba(79,70,229,0.4)}
.plan-name{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(238,242,255,0.4);margin-bottom:14px}
.plan-price{font-size:68px;font-weight:900;letter-spacing:-4px;line-height:1;color:#eef2ff;margin-bottom:4px}
.plan-price sup{font-size:28px;letter-spacing:0;vertical-align:top;margin-top:14px;font-weight:700}
.plan-price .mo{font-size:18px;color:rgba(238,242,255,0.35);font-weight:500;letter-spacing:0}
.plan-billed{font-size:12px;color:rgba(238,242,255,0.3);margin:8px 0 28px}
.plan-btn{display:block;text-align:center;padding:14px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;margin-bottom:32px;transition:all .2s}
.btn-basic{border:1px solid rgba(255,255,255,0.1);color:#eef2ff}.btn-basic:hover{border-color:rgba(79,70,229,0.4);background:rgba(79,70,229,0.06)}
.btn-pro{background:linear-gradient(135deg,#4F46E5,#6366f1);color:#fff;box-shadow:0 4px 15px rgba(79,70,229,0.4)}.btn-pro:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(79,70,229,0.55)}
.plan-section{margin-bottom:20px}
.plan-section-title{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(238,242,255,0.25);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.06)}
.feat-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.feat-list li{display:flex;gap:9px;font-size:13px;align-items:flex-start;line-height:1.4}
.feat-list li.inc{color:rgba(238,242,255,0.75)}
.feat-list li.lock{color:rgba(238,242,255,0.2)}
.chk{color:#22c55e;flex-shrink:0;font-size:12px;margin-top:1px}
.lock-ic{color:rgba(255,255,255,0.15);flex-shrink:0;margin-top:1px}
.plan.pro .chk{color:#a5b4fc}
.p-footer{text-align:center;color:rgba(238,242,255,0.2);font-size:12px;margin-top:24px}

.cta-section{background:#04050f;min-height:50vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 40px;position:relative;overflow:hidden;border-top:1px solid rgba(255,255,255,0.04)}
.cta-bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 55% at 50% 50%,rgba(79,70,229,0.11) 0%,transparent 65%);pointer-events:none}
.cta-inner{position:relative;z-index:1;max-width:780px}
.cta-inner h2{font-size:clamp(30px,5vw,64px);font-weight:900;letter-spacing:-2.5px;line-height:1.0;margin-bottom:20px}
.cta-inner p{color:rgba(238,242,255,0.35);font-size:16px;margin-bottom:40px}

footer{border-top:1px solid rgba(255,255,255,0.05);padding:60px 60px 40px;background:#04050f}
.footer-top{display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-bottom:48px;align-items:start}
.founder-note{max-width:480px}
.founder-note h4{font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#818cf8;margin-bottom:14px}
.founder-note p{font-size:14px;color:rgba(238,242,255,0.4);line-height:1.8}
.founder-note p strong{color:rgba(238,242,255,0.65)}
.footer-nav{display:flex;flex-direction:column;align-items:flex-end;gap:8px}
.footer-nav a{font-size:13px;color:rgba(238,242,255,0.25);text-decoration:none;transition:color .2s}.footer-nav a:hover{color:rgba(238,242,255,0.7)}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.05)}
footer .copy{font-size:13px;color:rgba(238,242,255,0.22)}
.footer-deep-link{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:#818cf8;text-decoration:none;font-weight:600;border:1px solid rgba(79,70,229,0.3);padding:8px 16px;border-radius:8px;transition:all .2s}.footer-deep-link:hover{background:rgba(79,70,229,0.1);border-color:rgba(79,70,229,0.5)}

.faq-section{background:#04050f;padding:60px;border-top:1px solid rgba(255,255,255,0.04)}
.faq-inner{max-width:720px;margin:0 auto}
.faq-inner h2{font-size:clamp(24px,3vw,40px);font-weight:900;letter-spacing:-1.5px;margin-bottom:40px}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.07)}
.faq-q{width:100%;background:none;border:none;cursor:pointer;padding:16px 0;display:flex;justify-content:space-between;align-items:center;gap:16px;text-align:left;font-family:'Inter',sans-serif}
.faq-q span{font-size:14px;font-weight:600;color:#eef2ff}
.faq-icon{color:#818cf8;font-size:16px;transition:transform .2s;flex-shrink:0}
.faq-icon.open{transform:rotate(180deg)}
.faq-body{font-size:13px;color:rgba(238,242,255,0.45);line-height:1.8;padding-bottom:16px;display:none}
.faq-body.open{display:block}

.fade-up{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.fade-up.vis{opacity:1;transform:translateY(0)}
@media(max-width:900px){
  nav{padding:0 20px}
  .nav-r .login{display:none}
  .hero{padding:100px 20px 60px}
  h1{letter-spacing:-1.5px}
  .fp{min-height:auto}
  .fp-content{padding:40px 24px;max-width:100%}
  .fp-content.ra{margin-left:0;text-align:left}
  .fp-content.ra .fp-tag{flex-direction:row}
  .fp-content.ra .fp-tag::before{content:'';display:block}
  .fp-content.ra .fp-tag::after{display:none}
  .fp-content.ra .fp-list li{flex-direction:row}
  .fp-num{display:none}
  .fp-overlay.left{background:linear-gradient(180deg,rgba(4,5,15,0.97) 0%,rgba(4,5,15,0.85) 50%,rgba(4,5,15,0.97) 100%)}
  .fp-overlay.right{background:linear-gradient(180deg,rgba(4,5,15,0.97) 0%,rgba(4,5,15,0.85) 50%,rgba(4,5,15,0.97) 100%)}
  .stats{padding:40px 20px}
  .stats-grid{grid-template-columns:1fr 1fr;gap:20px}
  .hiw{padding:60px 20px}
  .pain-stats{grid-template-columns:1fr}
  .ba-wrap{padding:0 4px}
  .ba-panels{grid-template-columns:1fr;gap:20px}
  .ba-divider{flex-direction:row;padding:16px 0}
  .ba-line{width:80px;height:1px;background:linear-gradient(to right,transparent,rgba(79,70,229,0.3),transparent)}
  .collage{height:320px}
  .cf-panel{width:100% !important;position:relative !important;top:auto !important;left:auto !important;right:auto !important;transform:none !important;max-width:100% !important}
  .pricing{padding:60px 20px}
  .plans{grid-template-columns:1fr}
  .plan{padding:32px 24px}
  .faq-section{padding:60px 20px}
  .cta-section{padding:60px 20px}
  footer{padding:40px 20px}
  .footer-top{grid-template-columns:1fr}
  .footer-nav{align-items:flex-start}
}
@media(max-width:480px){
  nav{height:56px;padding:0 16px}
  .btn-nav{padding:8px 14px;font-size:12px}
  .hero{padding:88px 16px 48px}
  h1{font-size:clamp(36px,10vw,56px);letter-spacing:-1px;line-height:1.05}
  .hero-sub{font-size:15px;margin-bottom:28px}
  .hero-ctas{flex-direction:column;align-items:stretch;gap:10px;max-width:280px;margin:0 auto 16px}
  .btn-xl{padding:14px 24px;font-size:14px;text-align:center}
  .hero-badge{font-size:11px;padding:5px 12px;text-align:center}
  .stats{padding:32px 16px}
  .stats-grid{grid-template-columns:1fr 1fr;gap:12px}
  .stat-n{font-size:36px;letter-spacing:-1px}
  .stat-l{font-size:12px}
  .fp{min-height:auto}
  .fp-content{padding:32px 16px}
  .fp-btn{width:100%;text-align:center;display:block}
  .fp-list li{font-size:12px}
  h2{font-size:clamp(24px,7vw,36px);letter-spacing:-1px}
  .hiw{padding:40px 16px}
  .hiw-hd{margin-bottom:36px}
  .pain-stats{grid-template-columns:1fr;gap:14px}
  .pain-card{padding:22px}
  .pain-stat{font-size:32px}
  .ba-title{font-size:18px;margin-bottom:20px}
  .ba-panels{gap:16px}
  .ba-panel{padding:16px}
  .collage{height:260px;overflow:hidden}
  .collage-win{width:200px !important}
  .cw-wa{width:180px !important}
  .cw-wc{width:175px !important;left:130px !important}
  .cw-em{width:195px !important}
  .pricing{padding:40px 16px}
  .p-hd{margin-bottom:32px}
  .p-hd h2{font-size:clamp(26px,7vw,40px)}
  .plan{padding:24px 20px;border-radius:16px}
  .plan-price{font-size:52px;letter-spacing:-3px}
  .plan-price sup{font-size:22px;margin-top:10px}
  .plan-section-title{font-size:9px;letter-spacing:1.5px}
  .feat-list li{font-size:12px;gap:7px}
  .faq-section{padding:40px 16px}
  .faq-q span{font-size:13px}
  .faq-body{font-size:12px}
  .cta-section{padding:40px 16px}
  .cta-inner h2{font-size:clamp(26px,8vw,48px);letter-spacing:-1.5px}
  .cta-inner p{font-size:14px;margin-bottom:28px}
  footer{padding:32px 16px 24px}
  .footer-bottom{flex-direction:column;align-items:flex-start;gap:12px}
  .p-footer{font-size:11px;padding:0 4px}
  .toggle-row{padding:0 8px}
  .t-b{padding:8px 16px;font-size:12px}
}
</style>

<nav id="nav">
  <svg width="140" height="30" viewBox="0 0 300 64" fill="none">
    <rect x="1" y="1" width="62" height="62" rx="14" fill="#0A0F1E"/>
    <rect x="1" y="1" width="62" height="62" rx="14" stroke="#4F46E5" stroke-width="2"/>
    <text x="7" y="47" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#4F46E5">C</text>
    <text x="32" y="47" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#FFF">F</text>
    <text x="80" y="42" font-family="Arial Black,sans-serif" font-weight="900" font-size="28" letter-spacing="-0.5"><tspan fill="#FFF">Carton</tspan><tspan fill="#4F46E5">Flow</tspan></text>
  </svg>
  <div class="nav-r">
    <a href="/features" class="login">Features</a>
    <a href="https://app.cartonflow.io/login" class="login">Log in</a>
    <a href="https://app.cartonflow.io/signup" class="btn-nav">Start free trial</a>
  </div>
</nav>

<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-inner">
    <div class="hero-badge"><div class="badge-dot"></div> 14-day free trial · No charge before day 14</div>
    <h1>Your freight.<br><span class="g">Fully under control.</span></h1>
    <p class="hero-sub">The logistics platform that connects Amazon sellers and e-commerce brands with their 3PLs, forwarders, and distributors — in one place, in real time.</p>
    <div class="hero-ctas">
      <a href="https://app.cartonflow.io/signup" class="btn-xl btn-fill">Start free trial →</a>
      <a href="/features" class="btn-xl btn-ghost">See all features</a>
    </div>
    <p class="hero-note">From $129/mo · Your 3PLs always join free · Cancel anytime</p>
  </div>
  <div class="scroll-ind"><span>Scroll</span><span>↓</span></div>
</div>

<div id="features">
  <div class="fp">
    <div class="fp-bg"><img src="/screenshots/admin-dashboard.jpg" alt="CartonFlow Dashboard"></div>
    <div class="fp-overlay left"></div>
    <div class="fp-glow left"></div>
    <div class="fp-content fade-up">
      <div class="fp-num">01</div>
      <div class="fp-tag">All Plans</div>
      <h2>Full shipment<br><span class="g">visibility.</span></h2>
      <p>Every shipment, every carton, every scan — tracked in real time across all your 3PLs, forwarders, and destinations.</p>
      <ul class="fp-list">
        <li>Shipment status + FedEx/UPS carton tracking</li>
        <li>Multi-destination routing (FBA + custom warehouses)</li>
        <li>Real-time ETAs — update Amazon delivery windows before it's too late</li>
        <li>Shared inbox with your 3PLs, threaded per shipment</li>
      </ul>
      <a href="https://app.cartonflow.io/signup" class="fp-btn">Start tracking free →</a>
    </div>
  </div>

  <div class="fp">
    <div class="fp-bg"><img src="/screenshots/live-map.jpg" alt="Live Ocean Map"></div>
    <div class="fp-overlay right"></div>
    <div class="fp-glow right"></div>
    <div class="fp-content ra fade-up">
      <div class="fp-num rn">02</div>
      <div class="fp-tag">Pro</div>
      <h2>Live ocean<br><span class="g">tracking.</span></h2>
      <p>Real-time AIS vessel positions on an interactive world map. Port ETAs, transit progress — before your 3PL sends a WhatsApp or WeChat message.</p>
      <ul class="fp-list">
        <li>AIS satellite vessel positions</li>
        <li>Port ETA predictions + transit progress</li>
        <li>Delay alerts with enough time to update FBA delivery windows</li>
        <li>Filter by status: In Transit, Last Mile, Customs, Delayed</li>
      </ul>
      <a href="https://app.cartonflow.io/signup" class="fp-btn">Try Pro free →</a>
    </div>
  </div>

  <div class="fp">
    <div class="fp-bg"><img src="/screenshots/3pl-rfq-auction.jpg" alt="RFQ Bidding"></div>
    <div class="fp-overlay left"></div>
    <div class="fp-glow left"></div>
    <div class="fp-content fade-up">
      <div class="fp-num">03</div>
      <div class="fp-tag">Pro</div>
      <h2>Competitive<br><span class="g">RFQ bidding.</span></h2>
      <p>As Amazon and e-commerce fees keep rising, freight is one of the few costs you can actually control. Put your 3PLs in competition and take back margin.</p>
      <ul class="fp-list">
        <li>Post RFQs to your trusted 3PLs in seconds</li>
        <li>Structured bids per service combo — no phone tag</li>
        <li>Side-by-side comparison + one-click award</li>
        <li>8–15% freight reduction per cycle on average</li>
      </ul>
      <a href="https://app.cartonflow.io/signup" class="fp-btn">Start saving →</a>
    </div>
  </div>

  <div class="fp">
    <div class="fp-bg"><img src="/screenshots/admin-invoices.jpg" alt="Invoice Portal"></div>
    <div class="fp-overlay right"></div>
    <div class="fp-glow right"></div>
    <div class="fp-content ra fade-up">
      <div class="fp-num rn">04</div>
      <div class="fp-tag">All Plans</div>
      <h2>Invoice portal.<br><span class="g">No email chaos.</span></h2>
      <p>3PLs submit invoices directly in the platform — line items, totals, everything. You review and mark paid. One place, always organized.</p>
      <ul class="fp-list">
        <li>Line-item detail on every invoice</li>
        <li>Mark paid — 3PL sees status instantly</li>
        <li>Full billing history searchable by shipment or date</li>
        <li>3PL self-serve invoice upload</li>
      </ul>
      <a href="https://app.cartonflow.io/signup" class="fp-btn">See invoice portal →</a>
    </div>
  </div>
</div>

<div class="stats fade-up">
  <div class="stats-grid">
    <div><div class="stat-n"><span class="g">8hrs+</span></div><div class="stat-l">per week lost chasing<br>updates over WhatsApp</div></div>
    <div><div class="stat-n"><span class="g">1 week</span></div><div class="stat-l">FBA delivery windows —<br>miss it, face penalties</div></div>
    <div><div class="stat-n"><span class="g">8–15%</span></div><div class="stat-l">freight reduction<br>via competitive RFQ</div></div>
    <div><div class="stat-n"><span class="g">0</span></div><div class="stat-l">contracts required,<br>ever</div></div>
  </div>
</div>

<div class="hiw fade-up" id="why">
  <div class="hiw-hd">
    <h2>How it <span class="g">works.</span></h2>
    <p>Most brands manage 6-figure freight operations over WhatsApp, WeChat, and spreadsheets. CartonFlow fixes that — one dashboard for everything, in real time.</p>
  </div>

  <div class="pain-stats">
    <div class="pain-card">
      <div class="pain-icon">📱</div>
      <div class="pain-stat"><span class="g">8hrs+</span></div>
      <div class="pain-label">Lost every week chasing updates</div>
      <div class="pain-desc">The average Amazon seller or e-commerce brand spends 8+ hours per week bouncing between WhatsApp, WeChat, and email threads just to find out where their shipments are.</div>
      <div class="pain-solve">CartonFlow gives you one dashboard for every shipment, in real time</div>
    </div>
    <div class="pain-card">
      <div class="pain-icon">⏰</div>
      <div class="pain-stat"><span class="g">24hrs</span></div>
      <div class="pain-label">The window you can't miss</div>
      <div class="pain-desc">Amazon FBA delivery windows are 1 week. You can only change them up to 24 hours before the window opens. If your 3PL tells you the shipment is late after that — you're penalized. Enough penalties and Amazon restricts your ability to inbound at all.</div>
      <div class="pain-solve">Live ETAs let you update delivery windows before the deadline closes</div>
    </div>
    <div class="pain-card">
      <div class="pain-icon">📉</div>
      <div class="pain-stat"><span class="g">15%</span></div>
      <div class="pain-label">Freight margin left on the table</div>
      <div class="pain-desc">Amazon fees are rising. E-commerce margins are tighter. Most brands accept the first freight quote they get. With CartonFlow's RFQ system, your 3PLs compete — and you keep 8–15% that was silently disappearing.</div>
      <div class="pain-solve">One RFQ cycle typically pays for a full year's subscription</div>
    </div>
  </div>

  <div class="ba-wrap">
    <div class="ba-title">Before CartonFlow — After CartonFlow</div>
    <div class="ba-panels">
      <div>
        <div class="ba-panel-label bl">Without CartonFlow</div>
        <div class="collage">
          <div class="collage-noise"></div>
          <div class="collage-win cw-wa">
            <div class="cw-wa-bar">
              <div class="cw-avatar" style="background:#1a472a">🚢</div>
              <div>
                <div class="cw-name">Jason — Pacific Freight</div>
                <div class="cw-status">WhatsApp · online</div>
              </div>
              <div class="wa-unread">3</div>
            </div>
            <div class="cw-body">
              <div class="wm s">Any update on the Shanghai container? It was supposed to sail Monday<div class="wm-t">9:12 AM ✓✓</div></div>
              <div class="wm r">Still at port. Customs hold. Maybe 3–5 more days<div class="wm-t">11:47 AM</div></div>
              <div class="wm s">We have an FBA window Thursday — this is a problem<div class="wm-t">11:49 AM ✓</div></div>
              <div class="wm r">I'll check and get back to you tomorrow<div class="wm-t">11:51 AM</div></div>
            </div>
          </div>
          <div class="collage-win cw-wc">
            <div class="cw-wc-bar">
              <div class="cw-avatar" style="background:#07c160;border-radius:8px">💚</div>
              <div>
                <div class="cw-name" style="color:#e5e5e5">Shenzhen 3PL Group</div>
                <div class="cw-status" style="color:#888">WeChat · 6 members</div>
              </div>
            </div>
            <div class="cw-wc-body">
              <div class="wcm r">货物已装箱，等待提单确认 📦</div>
              <div class="wcm r">ETA very difficult to confirm right now</div>
              <div class="wcm s">Do you have a vessel name or sailing date?</div>
              <div class="wcm r">Maybe 18–22 days. Will update when we know more</div>
            </div>
          </div>
          <div class="collage-win cw-em">
            <div class="cw-em-bar">
              <div class="cw-em-subj">Re: Invoice #CF-0042 — missing items ⚠️</div>
              <div class="cw-em-from">From: ops@globalfreight.com · 3 PDFs attached</div>
            </div>
            <div class="cw-em-body">
              Please see attached. Note the <strong>fuel surcharge is on page 2</strong> of the second PDF. The port handling fee was added verbally on our call — we'll include it <strong>next time</strong>. Also the rates changed since last month so the first PDF is void, use the third one...
            </div>
          </div>
        </div>
        <div class="ba-points">
          <div class="ba-point bad-pt"><span class="pt-dot">✕</span> Updates scattered across WhatsApp, WeChat groups, and email chains</div>
          <div class="ba-point bad-pt"><span class="pt-dot">✕</span> ETAs are guesses — you find out too late to act on Amazon windows</div>
          <div class="ba-point bad-pt"><span class="pt-dot">✕</span> Invoices get lost in email threads — no single place to track what's paid</div>
        </div>
      </div>

      <div class="ba-divider">
        <div class="ba-line"></div>
        <div class="ba-vs">→</div>
        <div class="ba-line"></div>
      </div>

      <div>
        <div class="ba-panel-label gl">With CartonFlow</div>
        <div class="cf-panel">
          <div class="cf-panel-bar">
            <div class="cf-logo-sm">CF</div>
            <div class="cf-panel-title">SHZ-LAX-042 · Shanghai → Los Angeles</div>
            <div class="cf-status-chip">🟢 In Transit</div>
          </div>
          <div class="cf-panel-body">
            <div class="cf-milestone-bar">📍 Vessel departed Shanghai · ETA LA: Mar 29 · On schedule</div>
            <div class="cf-msg-row">
              <div class="cf-sender-tag">Jason @ Pacific Freight</div>
              <div class="cf-bubble recv">Customs pre-clearance filed. On track for Mar 29 arrival. No delays.</div>
            </div>
            <div class="cf-msg-row">
              <div class="cf-sender-tag you">You</div>
              <div class="cf-bubble sent">Perfect — FBA window Apr 1–7, we're good. Keep me posted.</div>
            </div>
            <div class="cf-invoice-card">
              <div class="cf-inv-title">
                <span>📄 Invoice #CF-0042</span>
                <div class="cf-paid-btn">Mark Paid</div>
              </div>
              <div class="cf-inv-line"><span>Ocean freight (DDP)</span><span>$3,400</span></div>
              <div class="cf-inv-line"><span>Port handling fee</span><span>$680</span></div>
              <div class="cf-inv-line"><span>Fuel surcharge</span><span>$420</span></div>
              <div class="cf-inv-line"><span>Last-mile delivery</span><span>$320</span></div>
              <div class="cf-inv-total"><span>Total</span><span>$4,820.00</span></div>
            </div>
          </div>
        </div>
        <div class="ba-points">
          <div class="ba-point good-pt"><span class="pt-dot">✓</span> One thread per shipment — your team + every 3PL, in one place</div>
          <div class="ba-point good-pt"><span class="pt-dot">✓</span> Live ETA from AIS data — know before your FBA window closes</div>
          <div class="ba-point good-pt"><span class="pt-dot">✓</span> Structured invoices with full line-item detail, right in the platform</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pricing" id="pricing">
  <div class="p-hd">
    <div class="p-eye">Pricing</div>
    <h2>Simple pricing.<br><span class="g">No surprises.</span></h2>
    <p>Your 3PLs, forwarders, and distributors always join free.</p>
  </div>
  <div class="toggle-row">
    <div class="t-bg">
      <button class="t-b on" id="tm" onclick="sp('m')">Monthly</button>
      <button class="t-b" id="ta" onclick="sp('a')">Annual · Save 20%</button>
    </div>
  </div>
  <div class="plans">
    <div class="plan pro">
      <div class="pro-label">Best Value</div>
      <div class="plan-name">Pro</div>
      <div class="plan-price"><sup>$</sup><span id="bp">129</span><span class="mo">/mo</span></div>
      <div class="plan-billed" id="bn">Billed monthly · Cancel anytime</div>
      <a href="https://app.cartonflow.io/signup" class="plan-btn btn-pro">Start 14-day free trial</a>
      <div class="plan-section">
        <div class="plan-section-title">Tracking &amp; Visibility</div>
        <ul class="feat-list">
          <li class="inc"><span class="chk">✓</span> Shipment status + milestone tracking</li>
          <li class="inc"><span class="chk">✓</span> FedEx + UPS carton-level tracking</li>
          <li class="inc"><span class="chk">✓</span> Multi-destination routing (FBA + custom)</li>
          <li class="inc"><span class="chk">✓</span> <strong>Live ocean tracking + AIS vessel maps</strong></li>
        </ul>
      </div>
      <div class="plan-section">
        <div class="plan-section-title">Communication &amp; Finance</div>
        <ul class="feat-list">
          <li class="inc"><span class="chk">✓</span> 3PL messaging + push notifications</li>
          <li class="inc"><span class="chk">✓</span> Invoice portal (line-item detail)</li>
          <li class="inc"><span class="chk">✓</span> Document hub</li>
          <li class="inc"><span class="chk">✓</span> <strong>RFQ competitive bidding system</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Distributor management portal</strong></li>
        </ul>
      </div>
      <div class="plan-section">
        <div class="plan-section-title">Team &amp; Analytics</div>
        <ul class="feat-list">
          <li class="inc"><span class="chk">✓</span> <strong>Unlimited user seats</strong></li>
          <li class="inc"><span class="chk">✓</span> Unlimited 3PL seats (always free)</li>
          <li class="inc"><span class="chk">✓</span> <strong>Advanced analytics + SLA dashboard</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Weekly digest + anomaly alerts</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Priority support</strong></li>
        </ul>
      </div>
      <div class="plan-section">
        <div class="plan-section-title">AI Command Center</div>
        <ul class="feat-list">
          <li class="inc"><span class="chk">✓</span> <strong>AI Daily Brief</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>AI Draft Messages</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Predictive ETA</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Smart Delay Alerts</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>FBA Window Warning</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>3PL Intelligence</strong></li>
          <li class="inc"><span class="chk">✓</span> <strong>Freight Cost Intelligence</strong></li>
        </ul>
      </div>
    </div>
  </div>
    
  </div>
  <p class="p-footer">14-day free trial · Card required at signup · Cancel anytime · Your 3PLs join free</p>
</div>

<div class="faq-section">
  <div class="faq-inner">
    <h2>Questions <span class="g">answered.</span></h2>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Do my 3PLs have to pay?</span><span class="faq-icon">▾</span></button><div class="faq-body">No — your 3PLs, forwarders, and distributors join CartonFlow for free. They get a full portal to update shipments, respond to messages, submit invoices, and place bids on RFQs.</div></div>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>What happens after the 14-day trial?</span><span class="faq-icon">▾</span></button><div class="faq-body">At the end of your trial, your card on file is charged for the plan you selected. You can cancel any time before the trial ends from your account settings and you won't be charged.</div></div>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Can I connect my own FedEx and UPS accounts?</span><span class="faq-icon">▾</span></button><div class="faq-body">Yes. You connect your own FedEx and UPS developer credentials — CartonFlow uses them to pull tracking data. Your rates, your accounts, no middleman markup.</div></div>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>How does the RFQ bidding work for my 3PLs?</span><span class="faq-icon">▾</span></button><div class="faq-body">You create an RFQ for a shipment and select which 3PLs to invite. They each submit DDP rate bids per service combo directly in the platform. You compare side-by-side and award with one click. 3PLs typically respond within 24 hours.</div></div>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>What's the difference between Basic and Pro?</span><span class="faq-icon">▾</span></button><div class="faq-body">Basic covers shipment tracking, invoicing, and 3PL messaging — solid for brands focused on domestic and air logistics. Pro unlocks the full platform: live ocean tracking with AIS vessel maps, competitive RFQ bidding, distributor management, advanced analytics, and the full AI Command Center (Daily Brief, Predictive ETA, Freight Cost Intelligence, Smart Delay Alerts, and more). Pro is where most scaling brands end up.</div></div>
    <div class="faq-item"><button class="faq-q" onclick="tf(this)"><span>Can I cancel anytime?</span><span class="faq-icon">▾</span></button><div class="faq-body">Yes. No contracts, no cancellation fees. Cancel any time from your account settings. Annual plans are refunded prorated after the first 30 days.</div></div>
  </div>
</div>

<div class="cta-section">
  <div class="cta-bg"></div>
  <div class="cta-inner">
    <h2>Stop chasing updates.<br><span class="g">Start shipping with clarity.</span></h2>
    <p>14-day free trial · Card required at signup · Your 3PLs join for free</p>
    <a href="https://app.cartonflow.io/signup" class="btn-xl btn-fill">Start your free trial →</a>
  </div>
</div>

<footer>
  <div class="footer-top">
    <div class="founder-note">
      <h4>Why we built this</h4>
      <p>Most Amazon sellers and e-commerce brands are managing 6-figure freight operations over <strong>WhatsApp threads, WeChat groups, and spreadsheets</strong>. Updates come too late to act on FBA windows. Everything lives in separate threads with no single source of truth.<br><br>We built CartonFlow because this problem is real, it's expensive, and it's completely solvable. <strong>Your 3PLs join free. You get visibility you've never had. That's the deal.</strong></p>
    </div>
    <div class="footer-nav">
      <a href="/features" class="footer-deep-link">→ Deep dive: all features</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-of-service">Terms of Service</a>
      <a href="/cancellation">Cancellation &amp; Refunds</a>
      <a href="/acceptable-use">Acceptable Use</a>
      <a href="/cookies">Cookie Policy</a>
      <a href="/support">Support &amp; Contact</a>
      <a href="/for-logistics-partners">For Logistics Partners</a>
      <a href="/for-distributors">For Distributors</a>
      <a href="mailto:info@pevarasystems.com">info@pevarasystems.com</a>
    </div>
  </div>
  <div class="footer-bottom">
    <svg width="120" height="26" viewBox="0 0 300 64" fill="none"><rect x="1" y="1" width="62" height="62" rx="14" fill="#0A0F1E"/><rect x="1" y="1" width="62" height="62" rx="14" stroke="#4F46E5" stroke-width="2"/><text x="7" y="47" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#4F46E5">C</text><text x="32" y="47" font-weight="900" font-size="32" fill="#FFF">F</text><text x="80" y="42" font-family="Arial Black,sans-serif" font-weight="900" font-size="28" letter-spacing="-0.5"><tspan fill="#FFF">Carton</tspan><tspan fill="#4F46E5">Flow</tspan></text></svg>
    <p class="copy">&copy; 2026 CartonFlow by Pevara Systems. All rights reserved.</p>
  </div>
</footer>

<script>
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40));
function sp(m){
  const a=m==='a';
  document.getElementById('bp').textContent=a?'1240':'129';
  document.getElementById('bn').textContent=a?'Billed annually · Save 20%':'Billed monthly · Cancel anytime';
  document.getElementById('tm').classList.toggle('on',!a);
  document.getElementById('ta').classList.toggle('on',a);
}
function tf(btn){
  const b=btn.nextElementSibling,ic=btn.querySelector('.faq-icon'),open=b.classList.contains('open');
  document.querySelectorAll('.faq-body').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(x=>x.classList.remove('open'));
  if(!open){b.classList.add('open');ic.classList.add('open');}
}
const fo=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');}),{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el=>fo.observe(el));
</script>
`;

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
