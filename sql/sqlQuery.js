const fs = require('fs')
const net = require('net')
const {resolve} = require('path')
const mysql = require('mysql')
const config = JSON.parse(fs.readFileSync(resolve(__dirname, './DB.json')))
module.exports = (sql) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config)
    connection.connect()
    connection.query(sql, function (err, result) {
      if (err) {
        reject(err)
        connection.end()
      } else {
        resolve(result)
        connection.end()
      }
    })
  })
}