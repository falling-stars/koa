const sqlQuery = require('../../util/sqlQuery')

const getObject = async sql => await sqlQuery(sql)
const getSingle = async sql => {
  let data = await sqlQuery(sql)
  data = data[0]
  let result = null
  for (i in data) {
    result = data[i]
  }
  return result
}

module.exports = {getObject, getSingle}