/*
JS에서 객체를 생성하는 방법 2가지
1 - 객체 리터럴식으로 생성(기존)
  const student ={
    name : 'yuna',
    age : '33',
    school : 'dcodelab'
  }
  근데 이게 100개면?
  만약 학교 정보 추가해야 되는데?
  
2 - 생성자를 통한 인스턴스(복사본) 생성(생성자 함수)

ES6에서의 객체지향
- 동일한 형식의 객체를 대량으로 뽑아내야 할 때 객체 생성을 자동화
- 생성자(붕어빵틀) : 객체 생성해주는 함수 (constructor)
- 인스턴스(붕어빵) : 생성자를 통해 복사가 된 객체
- 프로토타입 : 생성자안에 자동으로 추가되는 공통의 저장공간(각 인스턴스에서 활용된 함수(method)등록)
- 같은 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 메서드를 동유
- 생성자 안쪽의 this : 해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭(복사될 각각의 객체)
*/

class Student {
	constructor(name, age) {
		//생성자 : 인스턴스
		this.name = name;
		this.age = age;
		//this.school = 'DECODELAB'; //상수값
		this.school = 'DECODELAB';
	}
	//프로토타입에 각 인스턴스들이 공통으로 활용할 함수 등록(메서드)
	plusAge() {
		this.age = this.age + 1;
	}

	renameSchool(txt) {
		this.school = txt;
	}
}

// 생성자를 통해 2개의 인스턴스 객체 복사
const s1 = new Student('Nana', 22);
const s2 = new Student('David', 12);
console.log(s1, s2);

//인스턴스가 생성된 이후 프로토타입의 메서드를 호출해서 일괄적으로 인스턴스의 구조를 변경 가능
[s1, s2].forEach((el) => {
	el.plusAge();
	el.renameSchool('강감찬 고등학교');
});
// [s1, s2].forEach((el) => el.chageSchool());
console.log(s1, s2);
