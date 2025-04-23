const mongoose = require("mongoose");
require("dotenv").config(); // dotenv 모듈의 config 함수 실행

// 데이터베이스에 접속
const dbConnect = async () => {
  try {
    // mongoose 모듈에서 connect 함수를 이용해서 데이터베이스에 접근
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect