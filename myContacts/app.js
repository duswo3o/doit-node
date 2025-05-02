const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express(); // app 이라는 이름을 가진 서버 생성

app.set("view engine", "ejs"); // 사용할 템플릿 엔진
app.set("views", "./views"); // 템플릿 파일 저장 경로

app.use(express.static("./public")); // 정적인 파일들의 위치 지정(템플릿 파일에서 사용하는 css, js, 이미지 등)
app.use(methodOverride("_method"));

dbConnect(); // 데이터베이스에 접속

// 미들웨어 등록
// 바디파서 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 미들웨어
app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

// app 서버 실행
app.listen(3000, () => {
  console.log("서버 실행중");
});
