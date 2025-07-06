import express from "express";
import bodyParser from "body-parser";

// import item
import itemsRoutes from "./routes/items.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Here we make use of the item Routes with items as path

app.use("/items", itemsRoutes);

app.get("/", (req, res) => {
  console.log("TEST!");

  res.send("Hello from Homepage");
});

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
// we are going to make 5 different route GET, POST,
// Find a specific item by ID, Delete item by ID and
// Update item details by ID
// We need to setup a folder call route
// This file is only for the setup of the server
