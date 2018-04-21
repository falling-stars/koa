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

const httpsPort = process.env.NODE_ENV === 'production' ? 443 : 4433
const httpPort = process.env.NODE_ENV === 'production' ? 80 : 8080

https.createServer(ssh, app.callback()).listen(httpsPort, () => console.log(`Web Run In https://localhost:${httpsPort}`))

const redirect = new Koa()
const redirectURL = 'https://www.gracly.com'
redirect.use(async ctx => {
  ctx.status = 301
  ctx.set({'Location': redirectURL})
})
redirect.listen(httpPort, () => console.log(`端口：${httpPort}已重定向到：${redirectURL}`))