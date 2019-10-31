//DogAPI.open()
//DogAPI.send()
//DogAPI.addEventListener()

//맨 위에 올려서 사용한다.

const dogURL = 'https://dog.ceo/api/breeds/image/random'; // import해오는 것과 비슷
const catURL = 'https://api.thecatapi.com/v1/images/search';

const dogButton = document.querySelector('#dog')
const catButton = document.querySelector('#cat')

const getDogAndPush = () => {
    axios.get(dogURL) // 1번
        .then( response => { // 싱글 인자면 괄호 빼줄 수 있다.
            console.log(response.data.message) // 확인용
            const imgURL = response.data.message//elem를 객체로 받아들여서 그 친구를 넣어주는 게 표준
            const imgTag = document.createElement('img')
            imgTag.src = imgURL

            document.querySelector('#show').appendChild(imgTag)
        } )
}

const getCatAndPush = () => {
    axios.get(catURL) // 1번
        .then( response => { // 싱글 인자면 괄호 빼줄 수 있다.
            console.log(response.data[0].url) // 확인용
            const imgURL = response.data[0].url//elem를 객체로 받아들여서 그 친구를 넣어주는 게 표준
            const imgTag = document.createElement('img')
            // imgTag.src = imgURL
            imgTag.src = response.data[0].url
            // console.log(imgTag)
            // console.log(imgTag.src)
            document.querySelector('#show').appendChild(imgTag) // id="show"인 곳에 imgTag의 자식 객체 추가 : imgTag안에 url을 넣은 게 하나 추가됨!
        } )
}


dogButton.addEventListener('click', getDogAndPush) // 뒤에 함수를 집어넣는데, 어떤 일을 할지 포장하자!

catButton.addEventListener('click', getCatAndPush)


// 뭐할지
// 1. axios -> dog 사진 요청
// 2. <body> 아래에 <img> 받아온 사진 보여주기


// axios.get(URL).then(function(){})

const result = axios.get(URL);
// Promise 객체 (resolved)

// Promised 객체를 까보기 위해서 .then()
result.then((res) => {
    console.log(result)
});

axios.get(URL).then(result => console.log(result.data.message));
