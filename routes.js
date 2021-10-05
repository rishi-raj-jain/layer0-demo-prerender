// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require("@layer0/core/router");
const { nextRoutes } = require("@layer0/next");

function generate(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let prerenderPages = [];
for (var i = 0; i < 25000; i++) {
  prerenderPages.push(`/${generate(10)}`);
}

module.exports = new Router()
  .prerender(prerenderPages.map((page) => ({ path: page })))
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .use(nextRoutes);
