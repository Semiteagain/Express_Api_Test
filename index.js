import express from "express";
import bodyParser from "body-parser";

// import user
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Here we make use of the user Routes with users as path

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("TEST!");

  res.send("Hello from Homepage");
});

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
// we are going to make 5 different route GET, POST,
// Find a specific User by ID, Delete user by ID and
// Update user details by ID
// We need to setup a folder call route
// This file is only for the setup of the server
