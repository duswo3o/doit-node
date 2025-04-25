const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactControllers");

router.route("/").get(getAllContacts).post(createContacts);

router
  .route("/:id")
  .get(getContacts)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
