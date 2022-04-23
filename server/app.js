const express = require('express');
const gqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', gqlHTTP.graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () =>{
  console.log('Now listening in port 4000');
});
