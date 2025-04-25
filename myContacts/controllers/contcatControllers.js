const asyneHandler = require("express-async-handler");

// Get all contacts
// GET /contcats

const getAllContcats = asyneHandler(async (req, res) => {
  res.send("Contcats Page");
});

// Create contcats
// POST /contcats
const createContcats = asyneHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body; // 구조분해 할당

  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }

  res.send("Create Concats");
});

// Get contcats
// GET /contcats/:id
const getContcats = asyneHandler(async (req, res) => {
  res.send(`View Concat for ID : ${req.params.id}`);
});

// Update contcats
// PUT /contcats/:id
const updateContcats = asyneHandler(async (req, res) => {
  res.send(`Update Concat for ID : ${req.params.id}`);
});

// Delete contcats
// DELETE /contcats/:id
const deleteContcats = asyneHandler(async (req, res) => {
  res.send(`Delete Concat for ID : ${req.params.id}`);
});

module.exports = {
  getAllContcats,
  createContcats,
  getContcats,
  updateContcats,
  deleteContcats,
};
