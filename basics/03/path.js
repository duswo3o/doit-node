// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

// join
const fullPath = path.join("some", "work", "ex.txt");
console.log(fullPath);

// 경로만 추출 - dirname
const dir = path.dirname(fullPath); // 파일 이름은 빼고 경로만 추출
console.log(dir);

// 파일 이름만 추출 - basename
const fn1 = path.basename(__filename); // 현재 파일의 전체 경로 중 파일 이름만 추출
console.log(fn1);
const fn2 = path.basename(__filename, ".js"); // js 확장자 제외하고 파일 이름만 추출
console.log(fn2);
