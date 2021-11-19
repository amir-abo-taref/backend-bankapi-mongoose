const express = require("express");
const userController = require("../controllers/bank.controller");
const router = express.Router();

router
  .get("/", (req, res) => {
    userController.getAllUsers(req, res);
  })
  .post("/", (req, res) => {
    userController.addNewUser(req, res);
  })
  .put("/:id", (req, res) => {
    userController.updateUser(req, res);
  })
  .delete("/:id", (req, res) => {
    userController.deleteUser(req, res);
  });
module.exports = router;
