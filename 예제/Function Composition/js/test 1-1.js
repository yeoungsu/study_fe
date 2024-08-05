// Function Composition

// 문제  :
// 코드
// 사용 예시
// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시


// 문제 1 : 데이터 파이프라인 처리
// 데이터 처리 단계가 배열로 주어집니다. 각 단계는 함수를 나타내며, 이 함수는 데이터 객체를 입력으로 받아
// 변환된 데이터를 반환합니다. 데이터 파이프라인을 구성하는 함수를 작성하세요
// 함수 배열이 비어 있으면 입력 데이터를 그대로 반환하는 항등 함수로 처리하세요.

// 코드
let processDataPipeline = function(stages) {
    return function(data) {
        if (stages.length === 0) {
            return data;
        }
        for (let i = 0; i < stages.length; i++) {
            data = stages[i](data);
        }
        return data;
    }
};

// 코드 설명
// 1. processDataPipeline 함수 정의
// processDataPipeline 함수는 데이터 처리 단계의 배열 stages를 인자로 받음
// processDataPipeline 함수는 데이터를 입력받아 처리하는 또 다른 함수를 반환함
// 2. 항등 함수 처리
// 데이터 처리 단계가 비어 있으면, 입력 데이터를 그대로 반환함
// 3. 데이터 처리 단계 적용
// 배열의 각 함수를 순차적으로 적용하여 데이터를 변환함
// 4. 결과 반환
// 모든 데이터 처리 단계가 적용된 최종 데이터를 반환함

// 사용 예시
const stages = [
    data => ({ ...data, age : data.age + 1 }),
    data => ({ ...data, name : data.name.toUpperCase() }),
    data => ({ ...data, isActive : true })
];

const dataPipeline = processDataPipeline(stages);

const initialData = { name: 'John', age : 30, isActive : false};
const processedData = dataPipeline(initialData);
console.log(processedData); // { name : 'JOHN', age : 30, isActive : true }

// 예시 설명
// 데이터 처리 단계
// 1. data => ({ ...data, age : data.age + 1 }) // 나이를 1 증가시킴
// 2. data => ({ ...data, name : data.name.toUpperCase() }) // 이름을 대문자로 변환
// 3. data => ({ ...data, isActive : true }) // isActive 속성을 true로 설정함
// 초기 데이터 initialData는 { name : 'John', age : 30, isActive : false }임
// 각 단계가 순차적으로 적용되어 최종 데이터는 { name : 'JOHN', age : 30, isActive : true }가 됨


// 문제 2 : 텍스트 필터 체인
// 여러 텍스트 필터 함수가 배열로 주어짐. 각 함수는 텍스트 문자열을 입력으로 받아 변환된 문자열을 반환함
// 텍스트 필터 체인을 구성하는 함수를 작성하세요
// 함수 배열이 비어 있으면 입력 텍스트를 그대로 반환하는 항등 함수로 처리하세요.

// 코드
var applyTextFilters = function(filters) {
    return function(text) {
        if(filters.length === 0) {
            return text;
        }
        for (let i = 0; i < filters.length; i++) {
            text = filters[i](text);
        }
        return text;
    }
}

// 코드 설명
// 1. applyTextFilters 함수 정의
// applyTextFilters 함수는 텍스트 필터 함수의 배열 filters를 인자로 받음
// applyTextFilters 함수는 텍스트 문자열을 입력받아 처리하는 또 다른 함수를 반환함
// 2. 항등 함수 처리
// 텍스트 필터 배열이 비어 있으면, 입력 텍스트를 그대로 반환함
// 3. 텍스트 필터 적용
// 배열의 각 필터 함수를 순차적으로 적용하여 텍스트를 변환함
// 4. 결과 반환
// 모든 텍스트 필터가 적용된 최종 텍스트를 반환함

// 사용 예시
const filters = [
    text => text.trim(),
    text => text.toLowerCase(),
    text => text.replace(/[aeiou]/g, '*')
];

const textFilterChain = applyTextFilters(filters);

const initialText = " Hello World ";
const filteredText = textFilterChain(initialText);
console.log(filteredText); // " h*ll* w*rld "

// 예시 설명
// 텍스트 필터 단계
// 1. text => text.trim() // 문자열의 앞뒤 공백을 제거함
// 2. text => text.toLowerCase() // 문자열을 소문자로 변환함
// 3. text => text.replace(/[aeiou]/g, '*') // 문자열에서 모음을 *로 대체함
// 초기 텍스트 initialText는 Hello World 입니다
// 각 단계가 순차적으로 적용되어 최종 텍스트는 h*ll* w*rld 가 됨


// 문제 3 : 수학 연산 체인
// 여러 수학 연산 함수가 배열로 주어짐. 각 함수는 정수를 입력으로 받아 변환된 정수를 반환함
// 수학 연산 체인을 구성하는 함수를 작성하세요
// 함수 배열이 비어 있으면 입력 정수를 그대로 반환하는 항등 함수로 처리하세요

// 코드
var applyMathOperations = function(operations) {
    return function(num) {
        if(operations.length === 0) {
            return num;
        }
        for (let i = 0; i < operations.length; i++) {
            num = operations[i](num);
        }
        return num;
    }
};

// 코드 설명
// 1. applyMathOperations 함수 정의
// applyMathOperations 함수는 수학 연산 함수의 배열 operations 를 인자로 받음
// applyMathOperations 함수는 정수를 입력받아 처리하는 또 다른 함수를 반환함
// 2. 항등 함수 처리
// 수학 연산 배열이 비어 있으면, 입력 정수를 그대로 반환함
// 3. 수학 연산 적용
// 배열의 각 수학 연산 함수를 순차적으로 적용하여 정수를 변환함
// 4. 결과 반환
// 모든 수학 연산이 적용된 최종 정수를 반환함

// 사용 예시
const operations = [
    num => num + 2,
    num => num * 3,
    num => num - 5
];

const mathOperationChain = applyMathOperations(operations);

const initialNum = 4;
const resultNum = mathOperationChain(initialNum);
console.log(resultNum); // 13 ((4 + 2) * 3 - 5 = 13)

// 예시 설명
// 수학 연산 단계
// 1. num => num + 2 // 정수에 2를 더합니다.
// 2. num => num * 3 // 정수를 3배로 만듭니다.
// 3. num => num - 5 // 정수에서 5를 뺍니다
// 초기 정수 initialNum 은 4입니다.
// 각 단계가 순차적으로 적용되어 최종 정수는 13이 됩니다 ((4 + 2) * 3 - 5) = 13
