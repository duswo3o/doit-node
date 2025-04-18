// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");

// 서버 생성
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain"); // 사용할 컨텐츠 타입 지정 (일반 순수 텍스트)
  // 화면에 표시
  res.write("Hello Node");
  res.end(); // 응답 종료
});

// 서버 실행
server.listen(3000, () => {
  console.log("서버가 실행중");
}); // 포트 번호 지정
