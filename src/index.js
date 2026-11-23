export default {
  async fetch() {
    return new Response(`
      <html>
        <body style="font-family:sans-serif; text-align:center; padding-top:50px">
          <h1>Viral is LIVE 🚀</h1>
          <p>Your Cloudflare Worker works!</p>
        </body>
      </html>
    `, { headers: { "content-type": "text/html" } });
  }
}
