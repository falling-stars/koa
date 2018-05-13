const https = require('https')
const {resolve} = require('path')
const fs = require('fs')
const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./router')
const app = new Koa()
const ssh = {
  key: fs.readFileSync(resolve(__dirname, './ssh/ssh.key')),
  cert: fs.readFileSync(resolve(__dirname, './ssh/ssh.pem'))
}

app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())
if (process.env.NODE_ENV === 'production') {
  https.createServer(ssh, app.callback()).listen(8888, () => console.log(`Web Run In https://localhost:8888`))
} else {
  app.listen(8888, () => console.log(`Web Run In http://localhost:8888`))
}
