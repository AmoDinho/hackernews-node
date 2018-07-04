# hackernews-node
GraphQL tut for Node.

## To-Do

 - [ ] Create step by step instructions on how make a GraphQL server from scratch



 ### Queries

 ```
# Try to write your query here
mutation {
  signup(
    name: "Alice"
    email: "alice@graph.cool"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}
 ```

  ```
mutation {
  post(
    url: "www.graphql-europe.org"
    description: "Europe's biggest GraphQL conference"
  ) {
    id
  }
}
 ```


  ```
mutation {
  login(
    email: "alice@graph.cool"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
 ```

  ```
mutation{
  post(url:"www.graphqlweekly.com"
  description:"Weekly booges"
  ){
    id
  }
}
 ```

  ```
mutation {
  vote(linkId: "cjiroqcbvszea0a272gbbvka6") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}
 ```

  ```
query{
  feed(filter: "Prisma"){
    id
    description
    url
  }
}
 ```
```
query{
  feed(
    first:1
    skip:1
  ){
    id
    description
    url
  }
}
```


```
query{
  feed(orderBy: createdAt_ASC){
    id
    description
    url
  }
}
```


```
query{
  feed{
    count 
    links {
      id
      description
      url
    }
  }
}
```

