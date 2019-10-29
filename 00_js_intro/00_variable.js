// Python
// name = 'john'
// print(name)

// js의 주석은 // 이다.

// JS
// x = 1 // 아무것도 선언해주지 않으면 전역변수가 된다. (비추, 아무거나 뿌시는 뿌셔뿌셔가 됨.)
let x = 1 // x가 1이 되게 하라. 선언은 1번만 가능! 이미 있는 공간에는 선언이 불가능!
// let x = 2 // 2번하면 에러!
x=2
// print(x);
console.log(x)

if (x == 2) {
    let x = 3
    let y = 4

    console.log(x)
}

console.log(x)
// console.log(y)

const MY_FAV = 11

console.log('내가 좋아하는 숫자는 ' + MY_FAV)

console.log(`내가 좋아하는 숫자는 ${MY_FAV}`)

// MY_FAV = 20 // const로 선언된 재설정도 안된다.
// const MY_FAV = 20 // 재할당도 안된다.

// var : 쓰지 않는다. : 기능이 funcky (?) 해서.

// 무엇을 | 어디에 | 어떻게(=) 저장하는지

// 1. 무엇을 (자료형, Data Type)
// - type() in python
// - Primitive Types(원시자료형:나자마자 있는,원래부터 존재한) 숫자(아무숫자, (-)Infinity, NaN ) / 글자('', "", ``) / 불리안 (true, false) / Empty Value ()

// 각각의 자료형에는 . 찍으면 대부분의 compile 언어
// 원시자료형에서는 쓸 수 없는.. // 언어 내부에 자체적으로 지원하는 method, property가 있음
// 'hello'.length     5  
// 'hello'.toUpperCase()      "HELLO"
// 자바랑은 문법적으로는 비슷한데, 기능적으로 많이 다르다.

// 2. 어디에 (identifier 변수명, Container Type : 자료형의 종류)

// 변수라는 저장소가 있었고, list로 만들었고, dictionary까지 upgrade. // 저장 파트는 이 두 가지를 주로 치는 것이라고 볼 수 있음.
// - 상수명 : ALLCAP
// - 변수명, 함수명 : camelCase
// - 클래스 : PascalCase

// Runtime에.. 여기에 너무 binding 되진 말라. 개발이 느려지면 안되고, 익숙한 형식으로 코딩을 하되, 남들이랑 같이 써야 할 때는 strict하게 지킨다. 
// 제한은 사용에 불편하지 않은 선에서.

// window.document.getElementsByTagName('p')

// 묵시적 형변환 문제 :   implicit type conversion

// undefined는 뭘까?
// 하나를 expression이라고 한다.
// 그 밑에는 반드시 return값이 나온다.

function add(x,y) {
    return x + y
}

// function expression 함수 표현식 주로 사용
const sub = function(x,y) {
    return x - y
}

// arrow function (ES6)
const mul = (x, y) => {
    return x * y
}

const ssafy = function (name) {
    return `안녕, ${name}`
}

const ssafy1 = (name) => {
    return `안녕, ${name}`
}

// 인자쪽 괄호는 인자가 1개만 있을 때,
// 블락을 없애는 조건은 표현식이 하나만 있을 경우
// const ssafy = name => `안녕, ${name}`
// const ssafy1 = () => {}

// const square = function (num) {
//     return num **2
// }

const square = num => num ** 2

console.log( square(2) )
