// 예제 카운터 함수를 작성
// 문제  :
// 코드
// 사용 예시
// 위 코드의 잘못된 점
// 수정한 코드
// 사용 예시
// 코드 설명
// 실생활 예시

// 문제 1 : createTimer

// createTimer 함수를 작성하세요
// 이 함수는 초기 시간을 초 단위로 받습니다. 이 함수는 세 가지 함수를 가진 객체를 반환해야 함
// 함수 설명
// start() : 타이머를 시작하고, 현재 시간을 반환한다.
// stop() : 타이머를 중지하고, 경과 시간을 반환합니다.
// reset() : 타이머를 초기 시간으로 설정하고, 초기 시간을 반환합니다.

// 코드
// let createTimer = function(init) {
//     let currentTime = init;

//     return {
//         start : function() {
//             currentTime--;
//             return currentTime
//         },
//         stop : function() {
//             currentTime++;
//             return currentTime
//         },
//         reset : function() {
//             currentTime = init;
//             return currentTime
//         },
//     };
// };

// 사용 예시
// const timer = createTimer(60);
// console.log(timer.start()); // 60
// console.log(timer.stop()); // 경과된 시간
// console.log(timer.reset()); // 60

// 위 코드의 잘못된 점
// 타이머의 동작 방식이 요구사항과 맞지 않음.
// start()와 stop() 함수는 타이머의 동작을 시뮬레이션 하지 않으며, 단지 currentTime값을 증가시키거나 감소키기기만 함

// 수정한 코드 // 이는 타이머가 실제로 동작하는 방식으로 수정된 코드임
// let createTimer = function(init) {
//     let currentTime = init;
//     let timerId = null;
//     let startTime = null; // timerIde와 startTime에 null을 할당한 이유는 타이머의 상태를 관리하기 위함
    // let timerId = null;
    // 역할 : timerId는 setInterval 함수의 반환 값을 저장함. setInterval은 주기적으로 함수를 실행시키는 타이머를 설정하고,
    // 이를 취소할 때 사용하는 식별자(ID)를 반환함
    // 목적 : timerId를 사용하여 타이머가 실행중인지 확인하고, clearInterval을 통해 타이머를 취소할 수 있음.
    // 이를 통해 타이머의 중복 시작을 방지하고, 타이머를 중지 시킬 수 있음
    
    // let startTime = null;
    // 역할 : startTime은 타이머가 시작된 시간을 기록함. Date.now()를 사용하여 현재 시간을 밀리초 단위로 저장
    // 목적 : startTime을 사용하여 타이머가 시작된 후 경과된 시간을 계산할 수 있음.
    // 이를 통해 타이머를 중지할 때 정확한 경과 시간을 반영하여 currentTime을 업데이트할 수 있음

//     return {
//         start : function() {
//             if (timerId === null) { // 타이머가 이미 실행 중인 경우 중복 시작을 방지함
//                 startTime = Date.now();
//                 timerId = setInterval(() => {
//                     currentTime--;
//                     if (currentTime <= 0) {
//                         clearInterval(timerId);
//                         timerId = null;
//                     }
//                 }, 1000);
//             }
//             return currentTime;
//         },
//         stop : function() {
//             if (timerId !== null) {
//                 clearInterval(timerId);
//                 timerId = null;
//                 const elapsed = Math.floor((Date.now() - startTime) / 1000);
//                 currentTime -= elapsed;
//             }
//             return currentTime;
//         },
//         reset : function() {
//             if (timerId !== null) {
//                 clearInterval(timerId);
//                 timerId = null;
//             }
//             currentTime = init;
//             return currentTime;
//         }
//     };
// };
// 사용 예시
// const timer = createTimer(10);
// console.log(timer.start()); // 10
// setTimeout(() => {
//     console.log(timer.stop()); // 현재 남은 시간 출력 (대략 7초 남았을 경우 3)
//     console.log(timer.reset()); // 10
// }, 3000);

// 코드 설명
// 1. start 함수
// timerId가 null인 경우에만 타이머를 시작하여 중복 시작을 방지함
// setInterval을 사용하여 1초마다 currentTime을 1씩 감소시킴
// 타이머가 종료되면 clearInterval을 호출하여 타이머를 정지함
// 타이머 시작 시의 현재 시간을 기록함 (startTime)

// 2. stop 함수
// 타이머가 실행 중일 때 (timerId가 null이 아닌 경우)에만 타이머를 정지함
// clearInterval을 호출하여 타이머를 정지함
// 타이머가 시작된 후 경과된 시간을 계산하여 currentTime에서 빼줌

// 3. reset 함수
// 타이머가 실행 중일 때 clearInterval을 호출하여 타이머를 정시함
// currentTime을 초기 값으로 재설정 함


// 실생활 예시
// 피트니스 애플리케이션에서 운동 세션의 타이머를 관리하는 함수를 작성하세요.
// 이 함수는 초기 시간을 초 단위로 받아야 합니다. 세 가지 함수를 가진 객체를 반환해야 합니다.
// start(): 타이머를 시작하고, 남은 시간을 반환합니다.
// stop(): 타이머를 중지하고, 남은 시간을 반환합니다.
// reset(): 타이머를 초기 시간으로 재설정하고, 초기 시간을 반환합니다.

// 코드
let createTimer = function(init) {
    let currentTime = init;
    let timerId = null;
    let startTime = null;

    return {
        start : function() {
            if(timerId === null) {
                startTime = Date.now();
                timerId = setInterval(() => {
                    currentTime--;
                    if (currentTime <= 0) {
                        clearInterval(timerId);
                        timerId = null;
                    }
                }, 1000)
            };
            return currentTime;
        },
        stop : function() {
            if(timerId !== null) {
                clearInterval(timerId);
                timerId = null;
                const elapsed = Math.floor((Date.now() - startTime) / 1000);
                currentTime -= elapsed;
            };
            return currentTime;
        },
        reset : function() {
            if (timerId !== null) {
                clearInterval(timerId);
                timerId = null;
            }
            currentTime = init;
            return currentTime;
        }
    };
};

// 사용 예시

// const workOutTimer = createTimer(300); // 5분 타이머 설정 기준

// console.log('타이머 시작 : ', workOutTimer.start()); // 300 시작

// setInterval(() => {
//     console.log('2초마다 남은시간 확인', workOutTimer.stop());
//     // 재시작
//     console.log('타이머 재시작 : ', workOutTimer.start());
// }, 2000);

// // 타이머 시작
// console.log('타이머 시작 : ', workOutTimer.start()); // 300에서 시작

// // 2초 후 타이머 중지
// setTimeout(() => {
//     console.log('타이머 중지 : ', workOutTimer.stop()); // 대략 298
//     // 타이머 재시작
//     console.log('타이머 재시작 : ', workOutTimer.start()); // 남은 시간
// }, 2000)

// // 5초 후 타이머 중지
// setTimeout(() => {
//     console.log('타이머 중지 : ', workOutTimer.stop()); // 대략 295
//     // 타이머 리셋
//     console.log('타이머 리셋 : ', workOutTimer.reset()); // 300
// }, 5000)


// 문제 2 : createAccount

// createAccount 함수를 작성하세요.
// 이 함수는 초기 잔액을 인자로 받음
// 이 함수는 세 가지 함수를 가진 객체를 반환해야 함
// deposit(amount) : 지정된 금액을 계좌에 입금하고, 현재 잔액을 반환합니다.
// withdraw(amount) : 지정된 금액을 계좌에서 출금하고, 현재 잔액을 반환합니다. 만약 잔액이 부족하면
// 'Insufficient funds' 오류를 발생시킴
// checkBalance() : 현재 잔액을 반환합니다.

// 코드
// let createAccount = function(initBalance) {
//     return {
//         deposit : function(amount) {
//             let currentBalance = initBalance + amount;
//             return currentBalance;
//         },
//         withdraw : function(amount) {
//             if (currentBalance >= amount) {
//                 currentBalance - amount;
//             } else {
//                 throw new Error('Insufficient funds');
//             }
//         },
//         checkBalance : function() {
//             return currentBalance;
//         }
//     };
// };

// 사용 예시
// const account = createAccount(1000);
// console.log(account.deposit(500)); // 1500
// console.log(account.withdraw(200)); // 1300
// console.log(account.checkBalance()); // 1300

// 위 코드의 잘못된 점
// 가장 큰 문제는 currentBalance 변수가 deposit, withdraw, chechBalance 메서드 간에 공유가 되지 않는 점
// currentBalance를 함수 내부의 지역 변수로 선언하여, 모든 메서드가 이를 공유하도록 해야함
// 또한, withdraw 메서드에서 현재 잔액을 업데이트 해야함

// 수정한 코드
let createAccount = function(initBalance) {
    let currentBalance = initBalance

    return {
        deposit : function(amount) {
            currentBalance += amount; // currentBalance에 amount를 더해서 currentBalance에 할당 // 더하기 할당
            return currentBalance; // 그 값을 반환
        },
        withdraw : function(amount) {
            if (currentBalance >= amount) {
                currentBalance -= amount; // 빼기 할당
                return currentBalance;
            } else {
                throw new Error('Insufficient funds');
            }
        },
        checkBalance : function() {
            return currentBalance;
        }
    };
};

// 사용 예시
const account = createAccount(1000);

try {
    console.log(account.deposit(500)); // 1500
} catch (error) {
    console.log(error.message);
};
try {
    console.log(account.withdraw(200)); // 1300
} catch (error) {
    console.log(error.message);
};
try {
    console.log(account.checkBalance()); // 1300
} catch (error) {
    console.log(error.message);
};
try {
    console.log(account.withdraw(1500)); // Error : Insufficient funds
} catch (error) {
    console.log(error.message);
};

// 코드 설명
// 1. currentBalance 변수
// currentBalance는 createAccount 함수 내부에 선언된 변수로, 초기 잔액인 initBalance로 설정됨
// 해당 변수는 반환된 객체의 메서드들에서 공유됨
// 2. deposit 메서드
// deposit 메서드는 인자로 받은 amount를 currentBalance에 더하고, 업데이트된 잔액을 반환함
// 3. withdraw 메서드
// withdraw 메서드는 인자로 받은 amount를 출금하려고 시도
// currentBalance가 amount보다 크거나 같을 경우, currentBalance에서 amount를 빼고, 업데이트된 잔액을 반환함
// 그렇지 않을 경우, 'Insufficient funds' 오류를 발생시킴
// 4. checkBalance 메서드
// chechBalance 메서드는 현재 잔액인 currentBalance를 반환함

// 예시
// deposit 메서드를 사용하여 잔액을 입금할 수 있음
// withdraw 메서드를 사용하여 잔액을 출금할 수 있음
// chechBalance 메서드를 사용하여 현재 잔액을 확인할 수 있음

// 이렇게 하면 createAccount 함수가 올바르게 동작하며, 모든 메서드가 공유되는 currentBalance 변수를 사용하여
// 잔액을 관리할 수 있음

// 실생활 예시
// 은행 계좌 관리 시스템에서 계좌의 잔액을 관리하는 함수를 작성하세요.
// 이 함수는 초기 잔액을 받아야 합니다. 세 가지 함수를 가진 객체를 반환해야 합니다.

// 문제 3 : createScoreTracker
// createScoreTracker 함수를 작성하세요. 이 함수는 초기 점수를 인자로 받습니다.
// 이 함수는 세 가지 함수를 가진 객체를 반환합니다.
// increase(points) : 지정된 포인트를 증가시키고, 현재 점수를 반환합니다.
// decrease(points) : 지정된 포인트를 감소시키고, 현재 점수를 반환합니다.
// reset() : 점수를 초기 값으로 설정하고, 초기 값을 반환합니다.

// 코드
let createScoreTracker = function(initScore) {
    let currentScore = initScore;

    return {
        increase : function(points) {
            currentScore += points;
            return currentScore;
        },
        decrease : function(points) {
            currentScore -= points;
            return currentScore;
        },
        reset : function() {
            currentScore = initScore;
            return currentScore;
        }
    };
};

// 사용 예시
const scoreTracker = createScoreTracker(100);
console.log(scoreTracker.increase(10)); // 110
console.log(scoreTracker.decrease(20)); // 90
console.log(scoreTracker.reset()); // 100

// 위 코드의 잘못된 점
// 통과

// 수정한 코드
// 통과

// 사용 예시
// 통과

// 코드 설명
// 1. currentScore 변수
// currentScore는 createScoreTracker함수 내부에 선언된 변수로, 초기 점수인 initScore로 설정됨
// 이 변수는 반환된 객체의 메서드들에서 공유됨
// 2. increase 메서드
// increase 메서드는 인자로 받은 points를 currentScore에 더하고, 업데이트된 점수를 반환함
// 3. decrease 메서드
// decrease 메서드는 인자로 받은 points를 currentScore에서 빼고, 업데이트된 점수를 반환함
// 4. reset 메서드
// reset 메서드는 currentScore 를 초기 점수인 initScore로 재설정하고, 초기 점수를 반환함

// 사용 예시
// increase 메서드를 사용하여 점수를 증가시킬 수 있습니다.
// decrease 메서드를 사용하여 점수를 감소시킬 수 있습니다.
// reset 메서드를 사용하여 점수를 초기값으로 리셋할 수 있습니다.

// 실생활 예시
// 온라인 학습 플랫폼에서 학생의 점수를 관리하는 함수를 작성하세요.
// 이 함수는 초기 점수를 받아야 합니다. 세 가지 함수를 가진 객체를 반환해야 합니다.