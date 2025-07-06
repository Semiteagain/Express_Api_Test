import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

// Adding users to database
router.post("/", createUser);

// to get the user with id now, here we used GET

// to get the ID its store in req.params {id : 56789} /users/56879
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);
export default router;
