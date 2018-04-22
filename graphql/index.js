const {graphql} = require('graphql')
const schema = require('./schema')

const query = queryStr => {
  return new Promise((resolve, reject) => {
    graphql(schema, queryStr).then((response) => {
      resolve(response)
    })
  })
}

module.exports = query