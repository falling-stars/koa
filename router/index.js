const fs = require('fs')
const Index = require('koa-router')
const router = new Index()

router.get('*', async (ctx, next) => {
  ctx.type = 'html'
  if (ctx.url === '/') {
    ctx.body = 213
  } else {
    next()
  }

  // if (html) {
  //   ctx.body = html
  // } else {
  //   await next()
  // }
})
module.exports = router