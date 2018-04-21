const fs = require('fs')
const Router = require('koa-router')
const router = new Router()

router.get('*', async (ctx, next) => {
  ctx.type = 'html'
  // if (html) {
  //   ctx.body = html
  // } else {
  //   await next()
  // }
})
module.exports = router