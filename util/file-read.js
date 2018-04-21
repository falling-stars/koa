const fs = require('fs')
const path = require('path')

const read = (filePath, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, `../static/${filePath}`), (error, data) => {
      error ? reject(error) : encoding === 'buffer' ? resolve(data) : resolve(data.toString(encoding))
    })
  })
}
module.exports = read