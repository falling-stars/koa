const fs = require('fs')
const {resolve} = require('path')
const mysql = require('mysql')
const config = JSON.parse(fs.readFileSync(resolve(__dirname, './DB.json')))
let connection = mysql.createConnection(config)
connection.connect()
connection.on('error', error => {
  if (error.code === 'PROTOCOL_CONNECTION_LOST') {
    connection = mysql.createConnection(config)
  } else {
    throw error
  }
})
module.exports = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}