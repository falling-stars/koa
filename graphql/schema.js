const {GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLUnionType} = require('graphql')
const {selectArgs, insertArgs, fetch, operation} = require('./data')

const user = new GraphQLList(new GraphQLObjectType({
  name: 'user',
  fields: {
    email: {type: GraphQLString},
    name: {type: GraphQLString},
    password: {type: GraphQLString},
    image: {type: GraphQLString}
  }
}))

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    getUser: {
      type: user,
      args: {
        email: {type: GraphQLString},
        name: {type: GraphQLString},
        password: {type: GraphQLString},
        image: {type: GraphQLString}
      },
      resolve: async (_, args) => await fetch(selectArgs('user', '*', args))
    },
    registerUser: {
      type: GraphQLString,
      args: {
        email: {type: GraphQLString},
        name: {type: GraphQLString},
        password: {type: GraphQLString},
        image: {type: GraphQLString}
      },
      resolve: async (_, args) => await operation(insertArgs('user', args))
    }
  }
})

module.exports = new GraphQLSchema({
  query: Root
})
