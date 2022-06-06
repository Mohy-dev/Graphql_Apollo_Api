# **GraphQL API**

<p align="center">
    <img src="https://venturebeat.com/wp-content/uploads/2019/06/4f44eef2-5673-43e5-808c-0e215a3855c9.png?fit=1800%2C1120&strip=all" alt="GO" />
</p>

---

## How To Use ⬇️

First run `npm install` then use the command below to launch the server in the terminal

```bash
nodemon index
```

Open the url that the server runs on with the browser to interact with the Apollo GUI, and you're ready to go, have fun with the queries 🚀


```graphql
query Query($categoryId: ID!) {
  category(id: $categoryId) {
    name
    products(filter: { onSale: true }) {
      quantity
      description
      price
      onSale
      reviews {
        title
        comment
        rating
        date
      }
    }
  }
}
```
---
