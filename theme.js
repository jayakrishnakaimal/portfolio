/* JK.designs — shared light/dark theme + toggle (portfolio, casestudy, gallery)
   Dark is the default. Choice is saved in localStorage ("jk-theme"). */
(function () {
  var KEY = 'jk-theme', root = document.documentElement, saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var theme = saved === 'light' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);

  var L = 'html[data-theme="light"]';
  var SURF = '.glass,.award,.step,.card,.about-card,.project,.rcard,.story-card,.skills-card,.contact-box,.award-feature,.profile,.pr-tile,.cert-group,.brand,.ec,.cg,.edu-list li,.stats-grid .stat,.m-box,.shot-card,.shot-cap,.invisible-def,.dm-card,.process-step-card,.toolbar,.fan-card,.testimonial,.quote,.q';
  var css = [
    L + '{color-scheme:light;--bg:#f4f5fb;--text:#14172b;--muted:#59607f;--glass:linear-gradient(160deg,rgba(255,255,255,.95),rgba(255,255,255,.7));--glass-strong:#fff;--stroke:rgba(20,23,43,.12);--a1:#6d3fd6;--a2:#0a8fa6;--a3:#d4227f}',
    L + ' body{background:radial-gradient(60% 45% at 8% 4%,rgba(124,77,255,.38),transparent 70%),radial-gradient(55% 45% at 95% 18%,rgba(25,200,240,.34),transparent 70%),radial-gradient(60% 50% at 50% 55%,rgba(255,92,168,.18),transparent 72%),radial-gradient(55% 45% at 4% 92%,rgba(52,211,153,.22),transparent 70%),radial-gradient(55% 45% at 96% 96%,rgba(124,77,255,.28),transparent 70%),linear-gradient(180deg,#eef0fb,#f6f1fb)!important;background-attachment:fixed!important;color:var(--text)}',
    L + ' body::before,' + L + ' body::after,' + L + ' .bg::before,' + L + ' .cursor-glow{display:none!important}',
    L + ' .orb{opacity:.42!important;mix-blend-mode:normal!important;filter:blur(110px)!important}',
    L + ' .grid-bg{background-image:linear-gradient(rgba(20,23,43,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(20,23,43,.04) 1px,transparent 1px)!important}',
    L + ' :is(' + SURF + '){background:linear-gradient(145deg,rgba(255,255,255,.62),rgba(255,255,255,.26))!important;-webkit-backdrop-filter:blur(22px) saturate(190%)!important;backdrop-filter:blur(22px) saturate(190%)!important;border:1px solid rgba(255,255,255,.75)!important;box-shadow:0 18px 50px -22px rgba(60,50,130,.40),inset 0 1px 0 rgba(255,255,255,.95),inset 0 -1px 0 rgba(255,255,255,.35),inset 0 0 0 1px rgba(255,255,255,.18)!important;color:var(--text)}',
    L + ' .stats-grid{background:linear-gradient(145deg,rgba(255,255,255,.58),rgba(255,255,255,.22))!important;-webkit-backdrop-filter:blur(26px) saturate(190%)!important;backdrop-filter:blur(26px) saturate(190%)!important;border:1px solid rgba(255,255,255,.8)!important;box-shadow:0 30px 80px -36px rgba(109,63,214,.45),inset 0 1px 0 #fff!important}',
    L + ' .stats-grid .stat{background:linear-gradient(160deg,rgba(255,255,255,.65),rgba(255,255,255,.2))!important;border:1px solid rgba(255,255,255,.85)!important}',
    L + ' .pr-phase{background:linear-gradient(160deg,rgba(255,255,255,.58),rgba(255,255,255,.22))!important;-webkit-backdrop-filter:blur(22px) saturate(190%);backdrop-filter:blur(22px) saturate(190%);border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 26px 70px -34px var(--p),inset 0 1px 0 #fff!important}',
    L + ' .pr-tile{background:rgba(255,255,255,.5)!important}',
    L + ' .pr-always-in{background:radial-gradient(600px 240px at 12% 50%,rgba(109,63,214,.16),transparent 70%),rgba(255,255,255,.55)!important;-webkit-backdrop-filter:blur(22px) saturate(190%);backdrop-filter:blur(22px) saturate(190%)}',
    L + ' .pr-always-txt p{color:var(--muted)!important}',
    L + ' .pr-venn text{fill:#14172b!important}',
    L + ' .contact-box{background:radial-gradient(ellipse at 50% 0%,rgba(109,63,214,.2),transparent 60%),rgba(255,255,255,.5)!important}',
    L + ' nav,' + L + ' nav.glass{background:linear-gradient(145deg,rgba(255,255,255,.7),rgba(255,255,255,.4))!important;-webkit-backdrop-filter:blur(26px) saturate(200%)!important;backdrop-filter:blur(26px) saturate(200%)!important;border:1px solid rgba(255,255,255,.85)!important;box-shadow:0 16px 44px -16px rgba(60,50,130,.4),inset 0 1px 0 #fff!important}',
    L + ' .links a,' + L + ' .nav-links a{color:var(--muted)}',
    L + ' .links a:hover,' + L + ' .links a.on,' + L + ' .nav-links a:hover{color:var(--text)!important;background:rgba(20,23,43,.06)}',
    L + ' nav.open .links{background:rgba(255,255,255,.82)!important;-webkit-backdrop-filter:blur(26px) saturate(200%)!important;backdrop-filter:blur(26px) saturate(200%)!important;border:1px solid rgba(255,255,255,.9)!important;box-shadow:0 24px 60px -16px rgba(60,50,130,.45)!important}',
    L + ' nav.open .links a{color:var(--text)}',
    L + ' .menu-btn{border-color:rgba(20,23,43,.2);background:rgba(20,23,43,.04)}',
    L + ' .menu-btn span{background:#14172b}',
    L + ' .logo,' + L + ' .logo-sub{color:var(--text)!important;text-shadow:none!important}',
    L + ' h1,' + L + ' h2,' + L + ' h3,' + L + ' h4{text-shadow:none!important}',
    L + ' .grad{background-image:linear-gradient(110deg,#6d3fd6,#0a8fa6 40%,#d4227f 75%,#6d3fd6)!important;filter:none!important}',
    L + ' .stats-grid .stat b{-webkit-text-stroke:0!important;filter:none!important}',
    L + ' .stats-grid .stat span,' + L + ' .edu-lang .edu-list b{color:var(--text)!important;text-shadow:none!important}',
    L + ' .edu-lang .edu-list li div span{color:var(--muted)!important}',
    L + ' .edu-yr{background:rgba(255,255,255,.75)!important;color:var(--text)!important;text-shadow:none!important}',
    L + ' footer{-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}',
    '@media(min-width:821px){nav .links a{padding:6px 7px!important}nav .links{gap:0!important}}',
    L + ' .btn{background:rgba(20,23,43,.05);border-color:rgba(20,23,43,.18);color:var(--text)}',
    L + ' .btn.primary{color:#fff!important;background:linear-gradient(120deg,#7c4dff,#4b6bff 55%,#19a8e0)!important;border-color:transparent!important;box-shadow:0 12px 34px -12px rgba(124,77,255,.7)!important}',
    L + ' .oi,' + L + ' .chip{background:rgba(255,255,255,.92)!important;border-color:rgba(20,23,43,.14)!important;color:var(--text)!important;box-shadow:0 10px 28px -14px rgba(40,40,90,.4)!important}',
    L + ' .oi *,' + L + ' .chip *{color:inherit}',
    L + ' .skill-list li,' + L + ' .tags span,' + L + ' .rcard .co,' + L + ' .af-tag,' + L + ' .pr-pills span{background:rgba(20,23,43,.05)!important;border-color:rgba(20,23,43,.14)!important;color:var(--text)!important}',
    L + ' footer{background:linear-gradient(180deg,#f4f5fb,#e9eaf6)!important;border-top:1px solid rgba(20,23,43,.1)}',
    L + ' section+section::before{background:linear-gradient(90deg,transparent,rgba(109,63,214,.4),rgba(10,143,166,.4),transparent)!important;box-shadow:none!important}',
    L + ' ::-webkit-scrollbar-track{background:#f4f5fb}',
    L + ' ::selection{color:#fff}',
    L + ' .jk-fc{color:var(--text)!important}',
    /* coloured tags / green accents: dark, readable shades on light */
    L + ' .tags span{color:var(--text)!important;background:rgba(255,255,255,.55)!important;box-shadow:none!important}',
    L + ' .tags span.t-emerald{color:#046c4e!important;background:rgba(16,185,129,.16)!important;border-color:rgba(4,120,87,.5)!important}',
    L + ' .tags span.t-blue{color:#1d4ed8!important;background:rgba(59,130,246,.14)!important;border-color:rgba(29,78,216,.4)!important}',
    L + ' .tags span.t-purple{color:#6d28d9!important;background:rgba(168,85,247,.14)!important;border-color:rgba(109,40,217,.4)!important}',
    L + ' .tags span.t-cyan{color:#0e6f84!important;background:rgba(6,182,212,.14)!important;border-color:rgba(14,111,132,.45)!important}',
    L + ' .tags span.t-pink{color:#be185d!important;background:rgba(236,72,153,.13)!important;border-color:rgba(190,24,93,.4)!important}',
    L + ' .tags span.t-amber{color:#92400e!important;background:rgba(245,158,11,.16)!important;border-color:rgba(146,64,14,.45)!important}',
    L + ' .tags span.t-teal{color:#0f6b61!important;background:rgba(20,184,166,.14)!important;border-color:rgba(15,107,97,.45)!important}',
    L + ' .tags span.t-rose{color:#be123c!important;background:rgba(244,63,94,.13)!important;border-color:rgba(190,18,60,.4)!important}',
    L + ' .tags span.t-indigo{color:#4338ca!important;background:rgba(99,102,241,.14)!important;border-color:rgba(67,56,202,.4)!important}',
    L + ' .ibm-win-badge.live{color:#046c4e!important;background:rgba(16,185,129,.16)!important;border-color:rgba(4,120,87,.5)!important}',
    L + ' .links a[href*="resume"]{color:#046c4e!important}',
    L + ' .links a[href*="casestudy"],' + L + ' .links a[href*="gallery"]{color:#0e6f84!important}',
    L + ' .results div span{color:var(--muted)!important}',
    L + ' .results div b.grad{background-image:linear-gradient(110deg,#4c1d95,#1e3a8a 55%,#0f4c5c)!important}',
    L + ' .life-phase.d2,' + L + ' .c-side-title.ux{color:#046c4e!important}',
    L + ' .life-phase.d2{background:rgba(16,185,129,.16)!important;border-color:rgba(4,120,87,.5)!important}',
    L + ' .m-val{color:#0e6f84!important;text-shadow:none!important}',
    L + ' .m-label{color:var(--text)!important}',
    L + ' .proj-highlights li b{color:var(--text)!important}',
    /* case study: near-black panels / nested boxes → frosted glass */
    L + ' :is(.meta-strip,.dive-card,.pillar-item,.life-card,.process-step-card,.constraint-card,.collab-card,.ownership-box,.shot-card,.journey,.invisible-def,.dm-role-card){background:linear-gradient(145deg,rgba(255,255,255,.62),rgba(255,255,255,.26))!important;-webkit-backdrop-filter:blur(22px) saturate(190%);backdrop-filter:blur(22px) saturate(190%);border:1px solid rgba(255,255,255,.78)!important;box-shadow:0 18px 50px -22px rgba(60,50,130,.4),inset 0 1px 0 #fff!important}',
    L + ' :is(.process-step-col-out,.constraint-row,.collab-block,.jm-pt,.dive-card-head,.ownership-table tr:hover td){background:rgba(255,255,255,.5)!important;border-color:rgba(20,23,43,.1)!important}',
    L + ' :is(.shot-frame,.jm-node){background:rgba(255,255,255,.7)!important;border-color:rgba(20,23,43,.14)!important}',
    L + ' .fx-vignette{background:radial-gradient(ellipse at 50% 40%,transparent 60%,rgba(120,100,200,.12) 100%)!important}',
    L + ' :is(.meta-val,.dm-box-title,.shot-title,.journey-who b,.jm-col h4,.jm-legend span,.invisible-def p,.ownership-table td,.ownership-table th){color:var(--text)!important}',
    L + ' :is(.dm-box-desc,.shot-desc,.jm-pt){color:var(--muted)!important}',
    L + ' .jm-mid{stroke:rgba(20,23,43,.14)!important}',
    L + ' .invisible-def{padding:18px 22px!important;border-radius:18px!important}',
    L + ' :is(.dive-card,.process-step-card,.shot-card,.life-card,.pillar-item,.constraint-card,.collab-card):hover{background:linear-gradient(145deg,rgba(255,255,255,.8),rgba(255,255,255,.4))!important;border-color:rgba(109,63,214,.45)!important;box-shadow:0 22px 50px -20px rgba(109,63,214,.45),inset 0 1px 0 #fff!important}',
    L + ' .ownership-table td,' + L + ' .ownership-table th{border-color:rgba(20,23,43,.1)!important}',
    L + ' .jk-fm{color:var(--muted)!important}',
    /* toggle button */
    '.jk-theme-btn{position:fixed;right:18px;bottom:18px;z-index:2500;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;cursor:pointer;padding:0;' +
      'border:1px solid rgba(255,255,255,.22);background:rgba(8,8,16,.88);color:#fff;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);' +
      'box-shadow:0 10px 30px -8px rgba(0,0,0,.8),0 0 24px -8px rgba(25,240,255,.6);transition:transform .25s,box-shadow .25s}',
    '.jk-theme-btn:hover,.jk-theme-btn:focus-visible{transform:scale(1.08) rotate(-8deg);outline:none;box-shadow:0 10px 30px -8px rgba(0,0,0,.8),0 0 30px -4px rgba(25,240,255,.9)}',
    '.jk-theme-btn svg{width:22px;height:22px}',
    '.jk-theme-btn.jk-in-nav{position:static;flex:none;width:38px;height:38px;margin-left:4px;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.2)}',
    '.jk-theme-btn.jk-in-nav svg{width:19px;height:19px}',
    L + ' .jk-theme-btn.jk-in-nav{background:rgba(20,23,43,.05);box-shadow:none;border-color:rgba(20,23,43,.2)}',
    '.jk-theme-btn .jk-sun{display:none}',
    L + ' .jk-theme-btn{background:rgba(255,255,255,.95);color:#14172b;border-color:rgba(20,23,43,.18);box-shadow:0 10px 30px -10px rgba(40,40,90,.45)}',
    L + ' .jk-theme-btn .jk-sun{display:block}' + L + ' .jk-theme-btn .jk-moon{display:none}',
    '@media(max-width:560px){.jk-theme-btn{right:12px;bottom:12px;width:42px;height:42px}}',
    '@media(prefers-reduced-motion:reduce){.jk-theme-btn{transition:none}}'
  ].join('\n');

  var st = document.createElement('style');
  st.id = 'jk-theme-css';
  st.textContent = css;
  document.head.appendChild(st);

  /* Elements whose text is hard-coded near-white get re-coloured in light mode.
     Anything on images / intentionally dark chips is excluded. */
  var EXC = '.gallery,.fan,.thumb,.ibm-carousel-thumb,.lightbox,.img-lightbox,.lightbox-content,.btn.primary,.orbit,.jk-theme-btn,figure,.shot-frame,.hero-art,svg';
  function fixColors() {
    var all = document.body.querySelectorAll('.jk-fc,.jk-fm');
    for (var i = 0; i < all.length; i++) all[i].classList.remove('jk-fc', 'jk-fm');
    if (root.getAttribute('data-theme') !== 'light') return;
    var els = document.body.querySelectorAll('*');
    for (var j = 0; j < els.length; j++) {
      var e = els[j];
      if (e.closest(EXC)) continue;
      var m = getComputedStyle(e).color.match(/[\d.]+/g);
      if (m && +m[0] > 195 && +m[1] > 195 && +m[2] > 195 && (m[3] === undefined || +m[3] > 0.05)) {
        e.classList.add(m[3] !== undefined && +m[3] < 0.9 ? 'jk-fm' : 'jk-fc');
      }
    }
  }

  function apply(t, persist) {
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'light' ? '#f4f5fb' : '#02030a');
    var b = document.querySelector('.jk-theme-btn');
    if (b) {
      b.setAttribute('aria-pressed', t === 'light');
      b.setAttribute('aria-label', t === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      b.title = b.getAttribute('aria-label');
    }
    if (persist) { try { localStorage.setItem(KEY, t); } catch (e) {} }
    fixColors();
  }

  function init() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'jk-theme-btn';
    b.innerHTML =
      '<svg class="jk-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>' +
      '<svg class="jk-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    b.addEventListener('click', function () {
      apply(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true);
    });
    var nav = document.querySelector('nav');
    if (nav) {
      b.classList.add('jk-in-nav');
      var mb = nav.querySelector('.menu-btn');
      nav.insertBefore(b, mb || null);
    } else {
      document.body.appendChild(b);
    }
    apply(root.getAttribute('data-theme'), false);
    /* re-run once everything (fonts, reveal animations) has settled */
    window.addEventListener('load', function () { setTimeout(fixColors, 600); });
  }

  window.jkTheme = { set: function (t) { apply(t, true); }, get: function () { return root.getAttribute('data-theme'); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
