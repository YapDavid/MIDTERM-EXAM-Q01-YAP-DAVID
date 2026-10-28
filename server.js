const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const DATA_FILE = path.join(__dirname, "data.json");

// read all products
function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

// write all products
function writeData(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

// stock status based on quantity
function getStatus(stock) {
  if (stock === 0) return "OUT OF STOCK";
  if (stock >= 1 && stock <= 5) return "LOW STOCK";
  return "AVAILABLE";
}

function addStatus(product) {
  return { ...product, stock_status: getStatus(product.stock) };
}

// GET all products
app.get("/api/products", (req, res) => {
  const products = readData().map(addStatus);
  res.status(200).json(products);
});

// GET one product by id
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = readData().find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(addStatus(product));
});

// POST new product
app.post("/api/products", (req, res) => {
  const { product_name, category, price, stock } = req.body;

  if (!product_name || !category || typeof price !== "number" || typeof stock !== "number") {
    return res.status(400).json({ error: "product_name, category, price and stock are required" });
  }

  // stock cannot be negative
  if (stock < 0) {
    return res.status(400).json({ error: "Stock cannot be negative" });
  }

  const products = readData();
  const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id, product_name, category, price, stock };

  products.push(newProduct);
  writeData(products);

  res.status(201).json(addStatus(newProduct));
});

// DELETE product by id
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const products = readData();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deleted = products.splice(index, 1)[0];
  writeData(products);

  res.status(200).json({ message: "Product deleted", product: addStatus(deleted) });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});