const express = require("express");
const bookController = require("../controllers/bank.controller");
const router = express.Router();

router
  .get("/", (req, res) => {
    bookController.getAllUsers(req, res);
  })
  .post("/", (req, res) => {
    bookController.addNewUser(req, res);
  })
  .put("/:id", (req, res) => {
    bookController.updateUser(req, res);
  })
  .delete("/:id", (req, res) => {
    bookController.deleteUser(req, res);
  });
module.exports = router;
