require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000; // .env 파일에 저정된 포트, 없으면 3000번 포트 사용

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes/main"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
