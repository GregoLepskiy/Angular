const PROXY_CONFIG = [
  {
    context: [
      "/",
    ],
    target: "https://localhost:7205",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
