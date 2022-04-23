const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book'); // Importing Book model.
const Author = require('../models/author'); // Importing Author model.

// Get aall the packages from grapghql.
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
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
        return Author.findById(parent.author_id); // Retrun the Author ID.
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
        return Book.find({ author_id: parent.id }); // Return all the books (collection).
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
        return Book.findById(args.id);
      }
    },

    // By book with the ID.
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // return _.find(authors, { id: args.id });
        return Author.findById(args.id);
      }
    },

    // Get all the books
    books:{
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return Book.find({}); // Return all the books.
        // return books
      }
    },

    // Get all the authors
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
        return Author.find({}); // Return all the authors.
        // return authors
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    add_author: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull (GraphQLString) },
        age: { type: new GraphQLNonNull (GraphQLInt) }
      },
      resolve(parent, args){
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save()
      }
    },

    add_book: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type:new GraphQLNonNull (GraphQLString) },
        author_id: { type:new GraphQLNonNull (GraphQLString) }
      },
      resolve(parent, args){
        let book = new Book({
          name: args.name,
          genre: args.genre,
          author_id: args.author_id
        });
        return book.save()
      }
    }

  }
});

// We're exporting the schema.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
