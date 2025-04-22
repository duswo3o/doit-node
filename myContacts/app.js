const express = require("express");
const app = express(); // app 이라는 이름을 가진 서버 생성

// 라우팅
app.get("/", (req, res) => {
  res.send("Hello, Node!");
});

// 미들웨어 등록
app.use("/concats", require("./routes/concatRoutes"));

// app 서버 실행
app.listen(3000, () => {
  console.log("서버 실행중");
});
