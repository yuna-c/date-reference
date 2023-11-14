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

const worldHour = now.getUTCHours();

//특정 나라 표준시 구하는 방법
//우리나라 시간대를 밀리세컨드로 반환후 - 밀리세컨드 = 시차

//만약 8시간 빠른 독일 시간 구하고 싶으면?
const timeGerman = time - 1000 * 60 * 60 * 8; //1000 1초

//해당 밀리세컨드 값을 new Date()의 인수로 전달
//해당 밀리세컨드 시간 값에 시간 인스턴스 값이 수정되서 반환됨
const nowGerman = new Date(timeGerman);
console.log('한국시', now);
console.log('독일시', nowGerman);
