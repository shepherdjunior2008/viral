export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Viral Hub</title>
<style>
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#0b0b12;
  color:white
}
header{
  padding:22px;
  text-align:center;
  background:#151522;
  border-bottom:1px solid #28283a
}
header h1{color:#a78bfa;margin:0}
header p{color:#ccc}
.hero{
  text-align:center;
  padding:40px 20px
}
.hero h2{font-size:30px}
.hero p{color:#c6c6d2}
.container{
  max-width:900px;
  margin:auto;
  padding:20px
}
.card{
  background:#171725;
  border:1px solid #303044;
  border-radius:14px;
  padding:20px;
  margin-bottom:16px
}
.card h3{color:#c4b5fd}
.price{font-size:22px;color:#a78bfa;font-weight:bold}
button{
  border:0;
  background:#7c3aed;
  color:white;
  padding:13px;
  border-radius:9px;
  cursor:pointer;
  width:100%;
  font-weight:bold
}
button:hover{background:#6d28d9}
input,select,textarea{
  width:100%;
  padding:13px;
  margin:8px 0 15px;
  border-radius:8px;
  border:1px solid #343447;
  background:#10101a;
  color:white
}
label{font-size:14px;color:#ddd}
a{color:#c4b5fd}
.contact{
  background:#10271d;
  border:1px solid #245c3d
}
footer{
  text-align:center;
  color:#aaa;
  padding:25px
}
</style>
</head>
<body>

<header>
<h1>VIRAL HUB</h1>
<p>Digital promotion & creative services</p>
</header>

<section class="hero">
<h2>Grow Your Brand Online</h2>
<p>Promote your business, content and brand with creative digital services.</p>
</section>

<div class="container">

<h2>Our Services</h2>

<div class="card">
<h3>Social Media Content Creation</h3>
<p>Creative captions, post ideas and content planning for your page.</p>
<p class="price">Price: Contact us</p>
</div>

<div class="card">
<h3>Poster & Graphic Design</h3>
<p>Promotional posters, event graphics and business advertisements.</p>
<p class="price">Price: Contact us</p>
</div>

<div class="card">
<h3>Video Editing</h3>
<p>Short-form video editing for promotional content and social media.</p>
<p class="price">Price: Contact us</p>
</div>

<div class="card">
<h3>Business & Page Promotion</h3>
<p>Campaign planning and promotion to help your business reach real audiences.</p>
<p class="price">Price: Contact us</p>
</div>

<div class="card">
<h2>Place an Order</h2>

<form id="orderForm">
<label>Your Name</label>
<input id="customerName" placeholder="Enter your name" required>

<label>Select Service</label>
<select id="service" required>
<option value="">Choose a service</option>
<option>Social Media Content Creation</option>
<option>Poster & Graphic Design</option>
<option>Video Editing</option>
<option>Business & Page Promotion</option>
</select>

<label>Describe what you need</label>
<textarea id="details" rows="4" placeholder="Describe your order..." required></textarea>

<button type="submit">Send Order via WhatsApp</button>
</form>
</div>

<div class="card contact">
<h2>Payment Information</h2>
<p>M-Pesa Number:</p>
<h3>0746885823</h3>
<p>Confirm payment instructions with us before sending money.
Keep your M-Pesa confirmation message as proof of payment.</p>
</div>

<div class="card">
<h2>Contact Us</h2>
<p>Need assistance or want to make an enquiry?</p>
<a href="https://wa.me/254746885823" target="_blank">
<button type="button">Chat with us on WhatsApp</button>
</a>
</div>

</div>

<footer>
<p>Viral Hub © 2026</p>
<p>Digital creative & promotional services</p>
</footer>

<script>
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  const message =
    "Hello Viral Hub! I would like to place an order.%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Service: " + encodeURIComponent(service) + "%0A" +
    "Details: " + encodeURIComponent(details);

  window.open("https://wa.me/254746885823?text=" + message, "_blank");
});
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