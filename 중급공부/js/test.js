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