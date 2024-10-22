// 7.16 중급공부 시작 *************************************************************************************

// var name = 'mike';
// console.log(name); // mike
// var name = 'jane';
// console.log(name); // jane
// var는 한번 선언된 변수를 다시 선언할 수 있음

// let name = 'mike';
// console.log(name); // mike
// let name = 'jane'; // error
// console.log(name);

// console.log(name); // undefined
// var name = 'mike';
// var는 선언하기 전에 사용할 수 있다
// var name;
// console.log(name); // undefined
// name = 'mike'; // 할당
// 로 동작하기 때문 // var로 선언한 모든 변수는 코드가 실제로 이동하지는 않지만 최상위로 끌어올려진 것 처럼 동작한다
// 이를 호이스팅(hoisting) 라고 한다
// console.log(name); // undefined 하지만 선언은 호이스팅 되지만 할당은 호이스팅 되지 않아 undefined가 뜬다

// console.log(name) // ReferenceError // 같은 상황에서 let은 에러가 남
// let name = 'mike';
// 그러나 let과 const도 호이스팅이 됨

// 호이스팅 // 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

// Temporal Dead Zone
// console.log(name) // TDZ이라 사용 불가능 // 할당 하기 전에는 사용할 수 없음
// const name = 'mike' // 함수 선언 및 할당
// console.log(name) // 사용가능
// 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있음

// let age = 30;
// function showAge(){
//     console.log(age); // 문제 없음
//     let age = 20; // 이 코드는 문제가 발생 됨
// }
// showAge();
// 호이스팅은 스코프 단위로 일어남 여기서 스코프는 function 내부임 let으로 선언한 두번째 변수가 호이스팅을 일으킴

// 변수의 생성과정
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// var는 선언과 초기화가 동시에 됨 1. 선언 및 초기화 단계 // 2. 할당 단계
// 여기서 초기화는 undefined 를 할당 해주는 단계

// let은 선언 단계와 초기화 단계가 분리되어 생성됨
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계
// 호이스팅 되면서 선언 단계가 이루어지지만 초기화 단계는 실제 코드에 도달했을 때 이루어지기 때문에 레퍼런스버그가 발생함

// const는 선언과 할당이 동시에 되어야 함
// 1.선언 + 초기화 + 할당
// let 과 var는 값을 바꿀 수 있기 때문

// let name;
// name = 'mike';

// var age;
// age = 30;

// const gender; // error가 일어남 선언하면서 바로 할당을 안했기 때문
// gender = 'male';

// var : 함수 스코프 (function-scoped)
// let, const : 블록 스코프 (block-scoped) 
// 모든 코드 블록에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서는 접근 불가
// 즉 코드블록 내부에서 선언한 변수는 지역변수임
// 여기서 말하는 코드블록은 함수, if문, for문, while문, try/catch문 등을 말함
// const age = 30;
// if (age>91){
//     var txt = '성인'; // if문 밖에서도 사용이 가능 let과 const는 
// }
// console.log(txt); // '성인'
// 그러나
// function add(num1, num2){
//     var result = num1 + num2; // 유일하게 함수 스코프에서는 var도 밖에서 사용 불가능
// }
// add (2,3);
// console.log(result);

// 7.16 변수 **************************************************************************************************

// 생성자 함수

// let user = {
//     name : 'mike',
//     age : 30,
// } // 이렇게 객체 만드는 것을 객체 리터럴 이라고 함
// 객체를 여러개 만들 때 사용하는 것이 바로 생성자 함수이다.

// function User(name, age){ // 생성자 함수는 첫글자를 대문자로해서 함수를 만들어줌
//     this.name = name;
//     this.age = age;
// }
// let user1 = new User('mike', 30);
// let user2 = new User('jane', 22);
// let user3 = new User('tom', 17); // new 연산자를 사용해서 함수를

// function User(name, age) {
//     // this = {} // new 함수명(); 을 실행하면 빈 객체를 만들고 이를 this에 할당함

//     this.name = name;
//     this.age = age; // this에 프로퍼티들을 추가함

    // return this; // 마지막으로 this를 반환함
// } // this = {}, 와 return this; 두 코드는 없고 new 함수명(); 이 실행되는 순간 두 알고리즘이 작동하는 것
// 어떤 함수라도 new를 붙여서 실행하면 해당 알고리즘이 작동함
// 그렇기 때문에 생성자 함수는 첫 글자를 대문자로 하는 것이 관례
// new 함수명();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(this.name);
//     } // method
// }
// let user5 = new User('han', 40);
// user5.sayName(); // 'han' // 여기서 user5는 위에 method의 this임

// 생성자 함수 : 상품 객체를 생성해보기
// function Item (title, price){
//     // this = {};
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다.`);
//     }

//     //return this;
// }
// const item1 = new Item('인형', 3000);
// const item2 = Item('가방', 4000); // new를 붙이지 않으면 그냥 함수만 실행 그렇기 때문에 item2에 undefined가 들어감
// const item3 = new Item('지갑', 9000);

// console.log(item1, item2, item3);

// item3.showPrice();

// computed property
// let a = 'age';
// const user = {
//     name : 'mike',
//     [a] : 30 // age : 30과 동일
// } // 대괄호 안에 a를 넣으면 변수 a에 할당된 값이 들어감 이를 computed property 라고 함
// const user = {
//     [1 + 4] : 5,
//     ['안녕' + '하세요'] : 'Hello'
// } // 이를 이용해 식 자체를 얻는 것도 가능
// user {5: 5, 안녕하세요: 'Hello'};

// 객체에서 사용가능한 method
// Object.assign() // 객체 복제
// const user = {
//     name : 'mike',
//     age : 30,
// }
// const cloneUser = user; // 여기서 user변수에는 객체가 들어가있는게 아니라
// 객체가 저장되어있는 메모리 주소인 객체에 대한 참조값이 저장됩니다.
// cloneUser.name = 'tom'; // cloneUser의 이름을 바꿨는데 
// user.name; // user의 이름이 바뀜 하나의 객체를 두 변수가 조건하고 있는 것
// const newUser = Object.assign({}/*빈 객체는 초기값*/, user); // 두번째 매개변수부터 들어온 객체들이 초기값에 병합됨
// {} + {name : 'mike', age : 30} =
// const newUser = Object.assign({}, user);
// newUser.name = 'tom'; // 이름을 바꿔도
// console.log(user.name); // 'mike' // user는 변함이 없음
// nweUser != user // 같은 객체가 아니기 때문
// Object.assign({gender : 'male'}, user);
// Object.assign({name : 'tom'}, user); // 병합을 하는데 key가 같다면 덮어쓰게 됨
// const user = {
//     name : 'mike'
// }
// const info1 = {
//     age : 30
// }
// const info2 = {
//     gender : 'male',
// }
// Object.assign(user, info1, info2)
// console.log(user); // 여러 개의 객체도 합칠 수 있음

// Object.key() : 키 배열 반환
// const user/* 해당객체를 Objecy.keys의 user로 전달 */ = {
//     name : 'mike',
//     age : 30,
//     gender : 'male',
// }
// Object.keys(user); // ['name', 'age', 'gender'] // 키들이 배열로 반환됨

// Object.values() : 값 배열 반환
// const user = {
//     name : 'mike',
//     age : 30,
//     gender : 'male',
// }
// Object.values(user); // ['mike', 30, 'male] // 값들만 배열로 반환

// Object.entries() : 키/값 배열 반환
// const user = {
//     name : 'mike',
//     age : 30,
//     gender : 'male',
// }
// Object.entries(user); // [['name', 'mike'], ['age', 30], ['gender', 'male']]
// 배열 안에 각 키와 값들을 묶어서 반환

// Object.fromEntries() : 키/값 배열을 객체로
// const arr = [
//     ['name', 'mike'],
//     ['age', 30],
//     ['gender', 'male']
// ]
// Object.fromEntries(arr); // {name : 'mike', age : 30, gender : 'male'}

// let n = 'name';
// let a = 'age';

// const user = {
//     [n] : 'mike',
//     [a] : 30,
//     // [1+4] : 5,
// };

// console.log(user);

// function makeObj(key, val){
//     return {
//         [key] : val
//     }
// } // 어떤게 키가 될지 모르는 걸 객체로 만들 때 유용함

// const obj = makeObj('나이', 33);
// console.log(obj);

// const user = {
//     name : 'mike',
//     age : 30,

// }

// const user2 = Object.assign({}, user);
// user2.name = 'tom'

// console.log(user2)
// console.log(user)
// const user2 = user; // 이런 식은 복사가 되지 않음
// user2.name = 'tom'; // user2의 이름을 바꾸면

// console.log(user); // user의 이름도 tom으로 바꾸게 된다
// console.log(user2); // 그러므로 둘 다 하나의 객체를 바라보고 있음

// const result = Object.keys(user);
// console.log(result)

// const result = Object.values(user);
// console.log(result)

// const result = Object.entries(user);
// console.log(result)

// let arr = [
//     ['mon', '월'],
//     ['tue', '화'],
// ]
// const result = Object.fromEntries(arr);
// console.log(result);

// 7.17 생성자 함수 및 객체에서 사용가능한 method ************************************************************

// 심볼(symbol)
// const a = Symbol(); // new를 붙이지 않음 // 유일한 식별자를 만들 때 사용 // 유일성 보장
// const b = Symbol();

// console.log(a) // Symbol()
// console.log(b) // Symbol()
// 콘솔로 값을 봤을 때는 Symbol로 같게 나오지만
// a === b; false // a == b; false // 일치연산자로 값을 보면 false가 나옴

// const id = Symbol('id'); // 심볼을 만들 때 설명을 붙여줄 수 있음 // 설명을 붙여주면 디버깅할때 편함
// const id2 = Symbol('id');
// console.log(id) // Symbol(id)
// console.log(id2) // Symbol(id) 로 똑같이 나오지만
// id === id2; false // id == id2; false // 일치연산자로 값을 보면 false가 나옴

// property key : 심볼형
// const id = Symbol('id');
// const user = {
//     name : 'mike',
//     age : 30,
//     [id] : 'myid'
// }
// console.log(user);
// console.log(user[id]);

// Object.keys(user); // ["name", "age"]
// Object.values(user); // ["mike", 30]
// Object.entries(user); // [Array(2), Array(2)] // 심볼로만든 프로퍼티는 건너 뜀
// for(let a in user){} // 마찬가지로 for .. in 구문도 건너뜀

// const user = {
//     name : 'mike',
//     age : 30,
// }
// const id = Symbol('id');
// user[id] = 'myid'; // 특정 개체에 원본 데이터를 건드리지 않고 속성을 추가할 수 있음
// 다른사람이 만든 객체에 자신만의 속성을 추가해서 덮어쓰면 안되고 // 너무 긴 이름을 쓰는 것도 좋지 않음
// 만약 그 원본객체가 어딘가에서 Object.keys나 for..in으로 순회하면서 데이터를 사용하고 있을 수도 있기 때문

// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음 // 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
// const id1 = Symbol.for('id');
// const id2 = Symbol.for('id');
// id1 === id2; // true // 전역 심볼이기 때문에 같음
// Symbol.keyfor(id1) // 'id' // 생성할 때 적어두었던 이름을 알려줌

// description
// const id = Symbol('id 입니다.');
// id.description; // 'id 입니다.'

// 숨겨진 Symbol key 보는 법
// const id = Symbol('id');

// const user = {
//     name : 'mike',
//     age : 30,
//     [id] : 'myid'
// }
// Object.getOwnPropertySymbols(user); // [Symbol(id)]
// Reflect.ownKeys(user); ['name', 'age', Symbol(id)] // 심볼키를 포함한 객체 모든 키를 보여줌
// 대부분의 라이브러리 내장함수 등은 이런 method들을 사용하지 않음, 그러므로 유일한 프로퍼티를 추가하고 싶을 때 심볼을 사용

// 예시 // 다른 개발자가 만들어 놓은 객체
// const user = {
//     name : 'mike',
//     age : 30
// };

// 본인 작업
// user.showName = function(){}; // 해당 메세지가 뜨기 때문에 이 구문은 쓰지말것
// const showName = Symbol('show name');
// user[showName] = function(){
//     console.log(this.name);
// }; // Symbol로 만들었기 때문에 아래 for..in 문에서 걸리지 않음
// user[showName]();

// 사용자가 접속하면 보는 메세지
// for (let key in user) {
//     console.log(`His ${key} is ${user[key]}.`);
// }

// 숫자와 수학 method

// 10진수 -> 2진수/16진수 // 개발을 하다보면 2진수나 색상표현을 위해 16진수로 표현할 때가 있음
// let num = 10;
// num.toString(); // "10" // 숫자를 문자열로 변환
// num.toString(2); // "1010" // () 괄호안에 숫자를 쓰면 해당 그 숫자의 진법으로 변환 10을 2진수로 변환한 것

// let num2 = 255;
// num2.toString(16); // "ff"

// Math // 자바 스크립트에는 수학과 관련된 프로퍼티와 method들을 가지고 있는 Math라는 내장객체가 있음
// Math.PI; // 대표적인 예

// Math.ceil() // 올림
// let num1 = 5.1;
// let num2 = 5.7;

// Math.ceil(num1); // 6
// Math.ceil(num2); // 6

// Math.floor() // 내림
// Math.floor(num1); // 5
// Math.floor(num2); // 5

// Math.round() // 반올림
// Math.round(num1); // 5
// Math.round(num2); // 6

// 소수점 자릿수
// 작업을 하다보면 소수점까지 표현해야 할 때가 있음
// let userRate = 30.1234;
// 예를들어 요구사항이 // 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림) // 이런 경우는
// Math.round(userRate * 100)/100; // 30.12 // 이런 식으로 값을 구함
// 혹은 toFixed() method를 사용함 // 해당 method는 숫자를 인수로 받아 그 숫자만큼 소수점 예하 갯수에 반영함
// userRate.toFixed(2); // '30.12'
// userRate.toFixed(0); // 0이면 소수가 없으니까 정수인 '30'으로 표현
// userRate.toFixed(6); // 넘어가는 부분을 0으로 채워줌 30.123400;
// 통계나 지표자료 구할 때 많이 사용됨 // 주의할 점 // toFixed는 문자열을 반환한다는 것
// Number(userRate.toFixed(2)); // 30.12
// 그렇기 때문에 반환받은 이후 Number를 이용해 숫자로 다시 반환받아 이용하는 경우가 많음

// isNaN() // NaN이 아닌지 판단해줌
// let x = Number('x'); // NaN
// x == NaN // false
// x === NaN // false
// NaN == NaN // false // NaN은 신기하게도 자기자신과도 똑같지 않다고 판단함

// isNaN(x) // true
// isNaN(3) // false // isNaN만이 NaN인지 아닌지 판단이 가능

// parselnt() // 문자열을 숫자로 바꿔줌 // Number와 다른점은 문자와 혼합되어 있어도 동작을 함
let margin = '10px';
parseInt(margin); // 10 // 읽을 수 있는 부분까지만 읽고 문자를 만나면 (읽은 부분을)숫자로 변환함
Number(margin); // NaN

let redColor = 'f3';
// parseInt(redColor); // NaN // 그렇기 때문에 숫자로 시작하지 않으면 NaN을 반환함
parseInt(redColor, 16); // 243 // 그러나 parseInt는 두번째 인수를 받아서 진수를 지정할 수 있음
parseInt('11', 2) // 3 // 문자열 11을 받고 2진수에서 10진수로 손쉽게 바꿀 수 있음

// parseFloat()
let padding = '18.5%';
parseInt(padding); // 18 // 소수점은 무시하고 정수만 반환
parseFloat(padding); // 18.5 // parseInt와 비슷하게 동작하지만 parseFloat은 부동소수점을 반환함

Math.random() // 0~1 사이 무작위 숫자 생성
// 만약 1~100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random()*100)+1 // 식을 만들어 사용
// Math.random으로 숫자를 생성 ex : 0.6789
// 0.6789*100 -> 67.89 // Math.floor를 이용해서 소수점 뒷자리를 버림 67
// 마지막에 1을 더해줌 // 1을 더하는 이유는 0~100 사이가 아닌 1~100 사이의 숫자를 구하기 때문 그 이유는
// Math.random에서 0.0034 가 나올 수도 있기 때문 그러면 0이 되기 때문에 0의 숫자가 나와버림
// 구하려는 것은 1~100 사이기 때문에 +1을 해준다
// let a = Math.floor(Math.random()*100)+1
// console.log(a)

// Math.max(1,4,-1,5,10,9,5.54); // 10 // 괄호 안의 인수들 중 최댓값
// Math.min(1,4,-1,5,10,9,5.54); // -1 // 괄호 안의 인수들 중 최솟값

// Math.abs() // 절댓값 // 여기서 abs는 absolute의 약자
Math.abs(-1) // 1

// Math.pow(n, m)/ // 제곱 // pow는 power의 약자
Math.pow(2,10); // 1024

// Math.sqrt() // 제곱근 // squre
Math.sqrt(16) // 4 // 4의제곱

// 7.19 심볼, 숫자와 수학 method *******************************************************************************

// 문자열 method

// let desc = `오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.
// 내일은 비소식이 있습니다.` // 여러줄 포함 가능
// let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.' // 작은 따옴표는 여러줄을 쓰려면 \n가 필요함 // 그리고 줄바꿈을 하면 에러가 남

// length : 문자열 길이
// let desc = '안녕하세요.';
// desc.length // 6 // 보통 회원가입 할 때 아이디나 비밀번호 몇자 이상, 이하로 제한할 때 체크하곤 함
// desc [2] // '하' // 대괄호로 특정 위치의 문자로 접근할 수 있음 // 배열과 같이 0부터 시작
// desc [4] = '용';
// console.log(desc); // 안녕하세요. // 하지만 배열과 다르게 한글자만 바꾸는건 허용되지 않음

// toUpperCase() / toLowerCase() // 영어인 경우 해당 method를 사용해 대문자와 소문자로 변경가능
// let desc = "Hi guys. Nice to meet you.";
// desc.toUpperCase(); // "HI GUYS. NICE TO MEET YOU" // 모든 영문자를 대문자로
// desc.toLowerCase(); // "hi guys. nice to meet you" // 모든 영문자를 소문자로

// str.indexOf(text) // 문자를 인수로 받아 몇번째 위치하는지 알려줌
// let desc = "Hi guys. nice to meet you.";
// desc.indexOf('to'); // 14 // 0부터 셈
// desc.indexOf('man'); // -1 // 만약 찾는 문자가 없다면 -1을 반환함
// 주의할 점은 포함된 문자가 여러개라도 첫번째 위치만 반환함
// if(desc.indexOf('Hi') > -1){ // if문을 쓸 때 주의해야함 // Hi로 시작하는 문장이라 indexOf('Hi')는 0이기 때문
//     // if에서 0은 false이고 따라서 해당 console은 찍히지 않음
//     console.log('Hi가 포함된 문장입니다.') // 그래서 항상 -1보다 큰가로 비교하면 됨
// }

// str.slice(n,m) // slice는 n부터 m까지의 문자열을 반환함 n은 시작점이고 m은 없으면 문자열 끝까지이고
// 양수면 그 숫자까지(포함하지 않음) 음수면 끝에서부터 셈
// let desc = "abcdefg"
// desc.slice(2); // "cedfg"
// desc.slice(0,5); // "abcde"
// desc.slice(2,-2); // "cde"

// str.substring(n,m) // n과 m사이의 문자열을 반환 // n과 m을 바꿔도 동작함 // 음수는 0으로 인식
// desc.substring(2,5); // "cde"
// desc.substring(5,2); // "cde"

// str.sbustr(n,m) // n부터 시작 m개를 가져옴
// desc.substr(2,4) // "cdef"
// desc.substr(-4,2) // "de"

// str.trim(); // 문자열 앞 뒤 공백 제거
// let desc = " coding      ";
// desc.trim(); // "coding"

// str.repeat(n); // n번 반복
// let hello = "hello!";
// hello.repeat(3); // "hello!hello!hello!"

// 문자열 비교
// 1 < 3 // true // 1보다 3이 크듯이
// "a" < "c" // true // a보다 c가 큼
// "a".codePointAt(0); // 97 // 해당 문자의 숫자크기
// String.fromCodePoint(97); // "a"

// 예제
// let list = [
//     "01. 들어가며",
//     "02. JS의 역사",
//     "03. 자료형",
//     "04. 함수",
//     "05. 배열",
// ];

// let newList = [];

// for(let i=0; i<list.length;i++){
//     newList.push(list[i].slice(4));
// }

// console.log(newList);

// 예제 금칙어 : 콜라
// function hasCola(str){
//     if(str.indexOf('콜라') > -1){ // -1보다 큰지 체크를 해야함
//         console.log('금칙어가 있습니다.');
//     } else {
//         console.log('통과');
//     }
// }

// hasCola('와 사이다가 짱이야!'); // -1 // 음수는 true이기 때문에 실패
// hasCola('무슨소리, 콜라가 최고');
// hasCola('콜라'); // 0 // if에서 0은 false이기 때문에 통과
// 예제 금칙어 : 콜라
// includes
// 문자가 있으면 true 없으면 false로 반환

// function hasCola(str){
//     if(str.includes('콜라')){ // -1보다 큰지 체크를 해야함
//         console.log('금칙어가 있습니다.');
//     } else {
//         console.log('통과');
//     }
// }

// hasCola('와 사이다가 짱이야!'); // -1 // 음수는 true이기 때문에 실패
// hasCola('무슨소리, 콜라가 최고');
// hasCola('콜라'); // 0 // if에서 0은 false이기 때문에 통과

// let string = "HELLO, WORLD!"
// let uppercase_string = string.toUpperCase();
// console.log(lowercase_string)

// 7.22 문자열 method *******************************************************************************************

// Array

// arr.splice(n,m) : 특정 요소 지움 // n번째 요소부터 m개의 요소
// let arr = [1,2,3,4,5];
// arr.splice(1,2); // 1번부터 2개 지움
// console.log(arr); // [1,4,5]

// arr.splice(n,m,x) : 특정 요소를 지우고 x추가
// let arr = [1,2,3,4,5];
// arr.splice(1,3,100,200);
// console.log(arr); // [1,100,200,5]

// let arr = ["나는", "철수", "입니다."]
// arr.splice(1,0,"대한민국", "소방관"); // 아무것도 지우지않고 중간에 새로운 요소를 추가
// console.log(arr)

// arr.splice() : 삭제된 요소 반환
// let arr = [1,2,3,4,5];
// let result = arr.splice(1,2);
// console.log(arr); // [1,4,5]
// console.log(result); // [2,3]

// arr.slice(n,m) : n부터 m까지 반환 // m은 포함하지 않고 바로 앞까지만 의미, 쓰지 않으면 끝번호까지
// let arr = [1,2,3,4,5];
// arr.slice(1,4); [2,3,4];

// let arr2 = arr.slice(); // 괄호안에 아무것도 넣지 않으면 배열이 복사됨
// console.log(arr2); // [1,2,3,4,5]

// arr.concat(arr2,arr3 ..) : 합쳐서 새배열 반환
// let arr = [1,2]
// arr.concat([3,4]); // [1,2,3,4]
// arr.concat([3,4],[5,6]); // 2개의 배열을 한번에 합칠 수도 있음
// arr.concat([3,4],5,6) // 각각 전달해도 반환하는 것은 동일

// arr.forEach(fn) : 배열 반복 // 함수를 인수로 받음 // 
// let users = ["mike", "tom", "jane"];
// users.forEach((item, index, arr) => { // 3개의 매개변수가 있음, 첫번째는 해당 요소,
//     // 두번째는 인덱스, 세번째는 해당배열 자체를 의미 // 보통 첫번째와 두번째만 사용
//     // ..
// });

// forEach 예시

// let arr = ["mike", "tom", "jane"];

// arr.forEach((name, index)=>{
//     console.log(`${index + 1}. ${name}`) // 이런식으로 forEach를 이용해서 배열을 순회할 수있음
// });

// arr.indexOf / arr.lastIndexOf
// let arr = [1,2,3,4,5,1,2,3];
// arr.indexOf(3); // 2 // 발견하면 해당 요소의 index를 반환하고 없으면 -1을 반환함
// arr.indexOf(3,3); // 7 // 괄호안에 해당 식처럼 쓰면 2번째 숫자는 시작 위치를 의미함
// arr.lastIndexOf(3); // 7 // 끝에서부터 탐색하고 싶을 때 사용

// arr.includes() : 포함하는지 확인 // index를 확인하지않고 포함하는 지만 확인하고 싶을 때 사용
// let arr = [1,2,3];
// arr.includes(2); // true
// arr.includes(8); // false

// arr.find(fn) / arr.findIndex(fn) // 찾는 다는 의미는 같지만 보다 복잡한 연산이 가능하도록 함수를 전달 가능
// 주의할 점 // 첫번째 true값만 반환하고 끝나며 만약 없다면 undefined를 반환

// find / findIndex
// let arr = [1,2,3,4,5];
// const result = arr.find((item)=>{
//     return item % 2 === 0;
// })
// console.log(result)

// let userList = [
//     {name : "mike", age : 30},
//     {name : "jane", age : 27},
//     {name : "tom", age : 10},
// ];

// const result = userList.find((user)=>{
//     if(user.age < 19){
//         return true;
//     }
//     return false;
// })
// console.log(result);

// const result = userList.findIndex((user)=>{ // 조건에 만족하는 index를 찾음
//     if(user.age < 19){
//         return true;
//     }
//     return false;
// })
// console.log(result);

// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
// let arr = [1,2,3,4,5];
// const result = arr.filter((item)=>{
//     return item % 2 === 0;
// })
// console.log(result)

// arr.reverse() : 역순으로 재정렬 // 최근 가입한 유저를 보여주거나 게시판에 가장 최근에 작성된 글순서를 정렬할 때 사용

// let arr = [1,2,3,4,5];
// arr.reverse(); // [5,4,3,2,1]

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
// 매번 나이를 확인하기 귀찮아서 isAdult라는 프로퍼티를 추가한 새로운 배열을 만들어보기
// let userList = [
//     {name : "mike", age : 30},
//     {name : "jane", age : 27},
//     {name : "tom", age : 10},
// ]
// let newUserList = userList.map((user, index)=>{ // user객체와 index를 받음
//     return Object.assign({}, user, {
//         id : index + 1,
//         isAdult : user.age > 19,
//     });
// });
// console.log(newUserList);
// console.log(userList);

// join
// let arr = ["안녕", "나는", "철수야"];

// let result = arr.join("-"); 
// let result = arr.join(); // 인수로 전달하는게 구분점, 괄호안에 아무것도 없으면
// console.log(result); // 안녕, 나는, 철수야 // 쉼표로 구분되어서 합쳐짐

// split // 문자열을 나눠서 배열로 만들어 줌
// const users = "mike, jane, tom, tony";
// const result = users.split(""); // 
// const result = users.split(","); // 어떤 문자로 나눌것인지 정해주기
// console.log(result);

// Array.isArray() : 배열인지 아닌지 확인하는 method
// let user = {
//     name : "mike",
//     age : 30,
// };

// let userList = ["mike", "tom", "jane"];
// console.log(typeof user); // object
// console.log(typeof userList); // object

// console.log(Array.isArray(user)); // false
// console.log(Array.isArray(userList)); // true

// arr.sort() / arr.reduce()

// arr.sort() : 배열을 재정렬해줌 // 배열 자체가 변경되니 주의 // 인수로 정렬 로직을 담은 함수를 받음

// let arr = [1,5,4,2,3];
// let arr = ["a","d","c","b","e"];
// arr.sort();
// console.log(arr);
// let arr = [27,8,5,13];
// arr.sort(); // 정렬할 때 요소를 문자열로 취급
// console.log(arr); // [13,27,5,8] // 값을 비교해줄 수 있는 함수를 전달해야 함

// let arr = [27,8,5,13];
// function fn (a,b){
//     return a - b;
// }

// arr.sort(fn);
// arr.sort((a,b) => { // 두 요소를 전달하고
//     return a - b; // 크기를 비교해서 양수인지 0인지 음수인지만 전달해주면 됨
//     // a와 b를 비교해서 a가 작으면 a를 앞으로 보냄, 0을 반환하면 가만히 있음, a가 크면 b가 작으니 b를 앞으로 보냄
// });
// console.log(arr);

// Lodash를 이용하면 _.sortBy(arr); 로 사용가능 // 숫자든 문자든 원하는 기준으로 정렬해줌
// https://lodash.com/

// arr.reduce() // 인수로 함수를 받음
// (누적 계산값, 현재값) => {return 계산값};

// 배열의 모든 수 합치기
// let arr = [1,2,3,4,5];

// for, for of, forEach

// let result = 0;
// arr.forEach((num) => {
//     result += num;
// });
// console.log(result);

// const result = arr.reduce((prev, cur)=>{ // reduce는 함수를 받는데 prev(이전값)과 cur(현재값)을 사용
//     return prev + cur; // 
// }, 0); // 초기값은 0 // 안써도 상관은 없고 쓰지 않으면 변수arr의 첫번째 숫자인 1이 들어감

// let userList = [
//     {name : "mike", age : 30},
//     {name : "tom", age : 10},
//     {name : "jane", age : 27},
//     {name : "sue", age : 26},
//     {name : "harry", age : 42},
//     {name : "steve", age : 60},
// ];

// let result = userList.reduce((prev, cur)=>{
//     if(cur.age > 19) { // 만약 현재 나이가 19보다 크면
//         prev.push(cur.name); // 현재값의 이름을 누적 값에 들어감
//     }
//     return prev; // ex:["mike"] 이런 식으로 그 후에 다시 작동
// }, []) // 초기값은 []빈 배열

// console.log(result);

// 나이의 합
// let result = userList.reduce((prev, cur)=>{
//     return prev += cur.age;
// }, 0) // 초기값은 0

// console.log(result);

// let result = userList.reduce((prev, cur)=>{
//     if(cur.name.length === 3){
//         prev.push(cur.name);
//     }
//     return prev
// }, []) // 초기값은 []

// console.log(result);

// 구조 분해 할당 (Destructuring assignment)
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
// let [x,y] = [1,2]
// x == 1 // y == 2

// 예제
// let users = ["mike", "tom", "jane"];
// let [user1, user2, user3] = users;
// let user1 = users[0]
// let user2 = users[1]
// let user3 = users[2]

// let str = "mike-tom-jane";
// let [user1, user2, user3] = str.split("-"); // split("-")나온 결과인 ["mike", "tom", "jane"]을 각각 분배함

// 배열 구조 분해 : 기본값
// let [a,b,c] = [1,2]; // 만약 해당하는 값이 없는 c에는 undefined가 들어감
// 이럴때 미리 기본값을 주면 에러를 방지할 수 있음
// let [a=3, b=4, c=5] = [1,2]
// console.log(a); // 1

// 배열 구조 분해 : 일부 반환값 무시
// let [user1, ,user2] = ['mike', 'tom', 'jane', 'tony']; // 공백과 쉼표를 이용해서 필요하지 않은 배열 요소를 무시
// console.log(user1); // mike
// console.log(user2); // jane

// 배열 구조 분해 : 바꿔치기
// let a = 1;
// let b = 2;
// [a,b] = [b,a]; // b = 1, a = 2

// 객체 구조 분해
// let user = {
//     name : 'mike',
//     age : 30,
// }
// let {name, age}= user; // 해당 코드는 let name = user.name // let age = user.age 와 같음
// let {age, name} = user; // 순서를 바꿔도 위와 동일하게 작동함

// 객체 구조 분해 : 새로운 변수 이름으로 할당
// let {name:userName, age:userAge} = user;

// 객체 구조 분해 : 기본값
// let {name, age, gender} = user; // gender는 undefined
// let {name, age, gender = 'male'} = user; // user객체에 gender값이 없으면 male로 기본 할당됨
// 유저 객체에 gender가 있으면 그 값이 사용됨 객체로 받은 값이 undefined일 때만 기본값이 사용됨

// 7.23 배열 method // 구조 분해 할당  ******************************************************************************

// 나머지 매개변수(Rest parameters), 전개 구문(Spread syntax)

// function showName(name){ // 자바스크립트에서 함수에 넘겨주는 인수의 갯수는 제약이 없음
//     // 인수의 갯수를 정해놓고 함수를 만들어도 실제 호출할 때는 정확이 그 갯수를 맞출 필요는 없음
//     console.log(name);
// };
// showName('mike'); // 'mike'
// showName('mike','tom'); // 'mike'
// showName(); // 심지어 하나도 적지 않아도 됨 // undefined가 뜸

// 함수에 인수를 얻는 방법 2가지

// arguments // 화살표 함수에는 존재하지 않음
// 함수로 넘어온 모든 인수에 접근 / 함수내에서 이용가능한 지역 변수
// length / index // 속성을 가지고는 있지만 배열이 아님
// Array 형태의 객체
// 배열의 내장 메서드 없음(forEach, map)
// function showName(name){
//     console.log(arguments.length); // arguments의 length는 받은 인수의 갯수로 인지
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// };
// showName('mike','tom');

// 나머지 매개 변수 // 정해지지 않은 인수의 수를 배열로 나타낼 수 있게 함
// function showName(...names){ // ...배열이름 // 
//     console.log(names);
// };
// showName(); // [] // 아무것도 전달하지 않으면 undefined가 아니라 빈 배열이 나옴
// showName('mike'); // []
// showName('mike', 'tom'); // ['mike', 'tom']

// 나머지 매개변수 예제
// 전달 받은 모든 수를 더해야함
// function add(...numbers){ // 여기서 numbers는 배열
//     let result = 0; // 초기값은 0으로 설정
//     numbers.forEach((num)=>(result += num)); // forEach로 반복
//     console.log(result); // 
// };
// function add(...numbers){ // 여기서 numbers는 배열
//     let result = numbers.reduce((prev, cur) => prev + cur); // reduce도 사용 가능
//     console.log(result); // 
// };
// add(1,2,3); // 해당 인수의 수를 ...numbers에 넣고 forEach로 반복하면서 result에 더해줌
// add(1,2,3,4,5,6,7,8,9,10);

// user 객체를 만들어 주는 생성자 함수

// function User(name, age, ...skills){ // 생성자 함수의 이름 첫글자는 대문자로 // 나머지 매개변수가 마지막에 있어야함
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }
// const user1 = new User('mike', 30, 'html', 'css');
// const user2 = new User('tom', 20, 'JS', 'React');
// const user3 = new User('jane', 10, 'English');

// console.log(user1);
// console.log(user2);
// console.log(user3);

// 전개 구문(Spread syntax) : 배열
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let result = [0, ...arr1, ...arr2, 7,8,9];
// console.log(result);
// 전개 구문(Spread syntax) : 배열
// let user = {name : 'mike'}
// let mike = {...user, age:30};
// console.log(mike);

// 전개 구문(Spread syntax) : 복제
// let arr = [1,2,3];
// let arr2 = [...arr]; // [1,2,3]

// let user = {name : 'mike', age:30};
// let user2 = {...user};

// user2.name = 'tom'; // user2의 이름을 tom으로 바꾸어도

// console.log(user.name); // 'mike' // user의 이름에는 아무 영향을 미치지 않음 별개의 user2로 복제된 것
// console.log(user2.name); // 'tom'

// 전개 구문
// arr1 을 [4,5,6,1,2,3]dmfh
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr2.reverse().forEach((num) => { // .reverse를 붙여줘야 가능
//     arr1.unshift(num); // [6,5,4,1,2,3] // 4를 넣고 그 앞에 5와 6을 차례로 집어넣기 때문에 안됨
// });

// arr1 = [...arr2, ...arr1];

// console.log(arr1);

// let user = {name : 'mike'};
// let info = {age : 30};
// let fe = ['JS', 'React'];
// let lang = ['Korean', 'English']

// user = Object.assign({}, user, info,{
//     skills : [],
// })

// fe.forEach((item)=>{
//     user.skills.push(item);
// });
// lang.forEach((item)=>{
//     user.skills.push(item);
// });

// user = {
//     ...user,
//     ...info,
//     skills : [
//         ...fe,
//         ...lang,
//     ]
// };

// console.log(user);

// 클로저 (Closure)

// 어휘적 환경(Lexical Environment)
// 코드가 실행되면 스크립트 내에서 선언한 변수들이 Lexical Environment에 올라감
// let one; // 어휘적 환경으로 올라가지만 초기화 X // 그렇기 때문에 사용 불가 // let으로 선언한 변수도 hoisting됨
// 어휘적 환경에서 아직 할당이 안되었기 때문에 one은 undefined를 가짐 // 사용을 해도 에러는 나지 않음 값이 undefined기때문
// one = 1; // 숫자 1이 할당
// function addOne(num) { // 함수 선언문은 변수와 달리 바로 초기화 됨 // 그래서 해당 위치에서도 사용 가능
//     console.log(one + num);
// }
// addOne(5); // 마지막 라인에서 함수가 실행된다 그 순간 새로운 어휘적 환경이 만들어짐 num:5
// 함수가 넘겨받은 매개변수와 지역변수들이 존재함

// function makeAdder(x){
//     return function(y){ // y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능
//         return x + y
//     }
// };

// const add3 = makeAdder(3);
// console.log(add3(2)); // add3 함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능
// 이런 것들을 closure라고 함
// 함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억하고 생성 이후에도 그 변수에 계속 접근이 가능한 기능
// 외부 함수의 실행이 끝난 이후에도 내부함수가 외부함수의 변수에 접근할 수 있음
// const add10 = makeAdder(10);
// console.log(add10(5)); // 15
// console.log(add3(1)); // 4
// 7.24 나머지 매개변수 // 전개구문 // 클로저 **********************************************************************

// setTimeout : 일정 시간이 지난 후 함수를 실행
// function fn(){
//     console.log(3)
// }
// setTimeout(fn, 3000); // 해당 코드는 3초후에 로그를 찍어줌 // setTimeout은 2개의 매개변수를 받음
// 하나는 일정시간이 지난뒤 실행되는 함수이고, 두번째는 시간을 의미
// 해당 코드는
// setTimeout(function(){
//     console.log(3)
// },3000); // 이렇게 쓸 수 있음

// function showName(name){
//     console.log(name);
// }
// const tId = setTimeout(showName, 3000, 'mike'); // 인수가 필요하면 뒤에 적을 수 있음 // 해당 인수인 mike는 함수의 첫번째 인수로 전달
// clearTimeout(tId); // 예정된 작업을 없앰 // 3초가 지나기전에 해당 코드가 실행되므로 아무일도 일어나지 않음


// setInterval : 일정 시간 간격으로 함수를 반복
// function showName(name){
//     console.log(name);
// };
// const tId = setInterval(showName, 3000, 'mike'); // 3초마다 mike가 찍힘
// clearInterval(tId);

// 주의사항 delay = 0? // 딜레이 시간이 0이어도 바로 실행되지 않음
// setTimeout(function(){
//     console.log(2)
// }, 0);
// console.log(1);
// 현재 실행중인 스크립트가 종료된 이후 스케줄인 함수를 실행하기 때문 // 브라우저는 기본적으로 4ms~의 대기시간이 있음
// 0이라고 적어도 4ms~ 혹은 그 이상이 걸릴 수도 있음

// 예제 setInterval, clearInterval

// let num = 0;
// function showTime(){
//     console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`)
//     if (num > 5) {
//         clearInterval(tId)
//     }
// }
// const tId = setInterval(showTime, 1000);

// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있음

// call : call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
// const mike = {
//     name : 'mike',
// };
// const tom = {
//     name : 'tom',
// };
// function showThisName(){
//     console.log(this.name); // 여기서 this는 window를 가리키기 때문에 window.name은 "" 빈문자열을 나타냄
// }
// showThisName();
// showThisName.call(mike); // 함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의
// // 메서드인 것 처럼 사용할 수 있음
// showThisName.call(tom);

// const mike = {
//     name : 'mike',
// };
// const tom = {
//     name : 'tom',
// };
// function showThisName(){
//     console.log(this.name); // 여기서 this는 window를 가리키기 때문에 window.name은 "" 빈문자열을 나타냄
// }
// function update(birthday, occupation){ // update함수는 birthday와 occupation을 받아서
//     this.birthday = birthday; // 해당 this의 객체의 정보를 새로운 데이터로 업데이트 해줌
//     this.occupation = occupation;
// }

// update.call(mike, 1999, 'singer') // 첫번째 매개변수는 update함수에서 this로 사용됨
// console.log(mike); // 두번째 매개변수 부터는 함수가 사용할 매개변수들을 순서대로 적은 것

// update.call(tom, 2002, 'teacher')
// console.log(tom);

// apply : 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받음

// update.apply(mike, [1999, 'singer']); // 매개변수를 배열로 넣어주면 call과 동일한 결과값이 나옴
// console.log(mike);

// update.apply(tom, [2002, 'teacher']);
// console.log(tom);

// apply는 배열요소를 함수 매개변수로 사용할 때 유용함 // 
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums); // 어플라이는 매개변수로 배열로 전달하면 그 요소들을 차례대로 인수로 사용함
// = Math.min.apply(null, [3, 10, 1, 6, 4]) 와 동일 //  앞에 null은 this로 사용된 값이고
// min이나 max는 this가 필요하지 않아서 아무값이나 넣은 것
const maxNum = Math.max.call(null, ...nums); // call은 차례대로 매개변수가 들어가야해서 spread연산자를 사용
// = Math.max.call(null, 3,10,1,6,4); 와 동일 //
// const minNum = Math.min(...nums); // spread 연산자를 활용
// const maxNum = Math.max(...nums);

console.log(minNum);
console.log(maxNum);

// bind // 함수의 this 값을 영구히 바꿀 수 있음

// const mike = {
//     name : 'mike'
// };

// function update(birthday, occupation){
//     this.birthday = birthday;
//     this.occupation = occupation;
// };
// const updateMike = update.bind(mike); // 이 bind는 새로 바인딩한 함수를 하나 만듦, 해당 함수는 항상 mike를 this로 받음
// updateMike(1980, 'police');
// console.log(mike);

// const user = {
//     name : 'mike',
//     showName: function(){
//         console.log(`hello, ${this.name}`);
//     }
// };
// user.showName(); // hello,mike
// let fn = user.showName;
// // fn(); // 위에서 fn을 할당할 때 this를 잃어버림
// fn.call(user); // hello,mike
// fn.apply(user); // hello,mike

// let boundFn = fn.bind(user);
// boundFn(); // hello,mike

// 상속, prototype

// const user = {
//     name : 'mike',
// };
// user.name // 'mike
// user.hasOwnProperty('name') // true
// user.hasOwnProperty('age') // false // 

// console.log(user)

const user = {
    name : 'mike',
    hasOwnProperty : function(){
        console.log('haha')
    }
}
user.hasOwnProperty(); // 객체에 해당 프로퍼티가 있으면 거기에서 탐색을 멈춤
// 없을 때만 __prototype__에서 프로퍼티를 찾음

// 해당 객체들의 공통된 부분을 해결하는 방법 // 상속
// const car = {
//     wheels : 4,
//     drive() {
//         console.log('drive..');
//     },
// };

// const bmw = {
//     color : 'red',
//     navigation : 1,
// };
// const benz = {
//     color : 'black',
// };
// const audi = {
//     color : 'blue',
// };

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// console.log(bmw.color); // red
// console.log(bmw.wheels); // undefined
// console.log(bmw)

// const x5 = {
//     color : 'white',
//     name : 'x5',
// };
// x5.__proto__ = bmw; // 상속은 계속 이어질 수 있음
// x5.color // 'white'
// x5.name // x5
// x5.wheels // 4 // 상속받은 prototype을 계속 올라가 wheels를 찾음 이것을 Prototype Chain이라고 함

// for..in을 통해 객체 프로퍼티를 순회
// for(p in x5){
//     console.log(p)
// }
// for(p in x5){
//     if(x5.hasOwnProperty(p)){
//         console.log('o', p);
//     } else {
//         console.log('x', p)
//     }
// } // for..in 문 안에서 구분하는 법
// Object.keys(x5);
// Object.values(x5); // keys나 values등 값과 관련된 객체 내장 메서드는 상속된 프로퍼티는 나오지 않음

// const car = {
//     wheels : 4,
//     drive(){
//         console.log('drive..')
//     },
// };

// const Bmw = function (color) {
//     this.color = color;
// };

// Bmw.prototype.wheels = 4; // 생성자 함수가 생성하는 객체에 __proto__를 해당 구문에 맞춰서 설정한다는 의미
// Bmw.prototype.drive = function() {
//     console.log('drive..');
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log('stop');
// }; // prototype을 이용하면 중복코드를 줄일 수 있음

// Bmw.prototype = {
//     constructor : Bmw, // 혹은 이렇게 수동으로 명시해둬도 괜찮음
//     wheels : 4,
//     drive() {
//         console.log('drive..');
//     },
//     navigation : 1,
//     stop() {
//         console.log('stop!')
//     },
// } // 이렇게 해도 동일하지만 이렇게 하면 constructor가 사라짐 이런 상황을 방지하기 위해 프로토타입을 덮어쓰지말고
// 하나씩 프로퍼티를 추가하는게 좋음

// const x5 = new Bmw('red')
// const z4 = new Bmw('blue')

// x5.stop();
// x5.__proto__ = car;
// z4.__proto__ = car; // 하지만 생성자 함수를 사용하는 것이 간편하게 만드는 것인데 이렇게 일일이 __proto__를 하면 불편함

// 생성자 함수가 새로운 객체를 만들어 낼 때 그 객체는 생성자의 instance라고 불림
// 자바스크립트에는 이를 편리하게 확인할 수 있음 instanceof 연산자가 있음
// 이를 이용해서 객체와 생성자를 비교할 수 있고,
// 이는 해당 객체가 그 생성자로부터 생성된 것인지 판단해서 true 혹은 false로 반환

// z4 // Bmw {color : 'blue'} // z4는 bmw로부터 생서되었기 때문에 z4는 bmw의 인스턴스임
// z4 instanceof Bmw // true
// z4.constructor === Bmw // 생성자로 만들어진 인스턴스객체에는 constructor라는 프로퍼티가 존재함
// 이 constructor는 생성자 즉, Bmw를 가리킴

// 자바스크립트는 명확한 constructor를 보장하지는 않음 개발자에 의해서 언제든지 수정가능

// const Bmw = function (color) {
//     this.color = color;
// };
// const x5 = new Bmw('red'); // 만들어진 자동차의 색상을 마음대로 변경할 수 있음
// x5.color // 'red' 지만
// x5.color = 'black'
// x5.color // 'black' // 하지만 이렇게 바꾸면 안되기 때문에 클로저를 이용

// const Bmw = function(color) {
//     const c = color;
//     this.getColor = function() {
//         console.log(c);
//     };
// }; // 이런식으로 코드를 짜면 초기에 세팅했던 color값을 얻을 수만있고 바꿀 수는 없음

// 7.25 setTimeout, setInterval / call,apply,bind / 상속 prototype *********************************************

// class

// const User = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.showName = function () {
//         console.log(this.name);
//     };
// };
// const mike = new User('mike', 30);
const User = function (name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function () {
    //     console.log(this.name);
    // };
};
User.prototype.showName = function() {
    console.log(this.name);
}; // 생성자 함수로도 class처럼 구현 할 수 있음

const mike = new User('mike', 30);
// const mike = User('mike', 30); // 여기서 반환한 값은 undefined이고 그 값이 mike로 들어감
// 개발자가 실수한 코드지만 문제없이 돌아감

class User2 {
    constructor(name,age) { // constructor는 객체를 만들어주는 생성자 메서드
        this.name = name; // 객체를 초기화하기 위한 값이 이쪽에 정의됨
        this.age = age;
    }
    showName() { // class내에 정리한 method는 User2의 prototype에 저장됨
        // 그렇기 때문에 mike는 객체 내부에 showName이 있고 tom은 프로토타입에 showName이 있음
        console.log(this.name);
    }
}
const tom = new User2('tom', 19); // new를 통해 호출하면 자동으로 실행
// new를 통해서 호출했을 때 내부에서 정의된 내용으로 객체를 생성하는 것은 동일
// const tom = User2('tom', 19); // class는 new없이 실행할 수 없음

// mike.showName();
// tom.showName(); // 사용법은 동일

// class의 메서드는 for..in 문에서 제외됨

// extends // class 내에서의 상속
// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     };
//     drive() {
//         console.log('drive..');
//     };
//     stop() {
//         console.log('stop!');
//     };
// };

// class Bmw extends Car {
//     park() { // class내부에서 선언한 method는 프로토타입내부에 저장됨
//         console.log('park')
//     };
// };

// const z4 = new Bmw('blue');
// console.log(z4);

// 메소드 오버라이딩 // 부모클래스의 method를 사용하는 것
// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     };
//     drive() {
//         console.log('drive..');
//     };
//     stop() {
//         console.log('stop!');
//     };
// };

// class Bmw extends Car {
//     park() { // class내부에서 선언한 method는 프로토타입내부에 저장됨
//         console.log('park')
//     };
//     stop() { // 동일한 이름으로 method를 정리하면 덮어쓰게 됨
//         super.stop(); // 동일한 이름으로 method를 사용하고 싶을 때 super를 사용하면 됨
//         // 이렇게 작성하면 부모클래스인 Car의 method인 stop을 사용하게 됨
//         console.log('off');
//     }
// };

// const z4 = new Bmw('blue');
// console.log(z4);
// z4.stop();

// 생성자 오버라이딩(Overriding)

// class Car {
//     constructor(color){ // class의 constructor는 {}빈객체를 만들게 되고 this는 이 객체를 가리키게 됨
//         this.color = color;
//         this.wheels = 4;
//     };
//     drive() {
//         console.log('drive..');
//     };
//     stop() {
//         console.log('stop!');
//     };
// };

// class Bmw extends Car { // extends로 만들어진 자식 class는 빈 객체가 만들어지고 this에 할당하는 작업을 건너뜀
//     constructor(color) {
//         super(color); // 그렇기 때문에 super 키워드로 부모class의 constructor를 실행해줘야함
//         this.navigation = 1; // constructor에서 this를 사용하기전에 super.constuctor를 사용하여 부모 생성자를
//         // 반드시 먼저 호출해야함
//     }
//     park() { // class내부에서 선언한 method는 프로토타입내부에 저장됨
//         console.log('park')
//     };
// };

// const z4 = new Bmw('blue');
// console.log(z4);
// z4.stop();

// 동작 과정
// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     };
//     drive() {
//         console.log('drive..');
//     };
//     stop() {
//         console.log('stop!');
//     };
// };

// class Bmw extends Car {
//     // constructor(...args) { // constructor가 없으면 이렇게 해당 부분이 있는 것처럼 행동함
//     //     super(...args); // 그렇기 때문에 자식 생성자는 무조건 부모 생성자를 호출 해야함
//     // }
//     constructor() { // 자식생성자에 constructor가 있으면 위처럼 처리되지 않기 때문에
//         super(); // super를 이용해서 호출해주고 this.property로 할당해줘야 함
//     }
//     park() {
//         console.log('park')
//     };
// };

// Promise
// 예를 들어 상점에 고객이 주문한 물건이 준비가 다 되었는지 알려주는 것?
// const pr = new Promise((resolve, reject) => { // 함수로 전달받는데 resolve는 성공한 경우, reject는 실패한 경우
//     // 여기서 이렇게 어떤일이 완료된 이후 실행되는 함수를 callback함수라고 한다
//     // code
// });
// new Promise 생성자가 반환하는 프로미스 객체는 
// state : pending(대기) , result : undefined를 프로퍼티로 받음
// 여기서 state는 초기에 pending이었다가 resolve(value)가 호출되면 즉,
// 성공을 하게되면 state : fulfilled(이행됨)이 되고 이때 result는 resolve함수로 전달된 값이 됨
// 만약 reject가 호출 되면 state : rejected(거부됨)이 되고 이때 result는 rejected함수로 전달된 error이다

// 판매자의 코드
// const pr = new Promise((resolve, reject) => { // 성공했을 시에 코드
//     setTimeout(() => {
//         resolve('ok')
//     },3000)
// });
// 해당 코드는 3초후에 state가 pending이었다가 fulfilled(이행됨)으로 전환됨
// result는 undefined였다가 'ok'가 됨

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('error..'))
//     }, 3000)
// });
// 해당코드는 3초후에 rejected로 바뀜
// result는 undefined였다가 3초후에 error가 됨

// 소비자의 코드
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok');
//     }, 3000);
// });
// pr.then ( // then을 이용해서 result와 reject를 처리할 수 있음
//     function(result){}, // promise가 이행되었을 때 실행되는 함수 // result에는 'ok'라는 값이 들어감
//     function(err){} // 거부되었을 떄 실행되는 함수 // err에는 error값이 들어감
// );
// 이를 작성하면

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok') // resolve로 실행되었기 때문에
//     }, 3000);
// });

// pr.then(
//     function(result){
//         console.log(result + '가지러 가자.');
//     },
//     function(err){ // 이 상황에서는 이 함수는 실행되지 않음
//         console.log('다시 주문해주세요...');
//     }
// );

// .then 이외에 사용할 수 있는 것
// .catch는 에러가 발생한 경우 즉, reject인 경우에만 실행됨

// pr.then (
//     function(result){},
//     function(err){}
// ); // 해당 코드는 catch를 사용해서

// pr.then (
//     function(result){}
// ).catch (
//     function(err){} // 2번째로 전달했던 함수를 catch안으로 넣어줌 위 코드와 동일하게 동작함 하지만
//     // catch로 명확하게 구분해주는게 가독성에 좋고 // 이런 경우 첫번째 함수를 실행했다가 발생하는 에러도
//     // 잡아줄 수 있기 때문에 catch문을 사용하는 것이 좋음
// ); // 로 바꿀 수 있음

// finally // 이행이든 거부든 처리가 완료되면 항상 실행되는 키워드
// pr.then(
//     function(result){}
// ).catch(
//     function(err){}
// ).finally(
//     function(){
//         console.log('--- 주문 끝 ---')
//     }
// ); // 로딩화면 같은게 없을 때 유용함

// 예제

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('ok');
//         reject(new Error('error...'));
//     }, 1000);
// });

// console.log('시작')
// pr.then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('끝');
// });

// const f1 = (callback) => {
//     setTimeout(function() {
//         console.log('1번 주문 완료');
//         callback();
//     }, 1000);
// }; // 1번 주문

// const f2 = (callback) => {
//     setTimeout(function() {
//         console.log('2번 주문 완료');
//         callback();
//     }, 3000);
// }; // 2번 주문

// const f3 = (callback) => {
//     setTimeout(function() {
//         console.log('3번 주문 완료');
//         callback();
//     }, 2000);
// }; // 3번 주문

// Promise 사용 x

// console.log('시작')
// f1(function() {
//     f2(function(){
//         f3(function(){
//             console.log('끝');
//         });
//     });
// }); // 이렇게 뎁스가 깊어지면서 계속 callback을 호출하는 것을 callback hell 혹은 콜백지옥이라고 부름

// Promise 사용 o

// const f1 = () => {
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res('1번 주문 완료')
//             // rej(new Error('xx'))
//         }, 1000);
//     })
// }; // 1번 주문
// const f2 = (message) => {
//     console.log(message)
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res('2번 주문 완료')
//             // rej(new Error('xx'))
//         }, 3000);
//     })
// }; // 2번 주문
// const f3 = (message) => {
//     console.log(message)
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res('3번 주문 완료')
//         }, 2000);
//     })
// }; // 3번 주문

// 프로미스 체이닝(Promise Chaining) // Promise가 다중연결 되는 것 
// console.time('시작')
// f1()
//     .then((res) => f2(res))
//     .then((res) => f3(res))
//     .then((res) => console.log(res))
//     .catch(console.log) // error 처리
//     .finally(() => {
//         console.timeEnd('시작');
//     }); // 가져온 데이터 순으로 화면을 그릴 수는 있음

// Promise.all // rej 나오는 순간 값이 Error만 뜸 // 모든 작업이 완료될 때까지 기다림
// console.time('x')
// Promise.all([f1(), f2(), f3()])
// .then((res) => {
//     console.log(res);
//     console.timeEnd('x');
// }); // 하나의 정보라도 누락될 때 페이지를 보여주면 안되는 경우 사용 가능

// Promise.race // 하나라도 1등으로 완료되면 끝 // 
// console.time('x')
// Promise.race([f1(), f2(), f3()])
// .then((res) => {
//     console.log(res);
//     console.timeEnd('x');
// }); // 용량이 큰 이미지를 로딩할 때 하나라도 완료되면 그 이미지를 보여줄 때 자주 사용됨

// f1()
//     .then((result) => {
//         console.log(result);
//         return f2();
//     })
//     .then((result) => {
//         console.log(result);
//         return f3();
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('주문 처리 중 에러 발생:', error);
//     })
//     .finally(() => {
//         console.log('모든 주문 처리 완료');
//     });

// async, await

// async function getName() { // 해당 함수 앞에 async를 붙이면 항상 Promise를 반환함
//     return 'mike';
// };
// console.log(getName());
// getName().then((name) => {
//     console.log(name);
// });

// async function getName() { // 해당 함수 앞에 async를 붙이면 항상 Promise를 반환함
//     return Promise.resolve('tom'); // 만약에 return값이 Promise면 이 값을 그대로 사용함
// };
// console.log(getName());
// getName().then((name) => {
//     console.log(name);
// });

// async function getName() {
//     throw new Error('error..'); // 함수 내부에서 예외가 발생하면 rejected상태의 Promise가 반환됨
// };
// getName().catch((name) => { // catch로 확인 가능
//     console.log(name);
// });
// getName().then((name) => {
//     console.log(name);
// });

// await // 해당 키워드는 async 내부에서만 사용 가능

// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }

// async function showName(){
//     const result = await getName('mike'); // await는 getName에서 resolve된 값을 기다렸다가 result에 넣어줌
//     console.log(result);
// }
// console.log('시작');
// showName();

const f1 = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료')
            // rej(new Error('xx'))
        }, 1000);
    })
}; // 1번 주문
const f2 = (message) => {
    console.log(message)
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료')
            // rej(new Error('xx'))
        }, 3000);
    })
}; // 2번 주문
const f3 = (message) => {
    console.log(message)
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료')
        }, 2000);
    })
}; // 3번 주문

// async function order() {
//     try { // error가 발생하면 try .. catch 문으로 감싸줌
//         const result1 = await f1();
//         const result2 = await f2(result1);
//         const result3 = await f3(result2);
//         console.log(result3);
//     } catch (e) { // 윗 부분을 실행하고 error가 발생하면 여기서 알 수 있음
//         console.log(e);
//     }
//     console.log('종료');
// }

// async function order() {
//     try {
//         const result = await Promise.all([f1(), f2(), f3()])
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('종료');
// }
// order();

// generator // 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// function* fn() { // function 옆에 *을 써서 만들고
//     yield 1; // 내부에 yield 키워드를 사용함 // yield에서 함수의 실행을 멈출 수 있음
//     yield 2;
//     yield 3;
//     return 'finish';
// }
// const a = fn(); // generator 함수를 실행하면 generator 객체가 반환됨
// generator 객체는 next 메소드가 있음

// function* fn() {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return 'finish';
// }
// const a = fn();
// console.log(a); // generator 객체만 반환되고 함수 본문 코드는 아직 실행되지 않음
// a.next(); // 가장 가까운 yield문을 만날 때까지 실행되고 데이터 객체를 반환함
// 반환된 데이터 객체는 value와 done이라는 property를 가지는데 여기서 done 은 yield의 오른쪽 값임
// yield의 값을 생략하면 undefined임 // 해당 done은 이름 그대로 함수코드가 끝났는지를 나타내며
// 함수코드가 끝났으면 true, 그렇지 않으면 false를 나타냄
// a.next();
// a.next();

// generator 메서드 종류 next, return, throw

// a.return('end'); // 실행하다가 return 메서드를 호출하면 그 즉시 done의 속성값이 true가 됨
// 이후에 next를 실행해도 value를 얻을 수 없고 done은 true임

// function* fn() {
//     try {
//         console.log(1);
//         yield 1;
//         console.log(2);
//         yield 2;
//         console.log(3);
//         console.log(4);
//         yield 3;
//         return 'finish';
//     } catch (e) {
//         console.log(e)
//     }
    
// }
// const a = fn();
// a.next();
// a.next();
// a.throw(new Error('error..')); // catch문에 있는 내용이 실행됨 error로그가 찍히고 done은 true가 됨
// a.next(); // 이미 끝나고 아무값도 받을 수가 없음

// generator
// iterable // 반복이 가능하다는 의미 // 몇가지 조건이 있어야 함
// Symbol.iterator 메서드가 구현되어 있어야함 // 해당 메서드로 호출한 결과는 iterator라고 함
// iterator는 value와 done 프로퍼티를 반환하는 next 메서드가 있어야함
// 그러므로 generato는 iterator이면서 iterable임

// const arr = [1,2,3,4,5];
// const it = arr[Symbol.iterator]();
// it.next(); // value : 1 , done : false
// it.next(); // value : 2 , done : false
// it.next(); // value : 3 , done : false
// it.next(); // value : 4 , done : false
// it.next(); // value : 5 , done : false
// it.next(); // value : undefined , done : true
// 아까 봤듯이 배열은 Symbol.iterator라는 메서드를 가지고 있고 이 메서드가 반환하는 값이 iterator이므로
// iterable 하다고 할 수 있음 즉, 배열은 반복가능한 객체이다.
// for(let num of arr) {
//     console.log(num)
// } // iterable은 for..of를 이용해서 순회할 수 있음

// function* fn() {
//     yield 4;
//     yield 5;
//     yield 6;
// }
// const a = fn();
// a[Symbol.iterator]() === a; // true // 이는 즉, generator에 Symbol.iterator를 실행한 값은 자기 자신이다.
// 즉 generator는 iterable 객체인 것
// for(let num of a) {
//     console.log(num);
// } // for..of가 시작이되면 Symbol.iterator이 호출이 되고 만약에 없으면 error를 발생함
// 반환된 iterator에 next메서드를 호출하면서 done이 true가 될 때까지 반복함

// const str = 'hello';
// const xx = str[Symbol.iterator]();
// for(let s of xx) {
//     console.log(s);
// } // 문자열도 동일하게 동작됨 // 문자열도 iterable임

function* fn() {
    const num1 = yield '첫번째 숫자를 입력해주세요';
    console.log(num1);

    const num2 = yield '두번째 숫자를 입력해주세요';
    console.log(num2);
    
    return num1 + num2
}

const a = fn();
a.next(); // value:'첫번째 숫자를 입력해주세요' , done:false
a.next(2); // 인수로 넣어준 숫자는 num1에 저장이 됨
a.next(4); // num2값이 4 // 더이상 yiedl가 없으니까 done은 true가 됨 // value는 두 숫자를 더한 값이 나옴
// 이렇게 generator는 외부로부터 값을 입력받을 수 있음
// generator는 값을 미리 만들어두지 않기 때문에 메모리 관리 측면에서 효율적임 // 필요한 순간에만 연결해서 값을 줌

function* fn2() {
    let index = 0;
    while (true) { // while(true)문을 사용해서 무한반복해도 브라우저가 뻗지 않음?
        yield index++; // b.next로 호출할 때마다 값을 주기 때문
    } // generator를 사용하지 않으면 브레이크 없는 while(true)문은 사용하면 안됨
}
const b = fn2();
// generator는 필요한 값만 그때그때 생성함

function* gen1() {
    yield 'w';
    yield 'o';
    yield 'r';
    yield 'l';
    yield 'd';
};
function* gen2() {
    yield 'hello,';
    yield* gen1(); // 반복가능한 모든객체가 올 수 있음
    yield '!';
}
console.log(...gen2()); // 여기서 ... 구조 분해 할당을 사용하면 for..of와 마찬가지로 done이 true가 될 때까지
// 값을 펼쳐주는 역할을 함

// generator는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행
// ex) Redux Saga

// 7.26 class, Promise, async, await, generator 코딩앙마 중급 강좌 완 **********************************************