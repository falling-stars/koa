const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type User {
        name: String
        tel: String
        pwd: String
    }
    type Query {
        user: [User]
        name: String
    }
`)