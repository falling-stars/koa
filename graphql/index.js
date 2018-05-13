const {graphql} = require('graphql')
const schema = require('./schema')

module.exports = queryStr => {
  return new Promise(resolve => {
    graphql(schema, queryStr).then((response) => {
      if (response['errors']) {
        response = {code: 0, msg: response['errors']}
      } else {
        response.code = 1
      }
      resolve(response)
    })
  })
}