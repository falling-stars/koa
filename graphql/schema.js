const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql')
const {getJsonObject, getJsonString, getSingle} = require('./query')

const data = new GraphQLObjectType({
  name: 'data',
  fields: {
    name: {
      type: GraphQLString
    },
    tel: {
      type: GraphQLString
    },
    pwd: {
      type: GraphQLString
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: GraphQLString,
      resolve: async () => await getJsonString(`select * from user`)
    },
    data: {
      type: new GraphQLList(data),
      resolve: async () => await getJsonObject(`select * from user`)
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query
})