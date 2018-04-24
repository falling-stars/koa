const fs = require('fs')
const Router = require('koa-router')
const router = new Router()
const graphQL = require('../graphql')

router.get('/api', async (ctx, next) => {
  ctx.type = 'html'
  const query = ctx.query
  ctx.body = await graphQL(query.name)
})
module.exports = router