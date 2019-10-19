## Get Products list

```
query {
  products {
    name
    price
  }
}
```

## Get Basket

```
query {
  basket {
    products {
      name
      price
      quantity
      total
    }
    total
  }
}
```

### Add Product to basket

Query
```
mutation addProduct($product: ProductInput!){
  addProduct(product: $product) {
    products {
      name
      price
      quantity
      total
    }
    total
  }
}
```

Example query variables

```
{
  "product": {
    "name": "Sledgehammer",
    "price": 125.76
  }
}
```

### Remove Product from basket

Query 
```
mutation removeProduct($name: String!){
  removeProduct(name: $name) {
    products {
      name
      price
      quantity
      total
    }
    total
  }
}
```

Example Query Variables
```
{
  "name": "Sledgehammer"
}
```

### Clear Basket 

Query
```
mutation {
  clearBasket{
    products {
      name
      price
      quantity
      total
    }
    total
  }
}
```