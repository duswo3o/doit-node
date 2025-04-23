const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("concats Page");
  })
  .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body; // 구조분해 할당

    if (!name || !email || !phone) {
      return res.send("필수 값이 입력되지 않았습니다.");
    }

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

module.exports = router;
