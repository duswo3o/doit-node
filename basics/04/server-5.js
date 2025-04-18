// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  // req.url : 요청 경로
  // req.mathod : 요청 방식

  const { url, method } = req; // 구조분해 할당 기능
  res.setHeader("Content-type", "text/plain"); // 사용할 컨텐츠 타입 지정 (일반 순수 텍스트)

  if (method === "GET" && url === "/home") {
    res.write("HOME");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.end("ABOUT");
  } else {
    res.end("Not Found");
  }
});

// 서버 실행
server.listen(3000, () => {
  console.log("서버가 실행중");
}); // 포트 번호 지정
