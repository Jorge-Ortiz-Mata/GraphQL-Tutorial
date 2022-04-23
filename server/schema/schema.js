const graphql = require('graphql');
const _ = require('lodash');

// Get aall the packages from grapghql.
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
  { name: 'Name of the Wind.', genre: "Fantasy", id: '1' },
  { name: 'Harry Potter.', genre: "Fantasy", id: '2' },
  { name: 'The Outliers.', genre: "Entrepreneurship.", id: '3' },
];

// Function that creates the Book table and its fields.
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// This query defines how we jump into the database
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // By book with the ID.
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent,args){
        return _.find(books, { id: args.id });
      }
    }
  }
});

// We're exporting the schema.
module.exports = new GraphQLSchema({
  query: RootQuery
});
