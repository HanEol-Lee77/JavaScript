
////////////////////////////////
/////////////////////////////

const fs = require('fs')

let content = ''

console.log('파일읽기 전')

content = fs.readFile('me2.json', (err,data) => {
    // console.log('파일 읽기')
    // console.log(data)
    setTimeout( (err) => //err
        console.log(JSON.parse(data))
    )
})

// ???
// callback 위에 것이 끝나기 전에 하지 않게 하고 싶다.

console.log(content)
// 비동기적 함수  ( ,function)

console.log('끝')





// let content =''

// console.log('파일읽기 전')

// content = fs.readFileSync('me2.json')

// console.log('읽기 종료')

// console.log(JSON.parse(content))

// console.log('끝')

// {   
//     name: 'john',
//     appleProducts: {macBook: '2018pro', iPad: '2018pro'}
// }