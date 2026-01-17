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

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
