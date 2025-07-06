import { v4 as uuidv4 } from "uuid";

let items = [];

export const getItems = (req, res) => {
  res.send(items);
};

export const createItem = (req, res) => {
  // console.log(req.body);
  const item = req.body;
  const itemId = uuidv4();
  const itemWithId = { ...item, id: itemId };

  items.push(itemWithId);
  //  items.push
  res.send(`item with the name ${item.firstName} added to the database!`);
};

export const getItem = (req, res) => {
  const { id } = req.params;
  const foundItem = items.find((item) => item.id === id);
  res.send(foundItem);
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  // id to delete
  items = items.filter((item) => item.id !== id);
  res.send(`item with the id ${id} deleted from the database`);
};

export const updateItem = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const item = items.find((item) => item.id === id);

  if (firstName) {
    item.firstName = firstName;
  }
  if (lastName) {
    item.lastName = lastName;
  }
  if (age) {
    item.age = age;
  }

  res.send(`item with the id ${id} has been update`);
};
