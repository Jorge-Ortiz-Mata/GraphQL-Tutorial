const express = require('express');
const gqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

// The username and the password are declared when the database is created.
mongoose.connect('mongodb+srv://jorge123:jorge.123@graphql-course.c42zz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to the database successfully!');
})

app.use('/graphql', gqlHTTP.graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () =>{
  console.log('Now listening in port 4000');
});
