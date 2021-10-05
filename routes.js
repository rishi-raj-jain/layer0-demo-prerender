require('dotenv').config()

const { generate } = require('./randomStringGenerator')
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

let prerenderPages = []
let prerenderUrlCount= process.env.ENTERPRISE === 'true' ? 25000 : 100
for (var i = 0; i < prerenderUrlCount; i++) {
  prerenderPages.push(`/${generate(10)}`)
}

module.exports = new Router()
  .prerender(prerenderPages.map((page) => ({ path: page })))
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .use(nextRoutes)
