const express = require("express");
const router = express.Router();

const {
  getAllContcats,
  createContcats,
  getContcats,
  updateContcats,
  deleteContcats,
} = require("../controllers/contcatControllers");

router.route("/").get(getAllContcats).post(createContcats);

router
  .route("/:id")
  .get(getContcats)
  .put(updateContcats)
  .delete(deleteContcats);

module.exports = router;
