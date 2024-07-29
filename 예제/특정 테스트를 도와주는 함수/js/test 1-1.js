// 예제 테스트용 함수를 작성
// 각 문제는 특정 요구사항을 충족하는 함수를 작성하도록 요구합니다.

// 문제 1 : greaterThan

// greaterThan 함수를 작성하세요.
// 이 함수는 임의의 숫자 val을 받아들이고 다음 두 가지 함수가 포함된 객체를 반환해야 합니다.
// 조건 1 : isGreaterThan(val)은 다른 숫자를 받아들이고, val이 주어진 숫자보다 크면 true를 반환합니다.
// 그렇지 않으면 "Not Greater" 오류를 발생시켜야 합니다.
// 조건 2 :isNotGreaterThan(val)은 다른 숫자를 받아들이고, val이 주어진 숫자보다 크지 않으면 true를 반환합니다.
// 그렇지 않으면 "Greater" 오류를 발생시켜야 합니다.

// 코드
// const greaterThan = function(val) {
//     return {
//         isGreaterThan : function(otherval) {
//             if (val > otherval) {
//                 return true;
//             } else {
//                 throw new Error('Not Greater');
//             }
//         },
//         isNotGreaterThan : function(otherval) {
//             if (val <= otherval) {
//                 return true;
//             } else {
//                 throw new Error('Greater')
//             }
//         }
//     };
// };

// 사용 예시
// try {
//     console.log(greaterThan(5).isGreaterThan(3)); //true
// } catch (error) {
//     console.log(error.message);
// };

// try {
//     console.log(greaterThan(5).isGreaterThan(5)); //true
// } catch (error) {
//     console.log(error.message);
// };

// try {
//     console.log(greaterThan(5).isNotGreaterThan(4)); // Error : greater
// } catch (error) {
//     console.log(error.message); // 'greater' 출력
// }
// 코드 설명
// 1. 'try' 블록 안에서 'greaterThan(5).isGreaterThan(3)'와 같은 함수를 호출합니다.
// 2. 만약 'try' 블록 안의 코드가 정상적으로 실행되면 'catch' 블록은 실행되지 않음
// 3. 하지만 'try' 블록 안의 코드에서 오류가 발생하면 'catch' 블록이 실행되고, 'error'객체가 전달됨
// 4. 'catch' 블록 안에서 'console.log(error.message)'를 사용하여 오류 메시지를 콘솔에 출력함
// 이렇게 하면 오류가 발생했을 때 오류 메시지를 확인할 수 있어, 디버깅과 문제 해결에 도움이 되

// 실생활 예시
// 쇼핑몰에서는 특정 금액 이상을 구매해야 무료 배송을 제공합니다. 고객의 총 구매 금액이 무료 배송 기준을 초과하는지
// 확인하는 함수를 작성하세요

const greaterThan = function(val) { // 고객이 산 구매 금액
    return {
        isGreaterThan : function(amount) {
            if (val > amount) { // 특정 금액
                return true
            } else {
                throw new Error('배송비가 3000원 발생합니다.')
            }
        },
        isNotGreaterThan : function(amount) {
            if (val < amount) {
                return true
            } else {
                throw new Error('무료 배송 적용')
            }
        }
    };
};

try {
    console.log(greaterThan(4000).isGreaterThan(3000)); // true // 무료 배송 적용
} catch (error) {
    console.log(error.message);
};
try {
    console.log(greaterThan(4000).isNotGreaterThan(3000)); // true // 무료 배송 적용
} catch (error) {
    console.log(error.message);
};

// 문제 2 : stringContains

// stringContains 함수를 작성하세요. 
// 이 함수는 임의의 문자열 val을 받아들이고 다음 두 가지 함수가 포함된 객체를 반환해야 합니다.
// 조건 1 : contains(substring)은 부분 문자열을 받아들이고, val이 주어진 부분 문자열을 포함하면 true를 반환합니다.
// 그렇지 않으면 "Substring Not Found" 오류를 발생시켜야 합니다.
// 조건 2 : notContains(substring)은 부분 문자열을 받아들이고, val이 주어진 부분 문자열을 포함하지 않으면 true를 반환합니다.
// 그렇지 않으면 "Substring Found" 오류를 발생시켜야 합니다.

// 코드
// const stringContains = function(val){
//     return {
//         contains : function(substring) {
//             if (substring.indexOf(val)) {
//                 return true
//             } else {
//                 throw new Error('Substring Not Found')
//             }
//         },
//         notContains : function(substring) {
//             if (substring.indexOf(val)) {
//                 return true
//             } else {
//                 throw new Error('Substring Not Found')
//             }
//         }
//     };
// };

// 사용 예시
// try {
//     console.log(stringContains('Hello, World').contains(''));
// } catch {
//     console.log(error.message)
// };

// 위 코드 문제점

// indexOf는 부분 문자열이 존재하지 않으면 -1을 반환한다. 따라서 부분 문자열이 포함되어 있는지 확인하려면
// indexOf의 반환 값이 -1이 아닌지 확인해야 함
// contains와 notContains메서드에서 주어진 문자열 'str'이 'val'을 포함하는지 확인해야함
// 'notContains'메서드의 조건문도 수정
// 'catch' 블록에 'error' 매개변수를 추가해야 함

// 수정한 코드

// const stringContains = function(val){
//     return {
//         contains : function(substring) {
//             if (val.indexOf(substring) !== -1) { // val에 주어진 문자열 str이 포함되어 있는지 확인
//                 return true // 맞다면 true를 반환
//             } else {
//                 throw new Error('Substring Not Found')
//             }
//         },
//         notContains : function(substring) {
//             if (val.indexOf(substring) === -1) {
//                 return true
//             } else {
//                 throw new Error('Substring Found')
//             }
//         }
//     };
// };

// try {
//     console.log(stringContains('Hello, World').contains('Hello'));
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(stringContains('Hello, World').contains('Hi'));
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(stringContains('Hello, World').notContains('Hi'));
// } catch (error) {
//     console.log(error.message)
// };

// 코드 설명

// 1. stringContains 함수는 val 문자열을 인자로 받아 객체를 반환합니다.
// 2. 반환된 객체에는 두 개의 메서드 contains와 notContains가 있습니다.
// 3. contains 메서드는 val에 주어진 문자열 str이 포함되어 있는지 indexOf를 사용하여 확인하고,
// 포함되어 있으면 true를 반환하며, 그렇지 않으면 "Substring Not Found" 오류를 발생시킵니다.
// 4. notContains 메서드는 val에 주어진 문자열 str이 포함되어 있지 않은지 indexOf를 사용하여 확인하고,
// 포함되어 있지 않으면 true를 반환하며, 포함되어 있으면 "Substring Found" 오류를 발생시킵니다.
// 5. 각각의 테스트 케이스에서 try...catch 문을 사용하여 오류 메시지를 출력합니다.

// 실생활 예시
// 이메일 필터링 시스템에서 특정 키워드가 이메일 본문에 포함되어 있는지 확인하는 함수 'stringContains'를 작성하세요

const stringContains = function(val) {
    return {
        contains : function(keyword) {
            if (val.indexOf(keyword) !== -1) {
                return true;
            } else {
                throw new Error('특정 키워드가 포함되어있지 않습니다.')
            }
        },
        notCotains : function(keyword) {
            if (val.indexOf(keyword) === -1) {
                return true
            } else {
                throw new Error('특정 키워드가 포함되어있는 이메일입니다.')
            }
        }
    };
};

const myEmail = stringContains('chldudtn94@naver.com')

try {
    console.log(myEmail.contains('@naver.com'))
} catch (error) {
    console.log(error.message)
};
try {
    console.log(myEmail.notCotains('@naver.com'))
} catch (error) {
    console.log(error.message)
};

// 문제 3 : arrayIncludes

// arrayIncludes 함수를 작성하세요.
// 이 함수는 임의의 배열 val을 받아들이고 다음 두 가지 함수가 포함된 객체를 반환해야 합니다.
// 조건 1 : includes(element)는 요소를 받아들이고, val이 주어진 요소를 포함하면 true를 반환합니다.
// 그렇지 않으면 "Element Not Found" 오류를 발생시켜야 합니다.
// 조건 2 : notIncludes(element)는 요소를 받아들이고, val이 주어진 요소를 포함하지 않으면 true를 반환합니다.
// 그렇지 않으면 "Element Found" 오류를 발생시켜야 합니다.

// 코드
// const arrayIncludes = function(val) {
//     return {
//         includes : function(arr) {
//             if (val.includes(arr) === -1) {
//                 return true
//             } else {
//                 throw new Error('Element Not Found')
//             }
//         },
//         notIncludes : function(arr) {
//             if (val.includes(arr) !== 0) {
//                 return true
//             } else {
//                 throw new Error('Element Found')
//             }
//         },
//     };
// };

// try {
//     console.log(arrayIncludes([1,2,3,4,5]).includes([1,2,3]))
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(arrayIncludes([1,2,3,4,5]).includes([6]))
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(arrayIncludes([1,2,3,4,5]).notIncludes([1,6]))
// } catch (error) {
//     console.log(error.message)
// };

// 위 코드 주요 수정 사항
// 1. 'includes' 메서드는 'val.includes(arr)'가 'true'일 경우 'true'를 반환하고, 'false'일 경우 'Element Not Found'
// 오류를 던져야 함
// 2. 'notIncludes' 메서드는 'val.includes(arr)'가 'false'일 경우 'true'를 반환하고, 'true'일 경우
// 'Element Found'오류를 던져야 함
// 3. 테스트에서 'includes'와 'notIncludes' 메서드에 전달되는 인자는 배열이 아니라 배열의 개별 요소여야 함

// 수정한 코드

// const arrayIncludes = function(val) {
//     return {
//         includes : function(element) {
//             if (val.includes(element)) {
//                 return true
//             } else {
//                 throw new Error('Element Not Found')
//             }
//         },
//         notIncludes : function(element) {
//             if (!val.includes(element)) { // ! 사용
//                 return true
//             } else {
//                 throw new Error('Element Found')
//             }
//         },
//     };
// };

// try {
//     console.log(arrayIncludes([1,2,3,4,5]).includes(1))
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(arrayIncludes([1,2,3,4,5]).includes(6))
// } catch (error) {
//     console.log(error.message)
// };
// try {
//     console.log(arrayIncludes([1,2,3,4,5]).notIncludes(1))
// } catch (error) {
//     console.log(error.message)
// };

// 코드 설명

// 1. 'arrayIncludes' 함수는 배열 'val'을 인자로 받아 객체를 반환함
// 2. 반환된 객체에는 두 개의 메서드 'includes'와 'notIncludes'가 있음
// 3. 'includes' 메서드는 'val'에 주어진 요소 'element'가 포함되어 있는지 'includes'를 사용하여 확인
// 포함되어 있으면 'true'를 반환하며, 그렇지 않으면 'Element Not Found' 오류를 발생함
// 4. 'notIncludes' 메서드는 'val'에 주어진 요소 'element'가 포함되어 있는지 'notIncludes'를 사용하여 확인
// 포함되어 있지 않으면 'true'를 반환하며, 그렇지 않으면 'Element Found' 오류를 발생함
// 5. 각각의 테스트 케이스에서 'try...catch'문을 사용하여 오류 메시지를 출력함
// 이를 이용하여 배열에 요소가 포함되어 있는지 확인할 수 있음

// 실생활 예시
// 학생 출석 체크 시스템에서 학생 목록에 특정 학생이 포함되어 있는지 확인하는 함수 'arrayIncludes'를 작성

const arrayIncludes = function(val) {
    return {
        includes : function(student) {
            if(val.includes(student)) {
                return true
            } else {
                throw new Error('학생이 오지 않았습니다.')
            }
        },
        notIncludes : function(student) {
            if(!val.includes(student)) {
                return true
            } else {
                throw new Error('학생이 출석 했습니다.')
            }
        },
    };
};

const studentList = arrayIncludes(['mike', 'tom', 'jane']);

try {
    console.log(studentList.includes('jane')); // true
} catch (error) {
    console.log(error.message)
};
try {
    console.log(studentList.notIncludes('jane')); // false
} catch (error) {
    console.log(error.message) // 학생이 출석 했습니다.
};