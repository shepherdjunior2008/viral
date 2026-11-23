export default {
 async fetch(req) {
  return new Response(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ViralBoost - Get Followers Fast</title><style>body{margin:0;font-family:system-ui;background:#0f0f0f;color:#fff;padding:15px}h1{text-align:center;background:linear-gradient(90deg,#ff0050,#00f2ea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:28px}.card{background:#1a1a1a;border:1px solid #333;border-radius:16px;padding:18px;max-width:500px;margin:15px auto}input,select,button{width:100%;padding:14px;margin:8px 0;border-radius:10px;border:none;font-size:16px;box-sizing:border-box}button{background:linear-gradient(90deg,#ff0050,#ff7a00);color:#fff;font-weight:800;cursor:pointer} .result{background:#222;border-radius:10px;padding:12px;margin-top:10px;white-space:pre-wrap;text-align:left;display:none}.badge{display:inline-block;background:#222;border:1px solid #444;padding:5px 10px;border-radius:20px;margin:3px;font-size:12px}.ad{border:1px dashed #555;padding:10px;text-align:center;color:#888;border-radius:10px;margin:15px auto;max-width:500px}</style></head><body>
<h1>🔥 VIRAL BOOST</h1><p style="text-align:center;color:#aaa">Get Real Followers & Likes - No Password Needed</p>
<div class="card">
<select id="plat"><option>TikTok</option><option>Instagram</option><option>YouTube</option></select>
<input id="user" placeholder="@your username e.g. @shepherd">
<input id="niche" placeholder="Your niche e.g. comedy, cooking, football">
<button onclick="boost()">🚀 BOOST MY ACCOUNT</button>
<div id="out" class="result"></div>
<button id="copy" style="display:none;background:#00f2ea;color:#000" onclick="copyRes()">Copy & Share</button>
</div>
<div class="ad">AD SPACE - Your AdSense will earn here</div>
<div class="card"><h3>How to get 1000 followers in 7 days:</h3><p style="color:#ccc;text-align:left;font-size:14px;line-height:1.6">1. Use our Viral Hashtags below<br>2. Post at 7PM - 9PM EAT daily<br>3. Use trending sounds<br>4. Reply to every comment in first 30 min<br>Result = Algorithm pushes you to FYP</p></div>
<script>
function boost(){
 let u=document.getElementById('user').value||'@you';
 let niche=document.getElementById('niche').value||'viral';
 let plat=document.getElementById('plat').value;
 let bio=\`🔥 \${niche} daily | 📍 Kisumu KE | 👇 Follow for part 2\`;
 let tags=\`#\${niche.replace(/ /g,'')} #\${plat.toLowerCase()}kenya #fyp #foryou #kenyantiktok #viral #254 #kisumu #nairobi #xyzbca #blowthisup #trending #eastafrica #foryoupage #explore\`;
 let caps=[\`POV: When \${niche} finally pays off 😭🙏 \${u}\`,\`Day 1 of posting \${niche} until I hit 100k followers\`,\`This \${niche} hack got me 10k views overnight 👇\`];
 let best="Best time to post: 7:30 PM, 12:30 PM, 8:00 AM (Nairobi Time)";
 document.getElementById('out').style.display='block';
 document.getElementById('out').innerText=\`✅ ANALYSIS FOR \${u} on \${plat}\\n\\n🔥 VIRAL BIO:\\n\${bio}\\n\\n📈 VIRAL CAPTIONS:\\n\${caps.join('\\n')}\\n\\n#️⃣ 30 VIRAL HASHTAGS:\\n\${tags}\\n\\n⏰ \${best}\\n\\n💡 TIP: Post 2x today using these. You will get 2x more followers than yesterday.\`;
 document.getElementById('copy').style.display='block';
}
function copyRes(){navigator.clipboard.writeText(document.getElementById('out').innerText);alert('Copied! Now paste on TikTok');}
</script></body></html>`, {headers:{"content-type":"text/html"}})
 }
}
