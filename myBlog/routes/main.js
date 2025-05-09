const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get(
  ["/", "/home"],
  asyncHandler(async (req, res) => {
    const locals = {
      title: "Home",
    };
    const data = await Post.find();
    res.render("index", { locals: locals, data, layout: mainLayout });
  })
);

router.get("/about", (req, res) => {
  const locals = {
    title: "About",
  };
  res.render("about", { locals, layout: mainLayout });
});

/**
 * 게시물 상세보기
 * GET /post/:id
 */
router.get(
  "/post/:id",
  asyncHandler(async (req, res) => {
    const data = await Post.findOne({ _id: req.params.id });
    res.render("post", { data, layout: mainLayout });
  })
);

module.exports = router;

// 임시 데이터 생성
// Post.insertMany([
//   {
//     title: "제목 1",
//     body: "인터스텔라 - Love is the one thing that we're capable of perceiving that transcends dimensions of tile and spaces. \n - 브랜드 박사(앤 해서웨이) \n\n사랑은 우리가 인식할 수 있는 유일한 것이에요. 시간과 공간의 차원을 초월하죠. \n\n\n\n 이 대사는 과학적 탐험 속에서도 인간적인 감정과 본질을 옿지 않으려는 메세지를 전해 줍니다.",
//   },
//   {
//     title: "제목 2",
//     body: "인터스텔라 - Love is the one thing that we're capable of perceiving that transcends dimensions of tile and spaces. \n - 브랜드 박사(앤 해서웨이) \n\n사랑은 우리가 인식할 수 있는 유일한 것이에요. 시간과 공간의 차원을 초월하죠. \n\n\n\n 이 대사는 과학적 탐험 속에서도 인간적인 감정과 본질을 옿지 않으려는 메세지를 전해 줍니다.",
//   },
//   {
//     title: "제목 3",
//     body: "인터스텔라 - Love is the one thing that we're capable of perceiving that transcends dimensions of tile and spaces. \n - 브랜드 박사(앤 해서웨이) \n\n사랑은 우리가 인식할 수 있는 유일한 것이에요. 시간과 공간의 차원을 초월하죠. \n\n\n\n 이 대사는 과학적 탐험 속에서도 인간적인 감정과 본질을 옿지 않으려는 메세지를 전해 줍니다.",
//   },
//   {
//     title: "제목 4",
//     body: "인터스텔라 - Love is the one thing that we're capable of perceiving that transcends dimensions of tile and spaces. \n - 브랜드 박사(앤 해서웨이) \n\n사랑은 우리가 인식할 수 있는 유일한 것이에요. 시간과 공간의 차원을 초월하죠. \n\n\n\n 이 대사는 과학적 탐험 속에서도 인간적인 감정과 본질을 옿지 않으려는 메세지를 전해 줍니다.",
//   },
//   {
//     title: "제목 5",
//     body: "인터스텔라 - Love is the one thing that we're capable of perceiving that transcends dimensions of tile and spaces. \n - 브랜드 박사(앤 해서웨이) \n\n사랑은 우리가 인식할 수 있는 유일한 것이에요. 시간과 공간의 차원을 초월하죠. \n\n\n\n 이 대사는 과학적 탐험 속에서도 인간적인 감정과 본질을 옿지 않으려는 메세지를 전해 줍니다.",
//   },
// ]);
