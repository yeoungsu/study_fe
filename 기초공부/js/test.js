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

const gender = 'f';
const name = 'jane';
const isAdult = true;

//if(gender === 'm' && name === 'mike' || isAdult){ // 해당 코드와 아래 코드는 동일
if((gender === 'm' && name === 'mike') || isAdult){
// if(gender === 'm' && (name === 'mike' || isAdult)){ // 의도한 바로 만들려면 해당 코드처럼 묶어줘야함
    console.log('통과')
} else {
    console.log("돌아가..")
}
