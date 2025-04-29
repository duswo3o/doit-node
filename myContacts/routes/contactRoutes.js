const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
  addContactForm,
} = require("../controllers/contactControllers");

router.route("/").get(getAllContacts);
router.route("/add").get(addContactForm).post(createContacts);
router
  .route("/:id")
  .get(getContacts)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
