const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

// Get aall the packages from grapghql.
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
 } = graphql;

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
        // return _.find(authors, { id: parent.author_id });
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
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        // return _.filter(books, {author_id: parent.id})
      }
    }
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
        // return _.find(books, { id: args.id });
      }
    },

    // By book with the ID.
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // return _.find(authors, { id: args.id });
      }
    },

    // Get all the books
    books:{
      type: new GraphQLList(BookType),
      resolve(parent, args){
        // return books
      }
    },

    // Get all the authors
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
        // return authors
      }
    }
  }
});

// We're exporting the schema.
module.exports = new GraphQLSchema({
  query: RootQuery
});
