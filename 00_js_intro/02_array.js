const nums = [1, 2, 3, 4]
console.log(nums[0])
console.log(nums[nums.length - 1])

console.log(nums+nums)
console.log(nums-nums)
console.log(nums*nums)
console.log(nums/nums)

console.log(nums.reverse())
console.log(nums)

nums.push(0)
console.log(nums)

nums.pop()
console.log(nums)

// unshift, shift, includes, indexOf
nums.unshift(5)
console.log(nums)

nums.shift()
console.log(nums)

console.log(nums.includes(0))
console.log(nums.includes(4))
console.log(nums.indexOf(1))

// array 와 관련한 게 순회 에 많이 있다.
    // 반복문 : for (let num of nums) {}
    // map(함수, 리스트(이터러블))
    // -> nums 배열을 순회하며, 함수를 각각의 요소에 실행



// nums.forEach(함수)
// nums.forEach(function(순회되는요소){})
// nums.forEach(function(num){})


// nums 안의 요소 각각을 제곱하시오

// const square = function (num) {
//     return num **2
// }


// const square = num => num ** 2
// console.log( list(Map(square, nums)) )

// pass a function to map

// 되는 코드 예시 1 //
const map1 = nums.map(x => x ** 2);
console.log(map1);

const squaredNums = nums.map(num => num ** 2)
// map (lambda x:x**2, nums) -> python vers.

console.log(squaredNums)


// expected output: Array [2, 8, 18, 32]

let newNums = []
nums.forEach(function(num){
    newNums.push(num ** 2)
    console.log(num)
})
console.log(newNums)

