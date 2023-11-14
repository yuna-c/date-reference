//특정 시간구간에 맞게 호출 메서드
//setTimeout(실행함수, 지연시간) : 일정시간이후에 한번만 호출
//setInterval(실행함수, 반복인터벌) : 일정시간마다 계속해서 반복호출

/*
setTimeout(() => {
	console.log('5초지난뒤 실행');
}, 5000);
*/
const h1 = document.querySelector('h1');
const [btnStart, btnStop] = document.querySelectorAll('button');
//전역변수를 써야되는 경우
//특정 변수값이 서로다른 함수에서 공유되야될떄
//전역변수 쓰는 방법
//코드블록 밖에서 변수선언뒤 null이나 기본 자료값으로 초기화
//함수안쪽에서 새로 지역변수를 만드는 것이 기존 전역변수를 가져와서 새로운 값만 재할당
// 전역변수 : 우주에 떠있는 인공위성 (중계기)
let timer = null;
let num = 0;

timer = setInterval(() => {
	//A지역 변경요청
	h1.innerText = num++;
	console.log('1초마다 반복실행');
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		console.log('1초마다 반복실행');
		//B지역 변경요청
		h1.innerText = num++;
	}, 1000);
});
