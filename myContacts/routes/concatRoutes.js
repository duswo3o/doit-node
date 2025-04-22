const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("concats Page");
  })
  .post((req, res) => {
    res.send("Create Concats");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`View Concat for ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Concat for ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Concat for ID : ${req.params.id}`);
  });

module.exports = router