const asyneHandler = require("express-async-handler");

// Get all contacts
// GET /contacts

const getAllContacts = asyneHandler(async (req, res) => {
  res.send("Contacts Page");
});

// Create contacts
// POST /contacts
const createContacts = asyneHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body; // 구조분해 할당

  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }

  res.send("Create Contacts");
});

// Get contacts
// GET /contacts/:id
const getContacts = asyneHandler(async (req, res) => {
  res.send(`View Contact for ID : ${req.params.id}`);
});

// Update contacts
// PUT /contacts/:id
const updateContacts = asyneHandler(async (req, res) => {
  res.send(`Update Contact for ID : ${req.params.id}`);
});

// Delete contacts
// DELETE /contacts/:id
const deleteContacts = asyneHandler(async (req, res) => {
  res.send(`Delete Contact for ID : ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
};
