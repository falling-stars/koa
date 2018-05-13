const sqlQuery = require('../sql/sqlQuery')

const selectArgs = (tableName, queryFields, args) => {
  let sqlStr = `select ${queryFields} from ${tableName} where `
  for (let i in args) {
    sqlStr += `${i}='${args[i]}' and `
  }
  return sqlStr += '1=1'
}
const insertArgs = (tableName, args) => {
  let sqlStr = `insert into ${tableName} `
  const fields = []
  const values = []
  for (let i in args) {
    fields.push(i)
    values.push(args[i])
  }
  if (fields.length > 0) {
    sqlStr += `(`
    fields.forEach(i => {
      sqlStr += `${i},`
    })
    sqlStr = sqlStr.replace(/,$/, '')
    sqlStr += `) values (`
    values.forEach(i => {
      sqlStr += `'${i}',`
    })
    sqlStr = sqlStr.replace(/,$/, '')
    sqlStr += `)`
    return sqlStr
  }
}
const fetch = async sql => {
  const result = await sqlQuery(sql)
  return JSON.parse(JSON.stringify(result))
}
const operation = async sql => {
  const result = await sqlQuery(sql)
  return result['affectedRows'] > 0 ? 'success' : 'fail'
}

module.exports = {selectArgs, insertArgs, fetch, operation}