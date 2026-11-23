
export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VIRAL | Digital Growth</title>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #0b0b12;
  color: white;
}

header {
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #252535;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: #a78bfa;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 15px;
  font-size: 14px;
}

.hero {
  text-align: center;
  padding: 75px 20px;
  background: radial-gradient(circle at top, #30205b, #0b0b12 70%);
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

.hero h1 span {
  color: #a78bfa;
}

.hero p {
  color: #c5c5d2;
  max-width: 550px;
  margin: auto;
  line-height: 1.7;
}

.btn {
  display: inline-block;
  padding: 13px 22px;
  margin-top: 25px;
  background: #8b5cf6;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
}

section {
  padding: 45px 20px;
  max-width: 1100px;
  margin: auto;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
}

.section-title p {
  color: #aaaabd;
  margin-top: 10px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.card {
  background: #171722;
  border: 1px solid #2a2a3a;
  border-radius: 15px;
  padding: 23px;
}

.card h3 {
  margin: 12px 0;
}

.card p {
  color: #b5b5c4;
  line-height: 1.6;
  font-size: 14px;
}

.icon {
  font-size: 30px;
}

.price {
  color: #a78bfa;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
}

.payment {
  background: #171722;
  border: 1px solid #39304e;
  border-radius: 16px;
  padding: 28px;
  text-align: center;
}

.payment h2 {
  color: #a78bfa;
  margin-bottom: 15px;
}

.number {
  font-size: 26px;
  font-weight: bold;
  margin: 18px 0;
  letter-spacing: 1px;
}

.payment p {
  color: #c0c0ce;
  line-height: 1.8;
}

footer {
  text-align: center;
  padding: 30px 15px;
  border-top: 1px solid #252535;
  color: #888899;
}

footer a {
  color: #a78bfa;
  text-decoration: none;
}

@media (max-width: 600px) {
  header {
    padding: 18px 14px;
  }
  nav a {
    margin-left: 8px;
    font-size: 12px;
  }
  .hero h1 {
    font-size: 32px;
  }
  .number {
    font-size: 22px;
  }
}
</style>
</head>

<body>

<header>
  <div class="logo">VIRAL.</div>
  <nav>
    <a href="#services">Services</a>
    <a href="#payment">Payment</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<div class="hero">
  <h1>Grow Your <span>Digital Presence</span></h1>
  <p>
    Creative digital services to help individuals, creators
    and businesses build their online presence.
  </p>
  <a href="#services" class="btn">Explore Services</a>
</div>

<section id="services">
  <div class="section-title">
    <h2>Our Services</h2>
    <p>Explore what VIRAL can do for you.</p>
  </div>

  <div class="cards">
    <div class="card">
      <div class="icon">🎬</div>
      <h3>Video Editing</h3>
      <p>Creative video editing for Reels, TikTok, Shorts and other social platforms.</p>
      <div class="price">From KSh 300</div>
    </div>

    <div class="card">
      <div class="icon">📱</div>
      <h3>Social Media Strategy</h3>
      <p>Content ideas, posting plans and tips to help improve your social media presence.</p>
      <div class="price">From KSh 200</div>
    </div>

    <div class="card">
      <div class="icon">📢</div>
      <h3>Content Promotion</h3>
      <p>Campaign planning and promotional ideas to help your content reach its intended audience.</p>
      <div class="price">From KSh 300</div>
    </div>

    <div class="card">
      <div class="icon">🎨</div>
      <h3>Poster & Design</h3>
      <p>Digital posters, event graphics, promotional banners and social media designs.</p>
      <div class="price">From KSh 200</div>
    </div>
  </div>
</section>

<section id="payment">
  <div class="payment">
    <h2>Payment Instructions</h2>
    <p>Contact us to confirm the service and price before making payment.</p>
    <div class="number">0746 885 823</div>
    <p>Payment via M-Pesa to the number above.</p>
    <p>After paying, keep your transaction confirmation and contact us for assistance.</p>
    <a class="btn"
       href="https://wa.me/254746885823?text=Hello%20VIRAL%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.">
       Contact on WhatsApp
    </a>
  </div>
</section>

<section id="contact">
  <div class="section-title">
    <h2>Need Help?</h2>
    <p>Have a question or need a custom service? Reach out to us.</p>
    <a class="btn"
       href="https://wa.me/254746885823?text=Hello%20VIRAL">
       Chat with Us
    </a>
  </div>
</section>

<footer>
  <p>© 2026 VIRAL Digital Services</p>
  <p>Built for digital creativity and growth.</p>
</footer>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
