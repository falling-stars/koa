const https = require('https')
const {resolve} = require('path')
const fs = require('fs')
const Koa = require('koa')
const server = require('koa-static')
const router = require('./router')
const app = new Koa()
const ssh = {
  key: fs.readFileSync(resolve(__dirname, './ssh/ssh.key')),
  cert: fs.readFileSync(resolve(__dirname, './ssh/ssh.pem'))
}

app.use(server(resolve(__dirname, './static'), {index: 'default', maxage: 1000 * 60 * 60 * 3, immutable: true}))
app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = 'last'
})

https.createServer(ssh, app.callback()).listen(8888, () => console.log(`Web Run In https://localhost:8888`))