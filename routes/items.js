import express from "express";

import {
  getItems,
  createItem,
  getItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";

const router = express.Router();

// all routes in here are starting with /Items
router.get("/", getItems);

// Adding Items to database
router.post("/", createItem);

// to get the Item with id now, here we used GET

// to get the ID its store in req.params {id : 56789} /Items/56879
router.get("/:id", getItem);

router.delete("/:id", deleteItem);

router.patch("/:id", updateItem);
export default router;
