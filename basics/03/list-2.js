// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)

const fs = require("fs");

fs.readdir("./", (err, files) => { // 현재 폴더(디렉토리)
    if (err){
        console.log(err)    // 에러 발생 시 에러 출력
    }
    console.log(files)  // 성공시 파일 출력
}); 
