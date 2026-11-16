/* Password gate for casestudy.html. Client-side only: a deterrent, not real security.
   Only a salted PBKDF2 hash is stored. Change it with set-casestudy-password.py */
(function () {
  var SALT='6352c2af029b09fdb4a15d46e64f8a33', HASH='04762aa99afd976ac0b10bd5a77f53ad347909d840e21b354c66ebd2c72ad793', ITER=150000, KEY='jk-cs-unlock';
  var d = document, root = d.documentElement;
  if (!HASH) return;                       // no password set -> page stays open

  function hex(buf){return Array.prototype.map.call(new Uint8Array(buf),function(b){return ('0'+b.toString(16)).slice(-2)}).join('')}
  function derive(pw){
    var enc=new TextEncoder();
    return crypto.subtle.importKey('raw',enc.encode(pw),'PBKDF2',false,['deriveBits'])
      .then(function(k){return crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(SALT),iterations:ITER,hash:'SHA-256'},k,256)})
      .then(hex);
  }
  function unlock(){ root.classList.remove('cs-locked'); var g=d.getElementById('cs-gate'); if(g) g.remove(); }

  try { if (sessionStorage.getItem(KEY) === HASH) return; } catch (e) {}
  root.classList.add('cs-locked');

  var css = d.createElement('style');
  css.textContent =
    'html.cs-locked,html.cs-locked body{overflow:hidden!important;height:100%}' +
    'html.cs-locked body>*:not(#cs-gate):not(script):not(style){visibility:hidden!important}' +
    '#cs-gate{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:24px;' +
      'background:radial-gradient(60% 45% at 15% 10%,rgba(124,77,255,.35),transparent 70%),radial-gradient(55% 45% at 90% 90%,rgba(25,200,240,.25),transparent 70%),#05050d;' +
      'font-family:Manrope,system-ui,-apple-system,sans-serif;color:#f4f4fa}' +
    '#cs-gate .box{width:min(420px,100%);padding:36px 30px 30px;border-radius:26px;text-align:center;' +
      'background:linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.14);' +
      '-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);box-shadow:0 30px 80px -20px #000,0 0 60px -20px rgba(157,107,255,.6),inset 0 1px 0 rgba(255,255,255,.18)}' +
    '#cs-gate .lk{width:58px;height:58px;margin:0 auto 18px;border-radius:50%;display:grid;place-items:center;color:#19f0ff;' +
      'background:radial-gradient(circle at 30% 25%,rgba(25,240,255,.28),rgba(25,240,255,.05) 70%);border:1px solid rgba(25,240,255,.4);box-shadow:0 0 30px -4px rgba(25,240,255,.6)}' +
    '#cs-gate .lk svg{width:26px;height:26px}' +
    '#cs-gate h1{font:700 24px/1.2 Sora,system-ui,sans-serif;letter-spacing:-.02em;margin:0 0 8px}' +
    '#cs-gate p{margin:0 0 22px;font-size:14.5px;line-height:1.55;color:#9aa0c3}' +
    '#cs-gate form{display:grid;gap:12px}' +
    '#cs-gate input{width:100%;box-sizing:border-box;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.18);background:rgba(0,0,0,.45);' +
      'color:#fff;font:500 16px Manrope,system-ui,sans-serif;text-align:center;letter-spacing:.08em;outline:none;transition:border-color .2s,box-shadow .2s}' +
    '#cs-gate input:focus{border-color:#19f0ff;box-shadow:0 0 0 3px rgba(25,240,255,.18)}' +
    '#cs-gate input.bad{border-color:#ff5c7a;box-shadow:0 0 0 3px rgba(255,92,122,.2);animation:csShake .35s}' +
    '#cs-gate button{padding:14px 16px;border:0;border-radius:14px;cursor:pointer;color:#fff;font:600 15px Manrope,system-ui,sans-serif;' +
      'background:linear-gradient(120deg,#7c4dff,#4b6bff 55%,#19a8e0);box-shadow:0 12px 34px -12px rgba(124,77,255,.8)}' +
    '#cs-gate button[disabled]{opacity:.6;cursor:wait}' +
    '#cs-gate .err{min-height:18px;margin:2px 0 0;font-size:13px;color:#ff8da1}' +
    '#cs-gate a{display:inline-block;margin-top:16px;font-size:13.5px;color:#19f0ff;text-decoration:none}' +
    '#cs-gate a:hover{text-decoration:underline}' +
    '@keyframes csShake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}' +
    '@media(prefers-reduced-motion:reduce){#cs-gate input.bad{animation:none}}';
  d.head.appendChild(css);

  function build(){
    if (d.getElementById('cs-gate')) return;
    var g = d.createElement('div'); g.id='cs-gate'; g.setAttribute('role','dialog'); g.setAttribute('aria-modal','true'); g.setAttribute('aria-labelledby','cs-t');
    g.innerHTML =
      '<div class="box"><div class="lk" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/></svg></div>' +
      '<h1 id="cs-t">Case studies are protected</h1>' +
      '<p>Enter the password to view these case studies. Don\'t have it? Get in touch and I\'ll share it.</p>' +
      '<form id="cs-f" autocomplete="off"><input id="cs-pw" type="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required />' +
      '<button type="submit">Unlock</button><div class="err" id="cs-e" role="alert" aria-live="polite"></div></form>' +
      '<a href="portfolio.html">&larr; Back to portfolio</a></div>';
    d.body.appendChild(g);
    var f=d.getElementById('cs-f'), i=d.getElementById('cs-pw'), e=d.getElementById('cs-e'), b=f.querySelector('button');
    i.focus();
    i.addEventListener('input',function(){i.classList.remove('bad');e.textContent=''});
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      if (!window.crypto || !crypto.subtle) { e.textContent='This browser can\'t verify the password (needs HTTPS).'; return; }
      b.disabled=true; b.textContent='Checking…';
      derive(i.value).then(function(h){
        if (h===HASH){ try{sessionStorage.setItem(KEY,HASH)}catch(x){} unlock(); }
        else { i.classList.add('bad'); e.textContent='Incorrect password. Please try again.'; i.select(); }
      }).catch(function(){ e.textContent='Something went wrong. Please try again.'; })
        .then(function(){ b.disabled=false; b.textContent='Unlock'; });
    });
  }
  if (d.body) build(); else d.addEventListener('DOMContentLoaded', build);
})();
