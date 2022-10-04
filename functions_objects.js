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
const newres = (...arr) => {
    return res(arr)*1234
}
// const res = function(arr) {
//     return arr.reduce((total, itr) => {
//         return total + itr*2
//     }, 0)
// }
console.log(res([1, 2, 3, 4, 5]))
