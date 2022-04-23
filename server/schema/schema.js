const graphql = require('graphql');
const _ = require('lodash');

// Get aall the packages from grapghql.
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
 } = graphql;

// Faker data to show the functionality.
var books = [
  { name: 'Name of the Wind.', genre: "Fantasy", id: '1', author_id: '2' },
  { name: 'Harry Potter.', genre: "Fantasy", id: '2', author_id: '1' },
  { name: 'The Outliers.', genre: "Entrepreneurship.", id: '3', author_id: '2' },
];

var authors = [
  { name: 'Malcolm Gladwell.', age: 24, id: '1' },
  { name: 'JK Rowling.', age: 26, id: '2' },
  { name: 'The Outliers.', age: 26, id: '3' },
];

// Function that creates the Book table and its fields.
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args){
        return _.find(authors, { id: parent.author_id });
      }
    }
  })
});

// Function that creates the Author table and its fields.
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// This query defines how we jump into the database
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // By book with the ID.
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        return _.find(books, { id: args.id });
      }
    },

    // By book with the ID.
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        return _.find(authors, { id: args.id });
      }
    }
  }
});

// We're exporting the schema.
module.exports = new GraphQLSchema({
  query: RootQuery
});
