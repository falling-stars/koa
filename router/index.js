const fs = require('fs')
const {resolve} = require('path')
const Router = require('koa-router')
const router = new Router()
const graphQL = require('../graphql')

router.all('*', async ctx => {
  ctx.type = 'text/plain; charset=utf-8'
  let query = ''
  if (ctx.method === 'GET') {
    query = ctx.query.query
  }
  if (ctx.method === 'POST') {
    query = ctx.request.body.query ? ctx.request.body.query : ''
  }
  ctx.body = await graphQL(query)
})
module.exports = router