const {graphql} = require('graphql')
const schema = require('./schema')
const data = require('./data')

const query = queryStr => {
  return new Promise(resolve => {
    graphql(schema, queryStr, data).then((response) => {
      if (response['errors']) {
        response = {code: 0, msg: response['errors']}
      } else {
        response.code = 1
      }
      resolve(response)
    })
  })
}

module.exports = query