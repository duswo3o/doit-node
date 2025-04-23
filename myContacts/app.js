const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express(); // app 이라는 이름을 가진 서버 생성
dbConnect(); // 데이터베이스에 접속

// 라우팅
app.get("/", (req, res) => {
  res.send("Hello, Node!");
});

// 미들웨어 등록
// 바디파서 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 미들웨어
app.use("/concats", require("./routes/concatRoutes"));

// app 서버 실행
app.listen(3000, () => {
  console.log("서버 실행중");
});
