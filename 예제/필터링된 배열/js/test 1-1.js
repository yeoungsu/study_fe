// 예제 배열의 각 요소에 변환 적용하여 새로운 배열 생성

// 문제  :
// 코드
// 사용 예시
// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 기본적인 코드
// let filter = function(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// };

// const arr1 = [1,2,3,4,5];
// const fn1 = function isEven(n) {return n % 2 === 0;};
// console.log(filter(arr1, fn1)); [2,4]

// 문제 1 : 쇼핑 목록 필터링
// 쇼핑목록 shoppingList와 재고 함수 isInStock이 주어졌을 때, 재고가 있는 품목만을 포함하는 새로운 배열을 반환하세요.
// 재고 함수 isInStock은 품목 이름을 인자로 받아 해당 품목이 재고에 있는지 여부를 반환합니다.

// 코드
// const shoppingList = ['apples', 'bananas', 'oranges', 'grapes', 'milk'];
// const isInStock = function(item) {
//     const stock = ['apples', 'oranges', 'milk'];
//     return stock.includes(item);
// };

// let filter = function(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// };


// 사용 예시
// const availableItems = filter(shoppingList, isInStock);
// console.log(availableItems); // ['apples', 'oranges', 'milk']

// 코드 설명
// shoppingList 배열과 isInStock 함수가 주어집니다.
// isInStock 함수는 재고가 있는 품목을 확인하여 반환
// 재고가 있는 품목만을 포함하는 새로운 배열을 반환

// 문제 2 : 학생 성적 필터링
// 학생 성적 배열 grades 와 합격 여부를 판별하는 함수 isPassing 이 주어졌을 때,
// 합격한 학생의 성적만을 포함하는 새로운 배열을 반환하세요.
// isPassing 함수는 성적을 인자로 받아 합격 여부를 반환합니다(성적이 60 이상이면 합격).

// 코드
// const grades = [55, 70, 65, 90, 45];
// const isPassing = function(grade) {
//     return grade >= 60;
// };

// let filter = function(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// };

// 사용 예시
// const passingGrade = filter(grades,isPassing);
// console.log(passingGrade);

// 코드 설명
// grades 배열과 isPassing 함수가 주어짐
// isPassing 함수는 성적이 60 이상인 경우 합격 여부를 반환
// 합격한 학생의 성적만을 포함하는 새로운 배열을 반환

// 문제 3 : 일정 필터링
// 일정 배열 events 와 오늘 이후의 일정만 포함하는 함수 isUpcoming 이 주어졌을 때
// 오늘 이후의 일정만을 포함하는 새로운 배열을 반환하세요.
// isUpcoming 함수는 날짜를 인자로 받아 오늘 이후인지 여부를 반환합니다.

// 코드
const events = [
    {name : 'meeting', date : '2023-07-24'},
    {name : 'conference', date : '2023-08-01'},
    {name : 'interview', date : '2023-07-22'},
];
const isUpcoming = function(event) {
    const today = new Date('2023-07-23'); // 기준 날짜 설정
    const eventDate = new Date(event.date);
    return eventDate > today;
};

let filter = function(arr,fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};

// 사용 예시
const nextEvent = filter(events, isUpcoming);
console.log(nextEvent);

// 코드 설명
// events 배열과 isUpcomming 함수가 주어짐
// isUpcomming 함수는 오늘 이후의 일정을 확인하여 반환
// 오늘 이후의 일정만을 포함하는 새로운 배열을 반환