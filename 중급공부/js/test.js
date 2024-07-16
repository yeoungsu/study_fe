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
function add(num1, num2){
    var result = num1 + num2; // 유일하게 함수 스코프에서는 var도 밖에서 사용 불가능
}
add (2,3);
console.log(result);

// 7.16 변수 **************************************************************************************************