// 예제 배열의 각 요소에 변환 적용하여 새로운 배열 생성

// 문제  :
// 코드
// 사용 예시
// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 문제 1 : 가계부 총 지출 계산
// 가계부 항목 expenses와 항목의 지출 금액을 더하는 함수 sumExpense가 주어졌을 때,
// 총 지출 금액을 계산하여 반환하세요. 만약 항목이 비어 있으면 초기값 init을 반환하세요

// 코드
// const expenses = [
//     {item : 'Groceries', amount : 50},
//     {item : 'Utilities', amount : 75},
//     {item : 'Rent', amount : 1000}
// ];

// const sumExpense = function(total, expense) {
//     return total + expense.amount;
// }
// let reduce = function (arr, fn, init) {
//     let val = init;
//     for (let i = 0; i < arr.length; i++) {
//         val = fn(val, arr[i]);
//     }
//     return val;
// }

// 사용 예시
// const totalExpense = reduce(expenses, sumExpense, 0);
// console.log(totalExpense); // 1125

// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 문제 2 : 쇼핑몰에서 장바구니 총 가격 계산
// 장바구니 항목 배열 cartItems와 각 항목의 가격을 더하는 함수 sumPrice가 주어졌을 때, 장바구니의 총 가격을
// 계산하여 반환하세요. 만약 장바구니가 비어 있으면 초기값 init을 반환하세요

// 코드
const cartItems = [
    {product : 'Shirt', price : 20},
    {product : 'Pants', price : 40},
    {product : 'Shoes', price : 60},
];

const sumPrice = function(total, item) {
    return total + item.price;
};

let reduce = function (arr, fn, init) {
    let val = init;
    for (let i = 0; i < arr.length; i++) {
        val = fn(val, arr[i]);
    }
    return val;
};


// 사용 예시
const totalPrice = reduce(cartItems, sumPrice, 0);
console.log(totalPrice); // 120

// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 문제 3 : 학생 성적 평균 계산
// 학생 성적 배열 grades 와 성적을 합산하는 함수 sumGrades가 주어졌을 때, 평군 성적을 계산하여 반환하세요.
// 배열이 비어 있으면 초기값 init을 반환하세요.

// 코드
// const grades = [85, 90, 78, 92. 88];

// const sumGrades = function(total, grade) {
//     return total + grade;
// };

// let reduce = function (arr, fn, init) {
//     let val = init;
//     for (let i = 0; i < arr.length; i++) {
//         val = fn(val, arr[i]);
//     }
//     return val;
// }

// 사용 예시
// const totalGrades = reduce(grades, sumGrades, 0);
// const averageGrade = totalGrades / grades.length;
// console.log(averageGrade); // 86.6

// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시