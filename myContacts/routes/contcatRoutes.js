const express = require("express");
const router = express.Router();

const {
  getaAllContcats,
  createContcats,
} = require("../controllers/contcatControllers");

router.route("/").get(getaAllContcats).post(createContcats);

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
