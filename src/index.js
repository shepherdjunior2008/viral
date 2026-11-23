<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Social Boost Services</title>

<style>
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
body {
  margin: 0;
  background: #10121b;
  color: white;
}
header {
  text-align: center;
  padding: 25px;
  background: #191c2b;
}
header h1 { color: #00e5ff; }
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.card {
  background: #202436;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 15px;
}
select, input, button {
  width: 100%;
  padding: 13px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
}
button {
  background: #00c853;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.pay {
  background: #087f5b;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}
.whatsapp {
  display: block;
  text-decoration: none;
  text-align: center;
  background: #25d366;
  padding: 15px;
  color: white;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: bold;
}
footer {
  text-align: center;
  padding: 20px;
  color: #aaa;
}
</style>
</head>

<body>

<header>
  <h1>Social Boost Services</h1>
  <p>Social Media Promotion & Growth Services</p>
</header>

<div class="container">

  <div class="card">
    <h2>Choose Your Service</h2>

    <select id="platform">
      <option value="TikTok">TikTok</option>
      <option value="Facebook">Facebook</option>
      <option value="YouTube">YouTube</option>
      <option value="WhatsApp">WhatsApp</option>
    </select>

    <select id="service">
      <option>Content Promotion</option>
      <option>Page Promotion</option>
      <option>Channel Promotion</option>
      <option>Audience Growth Consultation</option>
    </select>

    <input type="number" id="amount"
           placeholder="Enter your budget (KES)"
           min="1">

    <button onclick="makeOrder()">Continue to Order</button>
  </div>

  <div class="pay">
    <h2>M-Pesa Payment</h2>
    <p>Pay to this number:</p>
    <h1>0746885823</h1>
    <p>Confirm your payment through M-Pesa before contacting us.</p>
  </div>

  <a class="whatsapp"
     href="https://wa.me/254746885823"
     target="_blank">
     Contact Us on WhatsApp
  </a>

</div>

<footer>
  &copy; 2026 Social Boost Services
</footer>

<script>
function makeOrder() {
  const platform = document.getElementById("platform").value;
  const service = document.getElementById("service").value;
  const amount = document.getElementById("amount").value;

  if (!amount || amount <= 0) {
    alert("Please enter your budget.");
    return;
  }

  const message =
    `Hello, I would like to order a service.%0A` +
    `Platform: ${platform}%0A` +
    `Service: ${service}%0A` +
    `Budget: KES ${amount}%0A` +
    `Payment number: 0746885823`;

  window.open(
    "https://wa.me/254746885823?text=" + message,
    "_blank"
  );
}
</script>

</body>
</html>
