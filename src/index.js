
export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VIRAL - Social Promotion</title>
<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b0b12;
  color: white;
}
header {
  text-align: center;
  padding: 30px 15px;
  background: linear-gradient(135deg,#7c3aed,#ec4899);
}
header h1 { margin: 0; font-size: 36px; }
header p { margin-bottom: 0; }
.container {
  max-width: 500px;
  margin: 25px auto;
  padding: 20px;
}
.card {
  background: #171722;
  padding: 22px;
  border-radius: 16px;
  border: 1px solid #303040;
}
label {
  display: block;
  margin-top: 15px;
  margin-bottom: 8px;
  font-weight: bold;
}
input, select, textarea {
  width: 100%;
  padding: 13px;
  border-radius: 9px;
  border: 1px solid #373747;
  background: #222230;
  color: white;
}
button {
  width: 100%;
  padding: 14px;
  margin-top: 18px;
  border: none;
  border-radius: 10px;
  background: #a855f7;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.whatsapp {
  display: block;
  text-align: center;
  padding: 14px;
  margin-top: 15px;
  background: #16a34a;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}
.summary {
  margin-top: 20px;
  padding: 15px;
  background: #222230;
  border-radius: 10px;
}
footer {
  text-align: center;
  padding: 25px;
  color: #999;
}
</style>
</head>
<body>

<header>
  <h1>🔥 VIRAL</h1>
  <p>Promote your content. Grow your reach.</p>
</header>

<div class="container">
  <div class="card">
    <h2>Promotion Request</h2>
    <p>Submit your social media content for a promotional campaign.</p>

    <label>Platform</label>
    <select id="platform">
      <option>TikTok</option>
      <option>Facebook</option>
      <option>Instagram</option>
    </select>

    <label>Post URL</label>
    <input id="post" type="url" placeholder="Paste your post link here">

    <label>Promotion Package</label>
    <select id="package">
      <option value="Basic Promotion">Basic Promotion</option>
      <option value="Standard Promotion">Standard Promotion</option>
      <option value="Premium Promotion">Premium Promotion</option>
    </select>

    <label>Campaign Goal</label>
    <select id="goal">
      <option>Reach more people</option>
      <option>Advertise my business</option>
      <option>Promote my content</option>
      <option>Increase brand awareness</option>
    </select>

    <label>Additional information</label>
    <textarea id="details" placeholder="Describe what you want promoted"></textarea>

    <div class="summary">
      <strong>Order Summary</strong>
      <p id="summary">Platform: TikTok</p>
    </div>

    <button onclick="submitOrder()">Submit Promotion Request</button>

    <a class="whatsapp"
       href="https://wa.me/254746885823"
       target="_blank">
       Contact us on WhatsApp
    </a>
  </div>
</div>

<footer>VIRAL &copy; 2026 — Social Promotion</footer>

<script>
function submitOrder() {
  const platform = document.getElementById("platform").value;
  const post = document.getElementById("post").value;
  const pack = document.getElementById("package").value;
  const goal = document.getElementById("goal").value;
  const details = document.getElementById("details").value;

  if (!post) {
    alert("Please enter your social media post link.");
    return;
  }

  const message =
    "Hello VIRAL! I would like to request a promotion.\\n\\n" +
    "Platform: " + platform + "\\n" +
    "Post: " + post + "\\n" +
    "Package: " + pack + "\\n" +
    "Goal: " + goal + "\\n" +
    "Details: " + details;

  const whatsapp =
    "https://wa.me/254746885823?text=" +
    encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}

document.getElementById("platform").onchange = function() {
  document.getElementById("summary").textContent =
    "Platform: " + this.value;
};
</script>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
