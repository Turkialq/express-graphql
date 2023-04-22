const graphql = require("graphql");
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;
const _ = require("loadash");

const users = [
    {id:1, firstName:"Turki", age:23},
    {id:2, firstName:"khalid", age:33}
];

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: userType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
})

const userType = new GraphQLObjectType({
    name: "User",
    fields:{
        id: {type: GraphQLString } ,
        firstName: {type: GraphQLString } ,
        age: {type: GraphQLInt},
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});