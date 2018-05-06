const sqlQuery = require('../util/sqlQuery')

const getJsonString = async sql => JSON.stringify(await sqlQuery(sql))
const getJsonObject = async sql => await sqlQuery(sql)
const getSingle = async sql => {
  let data = await sqlQuery(sql)
  data = data[0]
  let result = null
  for (let i in data) {
    result = data[i]
  }
  return result
}

module.exports = {getJsonString, getSingle, getJsonObject}