# GraphQL.

GraphQL allow us to get data using just a single end-point.
When we try to request data using REST routes, we create several end-points to each objects, and besides, it give us information that we don't need.
GraphQL deliver only the data that we request.

## Software requirments.

* NodeJS.
* React.
* Git.
* Mongo DB.
* Atom.
* Emulate console CMDER.

## Project.

In this project you will be able to create authors and books, and retrieve this
data using GraphQL.

### Step 01. NodeJS installation.

1. Create a folder "server".
2. Type `npm init`.
3. Type `npm install express`.
4. Create a file app.js in **server** folder and add the code.
5. Type the command: `npm install nodemon -g`
6. Type the command: `nodemon app`

## Setting GraphQL.

1. Type the command: `npm install graphql express-graphql` in project root.
2. Type the command: `npm install -g lodash`.
3. Add the code to app.js file.
4. Create an schema folder and schema.js and add the code.
5. Run the server and find books by typing:

```
{
  book(id: "1"){
    id,
    name
  }
}
```
