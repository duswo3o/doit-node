const asyneHandler = require("express-async-handler");

// Get all contacts
// GET /contcats

const getaAllContcats = asyneHandler(async (req, res) => {
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

module.exports = { getaAllContcats, createContcats };
