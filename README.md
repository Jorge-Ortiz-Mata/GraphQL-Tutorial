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

## Step 02. Setting GraphQL.

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

## Step 03. GraphQL Type ID and Authors.

1. We can look up for objects by using its ID: `GraphQLID`.
2. Repeat the same process creating an Author Objcet.
3. To declare an integer in GraphQL, we define: `GraphQLInt`.

```
{
  book(id: "1"){
    id,
    name
  }
}
```

## Step 04. Associtations belongs-to author.

This section applies for the Book object.

1. Add a new column to each book and asign them the author id.
2. Add the code in BookType function.

```
{
  book(id: 1){
    id,
    name
    author{
      name
    }
  }
}
```

## Step 05. Associtations has-many books.

This section applies to Author object.

1. We define a list object for the author: `GraphQLList`.
2. We add the method within author function.

```
{
  author(id: 2){
    name,
    books{
      id,
      name
    }
  }
}
```

## Step 06. Get all books and authors.

1. Add the methods into the RootQuery function.

```

{
  authors{
    name
  }
}

```
