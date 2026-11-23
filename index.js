export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ViralBoost KE - Paste Link</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui}
body{background:#000;color:#fff}
.header{padding:14px 18px;display:flex;justify-content:space-between;border-bottom:1px solid #222}
.logo{font-weight:800}.logo span{color:#ff0050}
.badge{background:#ff0050;color:#fff;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:800}
.hero{padding:22px 18px;text-align:center}
.hero h1{font-size:26px;font-weight:900}
.hero p{color:#999;font-size:13px;margin-top:8px}
.cards{padding:14px;max-width:460px;margin:0 auto;display:grid;gap:8px}
.card{background:#111;border:1px solid #222;border-radius:12px;padding:12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
.card.active{border-color:#ff0050;background:#1a0a0f}
.price{color:#00ff88;font-weight:800}
.form{max-width:460px;margin:14px auto;padding:16px;background:#0f0f0f;border-radius:16px;border:1px solid #222}
input,select{width:100%;padding:12px;border-radius:10px;border:1px solid #333;background:#000;color:#fff;margin:6px 0;font-size:14px}
.mpesa{background:#00a65122;border:1px dashed #00a651;border-radius:10px;padding:10px;text-align:center;color:#4cff9a;font-size:13px;margin:8px 0}
.btn{width:100%;background:linear-gradient(90deg,#ff0050,#ff7a00);color:#fff;border:none;border-radius:28px;padding:13px;font-weight:800;cursor:pointer}
.lbl{font-size:12px;color:#888;margin:8px 0 2px 2px;display:block}
.footer{text-align:center;color:#555;padding:16px;font-size:11px}
.wa{position:fixed;bottom:16px;right:16px;background:#25D366;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;font-weight:900}
</style>
</head><body>
<div class="header"><div class="logo">VIRAL<span>BOOST</span> KE</div><div class="badge">PASTE LINK</div></div>
<div class="hero">
<h1>Paste TikTok Link & Boost</h1>
<p>Followers, Likes, Views - 25 bob starting - 0746885823</p>
</div>

<div class="form">
<span class="lbl">1. TikTok Link or @Username</span>
<input id="link" placeholder="https://www.tiktok.com/@yourname/video/... or @username">

<span class="lbl">2. Service</span>
<select id="service" onchange="upd()">
<option value="Followers">Followers</option>
<option value="Likes">Likes ❤️</option>
<option value="Views">Views 👁️</option>
<option value="Comments">Comments</option>
</select>

<span class="lbl">3. Quantity</span>
<select id="plan" onchange="upd()">
<option value="100 - 25 KES">100 - 25 KES</option>
<option value="500 - 50 KES">500 - 50 KES</option>
<option value="1000 - 100 KES" selected>1000 - 100 KES</option>
<option value="5000 - 400 KES">5000 - 400 KES</option>
<option value="10000 - 750 KES">10000 - 750 KES</option>
</select>

<div id="preview" style="background:#111;border-radius:10px;padding:10px;margin:8px 0;font-size:13px;color:#aaa">Service: Followers<br>Link: (paste above)</div>

<input id="phone" placeholder="Your M-Pesa Number">
<div class="mpesa">SEND MONEY TO<br><b>0746885823</b><br>Then enter code below</div>
<input id="code" placeholder="M-Pesa Code">
<button class="btn" onclick="order()">BOOST NOW - WHATSAPP</button>
</div>

<div class="footer">ViralBoost KE • Kisumu • 0746885823<br>viral.shepherdjunior2008.workers.dev</div>
<a class="wa" href="https://wa.me/254746885823">W</a>

<script>
function upd(){
 const s=document.getElementById('service').value;
 const l=document.getElementById('link').value||'(paste link)';
 const p=document.getElementById('plan').value;
 document.getElementById('preview').innerHTML = 'Service: '+s+'<br>Plan: '+p+'<br>Link: '+l;
}
document.getElementById('link').addEventListener('input',upd);
function order(){
 const link=document.getElementById('link').value;
 const serv=document.getElementById('service').value;
 const plan=document.getElementById('plan').value;
 const ph=document.getElementById('phone').value;
 const code=document.getElementById('code').value;
 if(!link||!ph){alert('Paste Link and M-Pesa number');return;}
 const msg=\`NEW BOOST ORDER%0AService: \${serv}%0ALink: \${link}%0AQuantity: \${plan}%0APhone: \${ph}%0AMpesa Code: \${code}\`;
 window.open('https://wa.me/254746885823?text='+encodeURIComponent(msg),'_blank');
}
</script>
</body></html>`;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
}
