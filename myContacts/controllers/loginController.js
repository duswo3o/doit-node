const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// GET login page
// GET /
const getLogin = (req, res) => {
  res.render("home");
};

// Login user
// POST /
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password == "1234") {
    res.send("Login Success");
  } else {
    res.send("Login Failed");
  }
});

// Register Page
// GET /register
const getRegister = (req, res) => {
  res.render("register");
};

// Register user
// POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;

  // 패스워드 일치 확인
  if (password === password2) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({username, password:hashedPassword})
    res.json({message:"Register successful", user})
  } else {
    res.send("Register Failed")
  }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
