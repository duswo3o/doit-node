require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000; // .env 파일에 저정된 포트, 없으면 3000번 포트 사용

connectDb();

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(methodOverride("_method"));

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
