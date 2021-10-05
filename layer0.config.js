require('dotenv').config()

module.exports = {
  connector: '@layer0/next',
  prerenderConcurrency: process.env.ENTERPRISE === 'true' ? 200 : 10,
}
