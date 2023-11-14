const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const monthName = ['January', 'February', '	March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = now.getDate();
const day = now.getDay(); //순서가 반환 0: 일요일
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
const time = now.getTime();

console.dir(now);
console.dir(year);
console.log(monthName.length, monthName[10]); //월의 값이 아닌 순서값 [0: 1월]
console.log(time); // 표준시가 지정된 시점으로 부터의 밀리세컨드 값이 반환
