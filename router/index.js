const fs = require('fs')
const {resolve} = require('path')
const Router = require('koa-router')
const router = new Router()
const graphQL = require('../graphql')

router.all('/api', async (ctx, next) => {
  const query = ctx.query
  const postQuery = ctx.request.body
  ctx.body = await graphQL(query.query)
})
router.get('/demo', async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = fs.readFileSync(resolve(__dirname, '../demo.html'))
})
module.exports = router