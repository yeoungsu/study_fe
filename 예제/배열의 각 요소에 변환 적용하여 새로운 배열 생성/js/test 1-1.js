// 예제 배열의 각 요소에 변환 적용하여 새로운 배열 생성

// 문제  :
// 코드
// 사용 예시
// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 문제 1 : 배열 요소 필터링 filterArray
// 정수 배열 arr와 필터링 함수 fn이 주어졌을 때, 조건에 맞는 요소들만 포함하는 새로운 배열을 반환하세요.
// 조건 함수 fn은 배열의 각 요소와 그 인덱스를 인자로 받아 불리언 값을 반환합니다.

// 코드
let filterArray = function(arr, fn) { // 두 개의 인자 arr(배열)과 fn(조건 함수)를 받음
    const result = []; // 빈 배열
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 사용 예시
// const arr1 = [1,2,3,4,5];
// const fn1 = function isEven(n) { return n % 2 === 0;};
// console.log(filterArray(arr1, fn1)); // [2,4]

// 코드 설명
// 1. filterArray 함수 정의
// filterArray 함수는 두 개의 인자 arr(배열)과 fn(조건 함수)를 받음
// 새로운 배열 resutl를 생성
// 2. 배열 순회 및 조건 확인
// for 루프를 사용하여 배열 arr의 각 요소에 접근함
// 각 요소에 대해 조건 함수 fn을 호출하고, 조건을 만족하는 경우 result 배열에 해당 요소를 추가함
// 3. 결과 반환
// result배열을 반환하여 조건을 만족하는 요소들로 구성된 배열을 반환함


// 실생활 예시


// 문제 2 : reduceArray
// 정수 배열 arr과 누적 함수 fn, 초기값 init이 주어졌을 때, 배열의 모든 요소를 하나의 값으로 누적한 결과를 반환하세요.
// 누적 함수 fn은 누적값과 현재 값을 인자로 받아 새로운 누적값을 반환합니다.

// 코드
let reduceArray = function(arr, fn, init) {
    let accumulator = init;
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i]);
    }
    return accumulator;
}

// 사용 예시
// const arr1 = [1,2,3,4,5];
// const fn1 = function sum(acc, n) { return acc + n; };
// console.log(reduceArray(arr1, fn1, 0)); // 15

// 코드 설명
// 1. reduceArray 함수 정의
// reduceArray 함수는 세 개의 인자 arr(배열), fn(누적 함수), init(초기값)을 받습니다.
// 누적값 accumulator를 초기값 init으로 설정함
// 2. 배열 순회 및 누적값 갱신
// for루프를 사용하여 배열 arr의 각 요소에 접근
// 각 요소에 대해 누적 함수 fn을 호출하여 누적값을 갱신함
// 3. 결과 반환
// 최종 누적값 accumulator를 반환

// 실생활 예시


// 문제 3 : forEachElement
// 정수 배열 arr과 함수 fn이 주어졌을 때, 배열의 각 요소에 대해 주어진 함수를 실행하세요.
// 함수 fn 은 배열의 각 요소와 그 인덱스를 인자로 받습니다.

// 코드
let forEachElement = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

// 사용 예시
const arr1 = [1,2,3,4,5];
const fn1 = function printElement(n,i) {console.log(`Index ${i} : ${n}`);};
forEachElement(arr1, fn1);
// index 0 : 1
// index 1 : 2
// index 2 : 3
// index 3 : 4
// index 4 : 5


// 코드 설명
// 1. forEachElement 함수 정의
// forEachElement 함수는 두 개의 인자 arr(배열)과 fn(함수)를 받음
// 2. 배열 순회 및 함수 실행
// for 루프를 사용하여 배열 arr의 각 요소에 접근
// 각 요소에 대해 함수 fn을 호출하여 주어진 작업을 수행
// 3. 반환값 없음
// forEachElement함수는 반환값이 없음. 주어진 함수를 배열의 각 요소에 대해 실행하기만 함

// 실생활 예시

