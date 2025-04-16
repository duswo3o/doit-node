// 순서대로 실행하기  (결과 비교: 02\results\sync.js)

function displayA() {
  console.log("A");
}
function displayB(callback) {
    // 2초 후에 실행
    setTimeout(() => {
        console.log("B");
        callback();
    }, 2000);
}
function displayC() {
  console.log("C");
}

displayA()
displayB(displayC)
