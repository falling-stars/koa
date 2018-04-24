const {getObject, getSingle} = require('./source')
let a = 0
setInterval(() => a++)

module.exports = {
  user: getObject(`select * from user`),
  name: a
}