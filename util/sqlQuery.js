const fs = require('fs')
const {resolve} = require('path')
const mysql = require('mysql')
const config = JSON.parse(fs.readFileSync(resolve(__dirname, '../DB.json')))
const connection = mysql.createConnection(config)
connection.connect()
const query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, function (err, result) {
      err && reject(err)
      if (/^select.+/i.test(sql)) {
        resolve(JSON.parse(JSON.stringify(result)))
      } else {
        result.affectedRows > 0 ? resolve(true) : resolve(false)
      }
    })
  })
}

module.exports = query