// const nothing = () => {}

console.log('async!!')

// setTimeout( 함수(3000 ms뒤에 실행될 함수 ),3000)  // milli second
// setTimeout( nothing, 3000)  // milli second

let i = 0
let j = 0

const nothing3 = () => {
    let i = 3
    let j = 3
    setTimeout( nothing2, 10000)
    console.log('으아아~ 10초')

    setTimeout( nothing, 3000)
    console.log('으아아~ 3초')

    console.log('asynch 안에 asynch 끝남')
}


const nothing = () => {
    console.log('3초 끝남')
    console.log( i++ )
}

const nothing2 = () => {
    console.log('10초 끝남')
    console.log( j++ )
}


console.log('start')

setTimeout( nothing3, 2000)

setTimeout( nothing2, 10000)

setTimeout( nothing, 3000)

// synchro하면서 blaocking 한 함수
//non-blocking
// asynchronous 동기적
//asynchronous 한 프로그래밍 언어.
// synchro하지 않은 것은 언어가 막지 않기 때문!!

// 출생의 한계 : 브라우저 조작. 

console.log('end')

// setTimeout : 담아두고.. 바로 시작. : 그 다음 3초 뒤에 얘가 끝났다는 게 나오면 다시 실행되고 끝난다.