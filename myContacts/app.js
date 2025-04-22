const express = require("express");
const app = express(); // app 이라는 이름을 가진 서버 생성

// 라우팅
app.get("/", (req, res) => {
  res.send("Hello, Node!");
});

// 연락처 목록(연락처 가져오기)
app.get("/concats", (req, res) => {
  res.send("concats Page");
});

// 새 연락처 추가하기
app.post("/concats", (req, res) => {
  res.send("Create Concats");
});

// 연락처 1개 가져오기
app.get("/concats/:id", (req, res) => {
  res.send(`View Concat for ID : ${req.params.id}`);
});

// 연락처 수정히기
app.put("/concats/:id", (req, res) => {
  res.send(`Update Concat for ID : ${req.params.id}`);
});

// 연락처 삭제하기
app.delete("/conctas/:id", (req, res) => {
  res.send(`Delete Concat for ID : ${req.params.id}`);
});

// app 서버 실행
app.listen(3000, () => {
  console.log("서버 실행중");
});
