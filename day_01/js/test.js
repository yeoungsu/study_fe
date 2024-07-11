const name = "mike"; // 문자형 String

const name1 = "mike"
const name2 = 'mike'
const name3 = `mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살 입니다.`
console.log(message4);

const age = 30; // 숫자형 Number
const PI = 3.14; // 파이

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const x = 1/0; // ???
console.log(x)

const y = name/2;

console.log(y) // NaN = Not a number 숫자가 아니라는 뜻

// Boolean 논리적인 요소를 나타냄

// const a = true; // 참
// const b = false; // 거짓

console.log(name == 'mike');
console.log(age > 40);

// null(존재하지 않음) 과 undefined(값이 할당되지 않음)

// let age;
// let user = null; // user는 존재하지 않음 이라는 의미

//typeof 연산자 // 다른 개발자가 작성한 변수의 타입을 알아야 하거나 API통신을 통해 받아온 데이터를 타입에 따라
// 다른방식으로 처리해야 할 때 많이 사용됨

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof 'xxx');
console.log(typeof null); // "object" 객체형을 의미함 // null = 객체 -> 가 아님
console.log(typeof undefined);

// const message3 = "My name is ${name}"; 일반 따옴표를 사용하게 되면
// console.log(message3); 을 했을 때 My name is ${name}으로 출력되니 주의할 것

const a = "나는 ";
const b = " 입니다.";

console.log(a + name + b);

//const age = 30 // number // 숫자는 문자형으로 변환이 될 수 있음
console.log(a + age + "살" + b); // 문자형으로 변환

// alert 무언가를 알려주는 역할
// prompt 무언가를 입력받는 역할
// confirm 무언가를 확인받는 역할

// alert("비밀번호가 틀렸습니다.")

// const nametype = prompt("이름을 입력하세요.");
// alert("환영합니다, " + nametype + "님");

// alert("환영합니다, " + nametype + "님");