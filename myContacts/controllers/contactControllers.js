const asyneHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// GET /contacts
const getAllContacts = asyneHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.render("index", { contacts: contacts });
});

// View add Contact form
// GET /contacts/add
const addContactForm = (req, res) => {
  res.render("add");
};

// Create contacts
// POST /contacts/add
const createContacts = asyneHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body; // 구조분해 할당

  if (!name || !email || !phone) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.send("Create Contacts");
});

// Get contacts
// GET /contacts/:id
const getContacts = asyneHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update", { contact: contact }); // update.ejs로 contact 값을 넘겨줌
});

// Update contacts
// PUT /contacts/:id
const updateContacts = asyneHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body; // 요청 본문에서 새로 수정할 내용을 json 형태로 지정

  const contact = await Contact.findById(id); // 요청 본문에 있는 id 값과 같은 연락처 찾기
  // id 값에 해당하는 contact가 없는 경우
  if (!contact) {
    throw new Error("Contact not found");
  }

  // 요청 본문에서 가져온 값을 기존 값에 할당
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  // 데이터베이스에 저장
  contact.save();

  res.redirect("/contacts")
});

// Delete contacts
// DELETE /contacts/:id
const deleteContacts = asyneHandler(async (req, res) => {
  const id = req.params.id;
  // 아이디에 해당하는 정보를 찾아서 삭제
  await Contact.findByIdAndDelete(id)
  // 연락처 목록으로 이동
  res.redirect("/contacts")
});

module.exports = {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
  addContactForm,
};
