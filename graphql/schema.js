const {GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLUnionType} = require('graphql')
const {getJsonObject, getJsonString, getSingle} = require('./query')

const processArgs = (args) => {
  let sqlStr = 'where '
  for (let i in args) {
    sqlStr += `${i}='${args[i]}' and `
  }
  return sqlStr += '1=1'
}

const users = new GraphQLList(new GraphQLObjectType({
  name: 'users',
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
}))

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    user: {
      type: GraphQLString,
      resolve: async () => await getJsonString(`select * from user where tel='15877926440'`)
    },
    users: {
      type: users,
      args: {
        tel: {type: GraphQLString},
        name: {type: GraphQLString}
      },
      resolve: async (_, args) => await getJsonObject(`select * from user ${processArgs(args)}`)
    },
    sing: {
      type: GraphQLString,
      resolve: async () => await getJsonObject(`select * from user`)
    }
  }
})

module.exports = new GraphQLSchema({
  query: Root
})
