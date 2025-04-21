const express = require("express");
const app = express(); // app 이라는 이름을 가진 서버 생성

// 라우팅
app.get("/", (req, res) => {
  res.send("Hello, Node!");
});

app.get("/concats", (req, res) => {
  res.send("concats Page");
});

// app 서버 실행
app.listen(3000, () => {
  console.log("서버 실행중");
});
