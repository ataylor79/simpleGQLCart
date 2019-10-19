# Simple Cart GraphQL API

[Working Demo](https://graphql-cart.herokuapp.com/graphql)


## Install & Build

```javascript
npm install
npm run build
```

## Run API

```javascript
npm start
```

## GraphQL playground link

```
http://localhost:3000/graphql/
```

Note: I have documented the queries and variables required for each piece of required functionality. (see [requests.MD](/requests.MD))


## Notes

- I haven't included the use of product IDs in this example but would assign a UUID to each product when properly stored in a database.
- I decided to utilise the apollo datasource module in this example to showcase how this can be used to provide a data layer, separated out from the resolvers. Allowing for easier testing.
- I have not included any tests but by structuring the application in this way it's simpler to tests individual layers, mocking out dependecies not within scope of the test.
- I decided to return the full basket on add/remove products, as I consider these an update to the basket state and believe it would be convient for the user to see the result of any update made.
- Confession: Although I have used typescript in this example, not all parameters are typed. I would normally be more strict on this but for complex types I have marked as `any`
