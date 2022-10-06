//declaration function
function add (num1, nums2) {
    return num1 + nums2
}
console.log(add(3, 4))
//anonymous function
const val = function(num1, num2) {
    return num1*num2
}

console.log(val(3, 4))

const func = (num1, num2) => {
    return num1*num2 + num1 + num2
}
console.log(func(2,3))
//implementing an arrow function inside the function, which takes array as input
const arr = ['berlin', 'moscow', 'tokyo', 'helsinki', 'spain']
function forArr(a) {
    return a.reduce((total, itr) => {
        return total + itr
    }, '')//taking the initial value as '', yeilds the answer as concatenated string
}
console.log(`The sum of the elements in the array is --> ${forArr([1, 2, 3, 4, 12, 13, 14, 15])}`)

const res = (arr) => {
    return arr.reduce((total, itr) => {
        return total + itr*2
    }, 0)
    // let sum = 0
    // for(let itr of arr) {
    //     console.log(itr)
    // }
    // return sum
}
const newres = (arr) => {
    return res(arr)*1234
}
// const res = function(arr) {
//     return arr.reduce((total, itr) => {
//         return total + itr*2
//     }, 0)
// }
console.log(newres([1, 2, 3, 4, 5]))

function fact(num1) {
    if(num1 < 1) return 1
    return num1*fact(num1 -1)
}
console.log(fact(20))


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const [one, two, ...rest] = arr1
console.log(rest)

console.log(arr1.slice(2))

//unlimited number of parameters

function sumInf(arr) {
    console.log(typeof(arr))
    let sum = arr.reduce((currsum, currval) => {
        return currsum + currval
    }, 0)
    return sum
}

console.log(sumInf([1, 2, 3, 4]))
// console.log(sumInf(1, 2, 3, 4, 5))
// console.log(sumInf(1, 2, 3, 4, 5, 6))

const fun = (...values) => {
    // let num = [...values]
    let sum = values.reduce((total, curr) => {return total + curr}, 0)
    return sum
}

console.log(fun(1, 2, 3, 4))


const num1 = [1, 2, 3,4]
// pass by reference
const num2 = num1
num2.push(56)
console.log(num1)
console.log(num2)


//filter function

let arr2 = ['why', 'i', 'am', 'learning', 'this']
const filterArray = (arr) => {
    arr = arr.filter((str) => {return Boolean(str[0] - 'a') })
    return arr
}
console.log(filterArray(arr2))
let val1 = 10
console.log(Boolean(val1))
const callback = (itr) => {
    return (Boolean)(itr&1)
}
const arr3 = [1, 2, 3, 4, 5, 6]
const filterNum = arr3.filter(callback)
//note-> cannot call callback function before it is initialized, sp either initialize it beforehand or 


console.log(filterNum)