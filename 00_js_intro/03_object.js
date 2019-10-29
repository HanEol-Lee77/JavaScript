// Node.js 가 file이라고 하는 라이브러리가 있다. 들고오자.
const fs = require('fs') // ?

// const me = {
//     'name1': 'john',
//     name2: 'john', // 변수명처럼 써도 작동함.
//     sleep: function(){
//         console.log('쿨쿨')
//     },
//     appleProducts: {
//         macBook: '2018pro',
//         iPad: '2018pro',
//     },
// }
// console.log(me['name1'])
// console.log(me['name2'])
// // console.log(me[name2]) // 에러 남!

// console.log(me.name2)
// console.log(me.sleep())
// console.log(me['name'])
// // sleep함수는 return 값이 없기 때문에 안나옴
// // 기본적으로 property가지고 있고, method도 가지고 있다.


// // 객체가 상속받는.. 원형 객체를 상속 받아서.. class처럼 사용했다가
// // ES6부터 지원해서 class처럼 쓰고 있다. : OOP에서 지원하는 여러 기능들이 내부적으로 원래 있던 곳에 구현되어있다.
// // 문법만 지원했지만..

// console.log(me.appleProducts.macBook)



const me = {
    'name1': 'john',
    name2: 'john', // 변수명처럼 써도 작동함.
    appleProducts: {
        macBook: '2018pro',
        iPad: '2018pro',
    },
}

// JSON(JavaScript Object Notation)

JSON.stringify()
const meJSON = JSON.stringify(me)
// object -> JSON(string)
console.log(typeof meJSON)

fs.writeFile('me.json', meJSON, err => {}) // callback 함수로 불림 : 작동을 하다가 에러를 만나게 되면, 에러가 났을 때 뭘할지. 알려줌.
// callback function : 함수 안의 함수
// 첫번째 인자로 에러 상황에 대해

fs.writeFileSync('me2.jason', meJSON) // ??

//JASON.parse()
// JSON -> object
const meObject = JSON.parse(meJSON)
console.log(meObject)

// JSON.parse()
