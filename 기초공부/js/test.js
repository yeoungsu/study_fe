// const name = "mike"; // 문자형 String

const name1 = "mike"
const name2 = 'mike'
const name3 = `mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

// const message3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살 입니다.`
console.log(message4);

// const age = 30; // 숫자형 Number
const PI = 3.14; // 파이

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const x = 1/0; // ???
console.log(x)

// const y = name/2;

// console.log(y) // NaN = Not a number 숫자가 아니라는 뜻

// Boolean 논리적인 요소를 나타냄

// const a = true; // 참
// const b = false; // 거짓

// console.log(name == 'mike');
// console.log(age > 40);

// null(존재하지 않음) 과 undefined(값이 할당되지 않음)

// let age;
// let user = null; // user는 존재하지 않음 이라는 의미

//typeof 연산자 // 다른 개발자가 작성한 변수의 타입을 알아야 하거나 API통신을 통해 받아온 데이터를 타입에 따라
// 다른방식으로 처리해야 할 때 많이 사용됨

console.log(typeof 3);
// console.log(typeof name);
console.log(typeof true);
console.log(typeof 'xxx');
console.log(typeof null); // "object" 객체형을 의미함 // null = 객체 -> 가 아님
console.log(typeof undefined);

// const message3 = "My name is ${name}"; 일반 따옴표를 사용하게 되면
// console.log(message3); 을 했을 때 My name is ${name}으로 출력되니 주의할 것

const a = "나는 ";
const b = " 입니다.";

// console.log(a + name + b);

//const age = 30 // number // 숫자는 문자형으로 변환이 될 수 있음
// console.log(a + age + "살" + b); // 문자형으로 변환

// alert 무언가를 알려주는 역할 // 메시지를 보여줌
// prompt 무언가를 입력받는 역할 // 사용자에게 메시지를 보여주고 어떤 값을 입력받을 수 있는 필드를 제공
// 취소를 누르면 null이 나오고, 두번째 인수를 넣으면 디폴트값을 제공해줄 수 있음
// confirm 무언가를 확인받는 역할 // 사용자에게 확인을 받기위한 용도로 사용됨
// 확인을 눌렀을 시에는 true가 뜨고 취소를 누르면 false를 뜸

// alert("비밀번호가 틀렸습니다.")

// const nametype = prompt("이름을 입력하세요.");
// alert("환영합니다, " + nametype + "님");

// alert("환영합니다, " + nametype + "님");

// const name = prompt("예약일을 입력하세요.", "2020-10-"); // 디폴트값을 미리 넣어줄 수 있음
// console.log(name);

// confirm() 확인과 취소버튼이 함께 있음 확인을 눌렀을 시에는 true가 뜨고 취소를 누르면 false를 뜸
// 해당 결과를 통해 다른 액션을 취할 수 있음
// const isAdult = confirm("당신은 성인 입니까?");

// console.log(isAdult)

// 단점
// 1. 창이 떠있는동안 스크립트가 일시 정지됨
// 2. 스타일링 X 위치와 모양을 정할 수 없고 브라우저마다 디자인이 조금씩 다름

// 형 변환

//String() -> 문자형으로 변환
//Number() -> 숫자형으로 변환 -> 숫자가 아닌 문자가포함 되어있다면 NaN이 됨
// 주의사항 Number(null) -> 0이 됨 Number(undefined) -> NaN 이 됨 외우기
// Number(0) -> false 지만 Number("0") -> true 임 또 Number("") -> false 지만 Number(" ") -> true 임
//Boolean() -> 불린형으로 변환 -> 0, "", null, undefined, NaN -> false 가 됨 이외에는 true

// const mathScore = prompt("수학 점수를 입력해주세요.");
// const engScore = prompt("영어 점수를 입력해주세요.");
// const result = (mathScore + engScore) / 2;

// prompt로 입력받은 값은 문자형이다. -> 숫자형이 아니어도 나누기같은 표현식은 숫자로 계산 
// "6" / "2" = 3 이러한 과정을 자동 형변환이라고 한다. -> 이러한 작업은 원인을 찾기힘든 에러를 발동시킬 수 있음
// 항상 의도를 가지고 원하는 타입으로 변환시키는 것이 좋음 -> 이것을 명시적 형변환이라고 함

console.log(  // console.log 는 ,를 사용하여 여러가지 값을 한번에 찍을 수 있음
String(3), // 숫자 3은 문자열 3
String(true), // 각각 문자열로
String(false), // 각각 문자열로
String(null), // 각각 문자열로
String(undefined), // 각각 문자열로
);

console.log(
    Number("1234"), // 문자열 1234가 숫자 1234로 변환 // 문자열안에 글자가 들어있으면 NaN이 됨
    Number(true),
    Number(false) // true 와 false는 숫자형으로 변환시 각각 0과 1로 변환
)

console.log(
    Boolean(1),
    Boolean("123"),
    Boolean("javascript"),
)
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
) // 해당 케이스 이외에는 다 true
// false 의 케이스만 기억하면 됨

// console.log(result);

// 연산자 +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지)
// %(나머지)를 어디에 쓸까?
// 홀수:: X % 2 = 1
// 짝수 : Y % 2 = 0
// 어떤 값이 들어와도 5를 넘기면 안되는 조건부 -> X % 5 = 0~4 사이의 값만 변환

// 거듭제곱 *를 2번 **
// const num = 2**3
// console.log(num); // 8

// 우선순위
// *, / 은 +, -보다 우선순위가 높다

// 연산자 줄여서 쓰기
// let num = 10;
// num = num + 5;
// num += 5;
// num *= 5;
// num /= 5;
// num -= 5;
// num %= 5;

// console.log(num);

// 증가 연산자, 감소 연산자 -> 값을 1만큼 증가시키거나 감소시킴

// let num = 10;
// let result = num++; // 연산자를 뒤에쓰냐 앞에쓰냐에 따라 결과가 다름
// let result = ++num; // 뒤에 적으면 증가시키기전의 값을 result에 넣음

// console.log(result);

// 비교 연산자, 조건문

// 비교 연산자 <, >, <=, >=, ==, !=
// a == 3 -> a는 3과 같다
// a != 3 -> a는 3과 다른가? 비교연산자를 사용하면 값을 반환하는데 반환값은 항상 boolean형임

// console.log(10 > 5);
// console.log(10 == 5); //동등연산자
// const a = 1;
// const b = "1";
// console.log(a == b); -> true // 숫자형과 문자형을 써도 같다고 표현
// console.log(a === b); -> false // =을 3개를 쓰면 타입까지 비교 // 일치 연산자
// 가급적 타입까지 비교해주는 일치 연산자를 사용하는 것이 좋음

// console.log(10 != 5);

// 조건문 -> 어떤 조건에 따라 이후 행동이 달라지게 만들어주는 역할

// if 괄호 안에 들어가는 조건을 평가해서 true 면 실행

// if에서 ()안의 값은 항상 boolean형으로 변환한뒤 판단함
// if(age > 19){
//     console.log("환영합니다.");
// };
// if(age <= 19){
//     console.log("안녕히가세요.");
// };

// else는 if문의 조건이 false일 때 실행 됨

// const age = 30;
// const age = 10;

// if(age > 19){
//     console.log("환영합니다.");
// } else {
//     console.log("안녕히가세요.");
// };
// if(age <= 19){
//     console.log("안녕히가세요.");
// };

// 추가 요구사항 : 19살이면 수능 잘치세요 라는 문구를 보여주세요
// age === 19;

// const age = 19;

// if(age > 19){
//     console.log("환영합니다.");
// } else if(age === 19) {
//     console.log("수능 잘치세요.");
// } else {
//     console.log("안녕히가세요.");
// };

// console.log('-----------------------------');

// 논리 연산자
// ||(or) -> 여러개 중 하나라도 true 면 true 즉, 모든값이 false 일때만 false를 반환
// or는 첫번째 true를 발견하는 즉시 평가를 멈춤 ex) 스티브 잡스는 남자(true)// 이거나 OR, 한국인 이거나, 군인 이거나
// && (and) -> 모든값이 true 면 true 즉, 하나라도 false 면 false 를 반환
// and는 첫번째 false를 발견하는 즉시 평가를 멈춤 ex) 스티브 잡스는 남자 이고and, 한국인(false) 이며,// 군인인 동시에
// ! (not) -> true 면 false, false면 true

// 평가
// 운전면허가 있고(전체 군인의 80%) 시력이 좋은(전체 군인의 60%) 여군(전체 군인의 7%)
// -> 여군인데 시력이 좋고 운전면허가 있는 사람으로 순서를 조정해서 코딩하는 것이 좋음 시간을 눈에 띄게 줄일 수 있어
// 성능 최적화에 도움이 됨

// ||(or) -> a||b // a 나 b 중 true 가 있으면 true
// &&(and) -> a&&b // a 와 b 둘 다 true 이면 true
// !(not) -> !a // a가 false 이면 true

// or 예제
// 이름이 TOM 이거나, 성인이면 통과

// const name = "mike";
// const age = 30;

// if(name === "TOM" || age > 19){
//     console.log("통과");
// }
// and 예제
// 이름이 mike 이고, 성인이면 통과

// if(name === "mike" && age > 19){
//     console.log("통과");
// } else {
//     console.log("돌아가.")
// }
// ! 예제
// 나이를 입력받아 성인 아니면 돌아가라고..

// const age = prompt('나이가...?');
// const isAdult = age > 19;

// if(!isAdult){
//     console.log("돌아가..")
// };

// 우선순위
// 남자이고, 이름이 mike 이거나 성인이면 통과 // &&가 ||보다 높음

// const gender = 'f';
// const name = 'jane';
// const isAdult = true;

// //if(gender === 'm' && name === 'mike' || isAdult){ // 해당 코드와 아래 코드는 동일
// if((gender === 'm' && name === 'mike') || isAdult){
// // if(gender === 'm' && (name === 'mike' || isAdult)){ // 의도한 바로 만들려면 해당 코드처럼 묶어줘야함
//     console.log('통과')
// } else {
//     console.log("돌아가..")
// }

// 7월 12일 - 비교 연산자 까지 공부 *********************************************************************************

// 반복문 -> 동일한 작업을 여러번 반복
// 1부터 10까지 로그를 찍어주세요.
// for
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// };
//조건을 확인해서 false 이면 반복문을 빠져나옴

//while
// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// };

// do..while // while반복문과의 차이는 적어도 한번은 실행 함
// let i = 0;
// do{
//     i++;
// }while(i < 10)

// 반복문을 빠져나오는 방법

// break -> 멈추고 빠져나옴
// while(true) { // while(true)는 무한반복 되기 때문에 조심해서 사용
//     let answer = confirm("계속할까요?");
//     if(!answer){ // brake를 만나려면 !answer가 false가 되어야함
//         break;
//     }
// };

// continue -> 멈추고 다음 반복으로 진행
// 예시 // 짝수만
for(let i = 0; i < 10; i++){
    if(i%2){ // 처음에 i가 0이기 때문에 continue문을 만나지 못하고 console을 찍음 
        // 그 후에 i가 1로 증가되고 2로 나누지 못하기 때문에 continue문을 만나게 돼서 log를 찍지않고 반복함
        continue;
    }
    console.log(i)
};

// 명확한 횟수가 정해져있으면 for문을 그러지 않는다면 while을 사용하는 것이 좋음
// 반복문은 코드를 줄이기 위한 좋은 코드임

// switch -> if else를 알고 있다면 알 필요 없음 그 이유는 모든 switch문은 if else로 작성할 수 있기 때문
// 그런데 쓰는 이유는 케이스가 다양 할 경우 보다 간결하게 쓸 수 있는 장점이 있음

// swith(평가){
//      case A :
//      // A일때 코드
//      case B :
//      // B일때 코드
//      ...
// }

// 이걸 if else문으로 작성하면은
// if(평가 == A){
//      // A일때 코드
//} else if(평가 == B){}
//      // B일때 코드
//}

// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고싶은 과일을 물어보고 가격 알려주기

// let fruit = prompt("무슨 과일을 사고 싶나요?");

// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//         break;
//     case '바나나' :
//         console.log('200원 입니다.');
//         break;
//     case '키위' :
//         console.log('300원 입니다.');
//         break;
//     case '멜론' :
//     case '수박' :
//         console.log('500원 입니다.');
//         break;
//     // case '수박' :
//     //     console.log('500원 입니다.');
//     //     break;
//     default :
//         console.log('그런 과일은 없습니다.')
// };

// 함수 (function) -> 팝업을 띄우거나 결제를 하는 둥 해당 코드를 여러군데에 사용할 때 편리하게 하는 것?
// console, alert, confirm
// 함수 작성법
// 함수 함수이름 (매개변수 // 매개변수가 여러개면 쉼표로 구분할 수 있음) {}
// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }

// 매개변수 없고 error 메세지를 보여주는 함수
// function showError() {
//     alert('에러가 발생했습니다. 다시 시도해주세요.');
// };
// showError();

// 어려운? 기능을 다양한 곳에 사용하기 용이함 // 유지보수가 편함

// 매개변수가 있는 함수
// function sayHello(name) {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };
// sayHello('mike');
// sayHello('tom');
// sayHello('jane');

// 만약 사용자의 이름을 모를 때
// function sayHello(name) {
//     console.log(name) // 매개변수가 없을 때 name은 undefined로 찍히기 때문에 log가 Hello로만 찍힘
//     let msg = `Hello`;
//     if(name) {
//         msg = `Hello, ${name}`;
//     }
//     console.log(msg);
// };
// sayHello();
// sayHello('mike');
// function sayHello(name) {
//     let msg = `Hello`;
//     if(name) {
//         // msg += ', ' + name; 
//         msg += `, ${name}`; // 2가지로 식을 쓸 수 있음
//         // msg에 name을 더해서 다시 msg로 넣어줌 ex) name = mike 로 매개변수가 들어가면 msg + name으로
//         // Hello mike로 msg에 적용됨
//     }
//     console.log(msg);
// };
// sayHello();
// sayHello('mike');

// 함수 내부에서 사용하는 변수를 지역변수라고 함 // 함수 안에서만 사용할 수 있음
// console.log(msg); // 찾을 수 없다고 뜸 // 해당 변수를 사용하려면 함수 바깥으로 빼줘야함

// let msg = 'Hello'; // 이렇게 어디서나 접근 할 수 있는 변수를 전역 변수라고 한다 (global variable)
// console.log('함수 호출 전');
// console.log(msg);

// function sayHello(name){
//     if(name){
//         msg += `, ${name}`;
//     }
//     console.log('함수 내부');
//     // 함수 내부에서만 접근할 수 있는 변수를 지역변수라고 함 (local variable)
//     console.log(msg);
// }
// // 함수 내부에서 나온 값은 처음 let msg 에 저장이 되기 때문에 함수 호출 후에도 Hello, mike 라고 결과값이 나옴
// sayHello('mike');
// console.log('함수 호출 후');
// console.log(msg)

// 전역 변수와 지역 변수

// let msg = 'welcome'; // 전역 변수
// console.log(msg);

// function sayHello (name) {
//     let msg = 'Hello' // 지역 변수
//     console.log(msg + ' ' + name);
// }
// // 함수 내부에서 let으로 전역 변수와 동일하게 설정할 수 있고 서로 간섭을 하지 않는다는 것을 알 수 있음
// sayHello('mike');
// console.log(msg);

// let name = 'mike';

// function sayHello(name) {
//     console.log(name)
// }
// // 매개 변수로 받은 값은 복사된 후 함수의 지역 변수가 됨 전체 서비스에서 공통으로 바라봐야하는 변수를 제외하고는 지역변수를
// // 쓰는 습관을 들이는 것이 좋음 전역 변수가 많아지면 관리가 힘들어지기 때문
// // 함수에 특화된 지역 변수를 가급적 사용하는 것이 좋음
// sayHello();
// sayHello('jane');

// OR
// function sayHello(name) {
//     let newName = name || 'friend';
//     let msg = `Hello, ${newName}`
//     console.log(msg)
// }

// sayHello();
// sayHello('jane');

// default value // 매개 변수에 기본 값 설정
// function sayHello(name = 'friend') {
//     let msg = `Hello, ${name}`
//     console.log(msg)
// }

// sayHello();
// sayHello('jane');

// return 으로 값 변환
// function add(num1, num2){
//     return num1 + num2; // return을 적어주면 오른쪽에 있는 값을 반환해줌
// }

// const result = add(2,3); // 3을 result에 반환
// console.log(result);

// function showError(){
//     alert('에러가 발생했습니다.');
//     return; // return만 있어도 undefined를 반환 // return문이 있으면 그 즉시 오른쪽에 있는 값을 반환하고 종료함
//     // 함수를 종료하는 목적으로도 사용하기도 함
//     alert('이 코드는 절대 실행되지 않습니다.'); // 그렇기 때문에 해당 코드는 실행되지 않음
// }
// const result = showError();
// console.log(result);
// return문이 없는 함수도 항상 undefined를 반환함

// 함수
// 함수는 한번에 한작업에 집중 // 하나의 함수가 여러작업을 진행하면 함수를 더 잘게 나눠서 쓰는게 좋음
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍 // showError -> 에러를 보여줌 // getName -> 이름을 얻어옴
//  createUserData -> 유저데이터 생성 // checkLogin -> 로그인 여부 체크

// 7월 13일 - 함수 공부 *********************************************************************************

// 함수 선언문 과 함수 표현식의 차이 // 호출할 수 있는 타이밍
// 함수 선언문은 어디서든 호출 가능 // 자바스크립트는 위에서 아래로 차례로 한줄씩 읽으면서 실행
// 예를 들어
// sayHello();
// function sayHello(){
//     console.log('Hello');
// } // 해당 코드가 실행되는 이유는 자바 스크립트 내부 알고리즘 때문 // 자바스크립트는 실행 전 초기의 단계에서 코드의 모든
// 함수 선언문을 찾아서 생성해 놓음, 즉 눈으로 봤을 때는 해당 코드만큼 이지만 실제 사용 가능 범위는 코드 위쪽 까지이다.
// 이를 호이스팅(Hoisting)이라고한다.

// 이렇게 순차적으로 실행되고 즉시 결과를 반환하는 프로그램의 언어를 // 인터프리터 언어(Interpreted language)라고 함

// 함수 표현식 // 코드에 도달하면 생성 // 자바스크립트가 한줄씩 읽으면서 실행 하고 해당 코드에 도달해서야 비로소 생성됨
// 그렇기 때문에 그 이후에만 사용할 수 있음
// let sayHello = function(){
//     console.log('Hello');
// }

// 화살표 함수(arrow function)
// let add = function(num1, num2) {
//     return num1 + num2;
// } 해당 코드를 화살표 함수로 바꾸면
// let add = (num1, num2) => {
//     return num1 + num2;
// } 로 바꿀 수 있음
// let add = (num1, num2) => (
//     num1 + num2;
// ) 코드 본문이 한줄이고 리턴문이 있기 때문에 중괄호가 아닌 일반괄호로 바꿀 수 있음
// let add = (num1, num2) => num1 + num2; // 리턴문이 한줄이라면 괄호도 생략할 수 있음
// let sayHello = name => `Hello, ${name}`; // 인수가 딱 하나면 괄호도 생략할 수 있음

// let showError = () => {
//     alert('error!');
// } // 인수가 없는 함수라면 괄호 생략 불가
// let add = function(num1, num2){
//     const result = num1 + num2;
//     return result;
// } // return문이 있다고해도 return전에 여러줄의 코드가 있을 경우 일반 괄호를 사용할 수 없음
// let add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// } // 사용한다면 이런식으로 사용

// 함수 표현식
// showError();

// let showError = function(){
//     console.log('error');
// }

// 함수 선언문
// showError();
// function showError() {
//     console.log('error');
// }

// 화살표 함수
// let showError = () => {
//     console.log('error');
// }

// const sayHello = function(name) {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// } // 해당 함수를 화살표 함수로
// const sayHello = (name) => {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }

// const add = function (num1, num2) {
//     const result = num1 + num2;
//     return result;
// } // 해당 함수를 화살표 함수로
// const add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// } // return문을 한줄로
// const add = (num1, num2) => num1 + num2;

// 객체(object)
// 하나의 superman이 있음 이름은 clark고 나이는 33이다. // 해당 문장을 객체로 만들면
// const supermand = {
//     name : 'clark',
//     age : 33, // 마지막은 쉼표로 구분하는게 삭제 수정에 용이함
// } // 객체는 중괄호로 작성하고 그 안에는 키(key)와 값(value)으로 구성된 프로퍼티가 들어감
// 해당 객체에 접근
// superman.name // 'clark'
// superman['age'] // 33

// 해당 객체에 추가
// superman.gender = 'male';
// superman['haircolor'] = 'black';
// // 접근이나 추가 할 때는 .이나 [] 사용 가능

// 해당 객체에 삭제 // 삭제는 delete 키워드를 사용
// delete superman.haircolor;

// object - 단축 프로퍼티
// const name = 'clark';
// const age = 33;
// const superman = {
//     name, // name : name
//     age, // age : age
//     gender : 'male',
// }

// const superman = {
//     name : 'clark',
//     age : 30,
// }
// superman.hairColor = 'black'; // 추가
// superman['hobby'] = 'football'; //추가
// delete superman.age; // 삭제
// console.log(superman);
// console.log(superman.name);
// console.log(superman['age'])

// object - 프로퍼티 존재 여부 확인
// const superman = {
//     name : 'clark',
//     age : 33,
// }
// superman.birthDay; // 존재하지 않는 프로퍼티에 접근하면 undefined 가 뜸
// 'birthDay' in superman; // false
// 'age' in superman; // true // in 연산자를 사용하면 존재하는지 확인할 수 있음
// 어떤 값이 나올지 확실할 수 없을 때 in 연산자를 사용 // 함수 인자로 봤거나 API 통신을 통해 데이터를 받을 때 등

// 이름과 나이를 받아서 객체로 만드는 함수
// function makeObject(name, age){
//     return {
//         name : name,
//         age : age,
//         // name, // 프로퍼티 이름과 변수 이름이 동일 할 때는 축약해서 사용 가능
//         // age,
//         hobby : 'football'
//     }
// }
// const mike = makeObject('mike', 30);
// console.log(mike)

// console.log('age' in mike);
// console.log('birthday' in mike);
// console.log(mike.birthday)
// console.log(mike.age)

// 객체 in
// 나이를 확인하고 성인인지 아닌지 구분하는 함수
// function isAdult(user){
//     if(user.age < 20){
//         return false;
//     }
//     return true;
// }

// const Mike = {
//     name : 'mike',
//     age : 30,
// }
// const jane = {
//     name : 'jane',
// }
// console.log(isAdult(Mike))
// console.log(isAdult(jane))

// function isAdult(user) {
//     if (!('age' in user) || // user에 age 가 없거나
//     user.age < 20){ // 20살 미만이면
//         return false
//     }
//     return true
// }
// console.log(isAdult(Mike))
// console.log(isAdult(jane))

// for ... in 반복문 //
// for(let key in superman){
//     console.log(key);
//     console.log(superman[key]);
// }

// 객체 for ... in

// const mike = {
//     name: 'mike',
//     age: 30
// };
// for(let x in mike){
//     console.log(mike[x]) // mike['name'], mike['age']
// }

// 7월 15일 - 객체 *******************************************************************************************

// const superman = {
//     name : 'calrk',
//     age : 33,
//     fly:function(){
//         console.log('날아갑니다.')
//     }
//     // fly(){
//     //     console.log('날아갑니다.')
//     // } // 단축 구문으로도 작성할 수 있음
// }
// superman.fly(); // 이렇게 객체 프로퍼티로 할당 된 함수를 method 라고 함

// const user = {
//     name : 'mike',
//     sayHello : function(){
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }
// user.sayHello();

// let boy = {
//     name : 'mike',
//     sayHello,
// }
// let girl = {
//     name : 'jane',
//     sayHello,
// }
// function sayHello(){
//     console.log(`Hello, I'm ${this.name}`)
// }
// sayHello : function(){
//     console.log(`Hello, I'm ${this.name}`)
// }
// sayHello : () => {
//     console.log(`Hello, I'm ${this.name}`)
// } // 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음 화살표 함수 내부에서 this를 사용하면,
// 그 this는 외부에서값을 가져옴
// boy.sayHello(); // Hello,I'm mike
// girl.sayHello(); // Hello,I'm jane

// let boy = {
//     name : 'mike',
//     sayHello : () => {
//         console.log(this); // 전역개체 // 브라우저 환경 : window // Node js : global
//     }
// }
// boy.sayHello();
// this != boy

// method
// let boy = {
//     name : 'mike',
//     showName: function(){ // 해당 method(showName)의 this는 해당 객체(boy)를 가리킴
//         // console.log(boy.name)
//         console.log(this.name)
//     }
// };
// boy.showName();

// let man = boy;
// boy = null;

// man.showName();

// let boy = {
//     name : 'mike',
//     sayThis : () => {
//         console.log(this); // 화살표 함수에서의 this는 boy를 가리키는게 아니라 전역객체를 가리킴
//     }
// };
// boy.sayThis();

// 배열(Array) // 순서가 있는 리스트
// 1번에 철수 2번에 영희 ... 30번에 영수 // 이것을 코드로 만들면
let students=['철수', '영희', ...'영수']; // 배열은 대괄호를 사용 쉼표로 구분 // index->배열을 탐색할 때 사용하는 고유번호
console.log(students[0]); // 철수
console.log(students[1]); // 영희
console.log(students[29]); // 영수
students[0] = '민정'; // 수정가능 // 해당 코드를 이용하면 첫번째 학생을 민정으로 바꿀 수 있음
console.log(students) // ['민정', '영희', ...]

// 배열의 특징
// 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
// length // 배열의 길이 // students.length // 30
// push() : // 배열 끝에 추가
// let days = ['월', '화', '수'];
// days.push('목')
// console.log(days) // ['월', '화', '수', '목']
// pop(): // 배열 끝 요소 제거
// let days = ['월', '화', '수'];
// days.pop()
// console.log(days) // ['월', '화']
// shift, unshift // 배열 앞에 제거/추가
// days.unshift('일'); // 추가 // 여러 요소를 한번에 추가 할 수도 있음
// console.log(days) // ['일', '월', '화', '수']
// days.shift('일'); // 제거
// console.log(days) // ['월', '화', '수']

// 배열을 쓰는 가장 큰 이유중 1번은 반복문 : for
// let days = ['월', '화', '수'];
// for(let index = 0; index < days.length; index++){
//     console.log(days[index]) // 0~2까지 반복
// }

// 2번째 이유 for .. of // 객체를 순환하는 for .. in이랑 헷갈리지 않기, 사용은 가능하지만 장점보다 단점이 많음
// let days = ['월', '화', '수']
// for(let day of days) {
//     console.log(day)
// }

// 예시 array
// let days = ['mon', 'tue', 'wed'];
// days[1] = '화요일' // 수정 가능
// days.push('thu'); // 제일 뒤에 목요일 추가
// days.unshift('sun'); // 제일 앞에 일요일 추가
// console.log(days[1]);
// console.log(days.length); // 길이 체크

// for(let index=0; index<days.length; index++){
//     console.log(days[index]);
// }
// for(let day of days){
//     console.log(day);
// }

// 7월 16일 - 배열까지 마무리 **************************************************************************************

// - 정리 -
// const name = 'mike';
// let age = 30;
// 변수 설정 할 수 있음
// Boolean, Null, Undefined, Number, String, Object
// 자료형에 대해 이해 할 수 있음
// console.log(name);
// alert(age); // console, alert등을 이용해 값을 확인할 수 있고
// prompt('생년월일을 입력하세요');
// confirm('삭제 하시겠습니까?'); // prompt와 confirm을 통해 사용자들에게 원하는 값을 입력받을 수 있음

// if(user.name && user.age > 19){
//     console.log('성인 입니다.');
// } else {
//     return false;
// } // 연산자와 조건문을 활용해 각기다른 상황에 대응할 수 있음

// for (let i = 0; i < 10; i++){
//     console.log(i);
// } // 반복문으로 힘들이지 않고 동일한 작업을 반복할 수 있음

// function add (num1, num2) {
//     console.log(num1, num2);
// }
// const user = {
//     name : 'mike',
//     age : '30',
// }
// const users = ['mike', 'jane']
// 함수와 객체 배열에 대해 배웠음