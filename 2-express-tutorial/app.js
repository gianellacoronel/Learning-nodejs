const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  // In some cases, we only want to send some attributes of the product
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// Route params
// http://localhost:5000/api/products/1
app.get("/api/products/:id", (req, res) => {
  console.log(req);
  console.log(req.params); // { id: '1' }

  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  console.log(singleProduct); // if a product does not exist, it will be undefined
  if (!singleProduct) {
    return res.status(400).send("Product not found");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params); //{ productId: '2', reviewId: 'rs' }
  return res.send("hi params");
});

// Query string
// http://localhost:5000/api/v1/query?search=a&limit=2
app.get("/api/v1/query", (req, res) => {
  console.log(req.query); // { search: 'a', limit: '2' }

  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
