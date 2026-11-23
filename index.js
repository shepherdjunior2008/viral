export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ViralBoost Kenya - Real TikTok Followers M-Pesa</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Inter',system-ui}
body{background:#000;color:#fff;overflow-x:hidden}
.header{padding:16px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #222}
.logo{font-weight:800;font-size:22px} .logo span{color:#ff0050}
.badge{background:#ff0050;color:#fff;padding:4px 10px;border-radius:20px;font-size:12px}
.hero{padding:36px 20px;text-align:center;background:radial-gradient(600px at 50% -20%,#ff005033,#000)}
.hero h1{font-size:36px;line-height:1.1;font-weight:800} .hero h1 i{color:#ff0050;font-style:normal}
.hero p{color:#aaa;margin:14px auto;max-width:380px}
.cards{display:grid;gap:14px;padding:20px;max-width:480px;margin:0 auto}
.card{background:#111;border:1px solid #222;border-radius:18px;padding:18px;display:flex;justify-content:space-between;align-items:center}
.card.popular{border-color:#ff0050;background:linear-gradient(180deg,#1a0a0f,#111);transform:scale(1.02)}
.card-left h3{font-size:18px} .card-left small{color:#888}
.price{font-weight:800;font-size:20px;color:#fff}
.btn{width:100%;background:linear-gradient(90deg,#ff0050,#ff7a00);color:#fff;border:none;border-radius:30px;padding:14px;font-weight:800;font-size:16px;margin-top:12px;cursor:pointer}
.form{max-width:480px;margin:20px auto;padding:20px;background:#0f0f0f;border-radius:20px;border:1px solid #222}
.form h2{margin-bottom:12px;text-align:center}
input,select{width:100%;padding:14px;border-radius:12px;border:1px solid #333;background:#000;color:#fff;margin:8px 0;font-size:16px}
.mpesa{background:#00a65122;border:1px dashed #00a651;border-radius:12px;padding:12px;margin:12px 0;text-align:center;color:#4cff9a;font-size:14px}
.footer{padding:30px 20px;text-align:center;color:#666;font-size:12px}
.wa{position:fixed;bottom:20px;right:20px;background:#25D366;color:#fff;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;text-decoration:none;box-shadow:0 8px 24px #000}
</style>
</head><body>
<div class="header"><div class="logo">VIRAL<span>BOOST</span> KE</div><div class="badge">LIVE FROM KISUMU</div></div>

<div class="hero">
<h1>Get <i>Real</i> TikTok Followers in Minutes</h1>
<p>Kenyan followers, fast delivery, M-Pesa payment. No password needed.</p>
</div>

<div class="cards">
<div class="card"><div class="card-left"><h3>1,000 Followers</h3><small>Starter - 24h delivery</small></div><div class="price">500 KES</div></div>
<div class="card popular"><div class="card-left"><h3>5,000 Followers - POPULAR</h3><small>Best value - 12h delivery</small></div><div class="price">2,000 KES</div></div>
<div class="card"><div class="card-left"><h3>10,000 Followers</h3><small>Viral - 24h delivery</small></div><div class="price">3,500 KES</div></div>
</div>

<div class="form">
<h2>Place Order</h2>
<input id="user" placeholder="TikTok Username (e.g @shepherd)">
<select id="plan">
<option value="1000 - 500 KES">1K - 500 KES</option>
<option value="5000 - 2000 KES" selected>5K - 2000 KES (Popular)</option>
<option value="10000 - 3500 KES">10K - 3500 KES</option>
</select>
<input id="phone" placeholder="M-Pesa Number 07xx xxx xxx">
<div class="mpesa">LIPA NA M-PESA<br><b>Till: 123456 - ViralBoost</b><br>Pay then enter code below</div>
<input id="code" placeholder="M-Pesa Code e.g QGH...">
<button class="btn" onclick="order()">ORDER NOW VIA WHATSAPP</button>
<p style="text-align:center;color:#666;font-size:12px;margin-top:10px">Orders go to 0746885823 • Secure • No password</p>
</div>

<div class="footer">© 2026 ViralBoost Kenya • Kisumu • Fast delivery • Support: 0746885823<br>viral.shepherdjunior2008.workers.dev</div>
<a class="wa" href="https://wa.me/254746885823?text=Hi ViralBoost, I want followers" target="_blank">W</a>

<script>
function order(){
 const u=document.getElementById('user').value||'';
 const p=document.getElementById('plan').value;
 const ph=document.getElementById('phone').value||'';
 const c=document.getElementById('code').value||'';
 if(!u||!ph){alert('Enter TikTok username and M-Pesa number');return;}
 const msg = \`Hi ViralBoost!%0AUsername: \${encodeURIComponent(u)}%0APlan: \${encodeURIComponent(p)}%0APhone: \${encodeURIComponent(ph)}%0AM-Pesa Code: \${encodeURIComponent(c)}%0A%0AFrom: viral site\`;
 window.open('https://wa.me/254746885823?text='+msg,'_blank');
}
</script>
</body></html>`;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8", "cache-control": "no-cache" } });
  }
}
