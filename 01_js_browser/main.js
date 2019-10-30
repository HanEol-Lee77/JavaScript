// import { request } from "https"

/* 1. <input> 태그 안의 값을 잡는다. */
const inputArea = document.querySelector('#js-userinput')
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')

button.addEventListener('click', (e) => {
    // const inputValue = inputArea.value
    // console.log(`click 됐어요: ${inputValue}`)
    pushToDOM(inputArea.value)
})

inputArea.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        // console.log(`엔터키 쳤어요: ${inputArea.value}`)
        pushToDOM(inputArea.value)
    }
})


/* 2. Giphy API 를 통해 data 를 받아서 가공한다. */

// 받아온 키워드를 가지고 
const searchAndPush = (keyword => {
        
    const API_KEY = 'U8XHJ7HyqRWY1LVm88ANMxGeO1URmdS3'//'o2LOve16li0NenYN8kEemw0FaoG5wKzd'
    // let keyword = 'samsung'
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

    // request.GET()
    const GiphyAPICall = new XMLHttpRequest() // asynch함수

    GiphyAPICall.open('GET', URL)
    GiphyAPICall.send()

    // requests.get(url)
    // 요청을 보내고 받아온 방식

    // request.get(URL) // 자바스크립트단에서 
    GiphyAPICall.addEventListener('load', e => {
        //1// console.log(e.target.response)
    const parsedData = JSON.parse(e.target.response) //rawData
        //1// console.log(parsedData)[0].images.original.url

    //2// const imageURL = parsedData.data[0].images.original.url
    //2// pushToDOM( imageURL )
    // const datas = parsedData
    // pushToDOM(datas)
    pushToDOM(parsedData)
    })  // load라는 이벤트 발생, 이벤트 핸들링했던 로직 함수처럼 넣기
})





/* 3. GIF 파일들을 index.html(DOM)에 밀어 넣어서 보여준다. */
//2// const pushToDOM = (data) => {
//2//     resultArea.innerHTML += [`<img src="${data}">`]
//2// }

// consloe

const pushToDOM = (datas => {
    resultArea.innerHTML = null;
    // console.log(datas.data[i].images.original.url)
    const dataSet = datas.data

    /* 1번 코드 */
    // dataSet.forEach(imgData => {
    //     let imageURL = imgData.images.original.url

    //     // document.createElement('img')
    //     resultArea.innerHTML += `<img src="${imageURL}">`
    // })

    /* -> 2번코드로 정제 */
    dataSet.forEach(imgData => {
        let imgURL = imgData.images.original.url

        const elem = document.createElement('img')
        elem.src = imgURL
        imageURL.elem.className = 'container-image'
        resultArea.appendChild(elem)
    })



    // for( let i = 0 ; i < dataSet.lenght; i++){
    //     resultArea.innerHTML += `<img src="${datas.data[i].images.original.url}"> `  
    // }
    // resultArea.innerHTML = `<img src="${datas.data[i].images.original.url}"> `
    // for(let i = 0 ; i < datas.length; i++){
    //     resultArea.innerHTML += [`<img src="${datas.data[i].images.original.url} ">`] // typeOf(resultArea.innerHTML) 치면 'string'임을 알 수 있음
    // }
})
// consloe


// 어느 단에서 가지고 올지 **


// 장고 앱에 js 코드
// 마우터를 써서 .. spa가 넘겨주는 정도까지.. django가 라우팅 안하도록 할 수 있도록