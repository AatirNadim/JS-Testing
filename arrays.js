// const arr = Array()
// console.log(arr)
// arr.push(23)
// arr.push(34)
// console.log(arr);
// let nums = []
// // nums.push(1), nums.push(34)
// nums = [1,2,3,4,5,6,3,8,9,0]
// console.log(nums)
// arrays of different data types
// arrays of objects as well
const arr_obj = [
    {
        'name':'aatir', 
        'age' : 13
    }, {
        'name':'shakir',
        'age' :14
    },
    1,6,3,5,7,4,6,3, 'happy'
]

console.log(arr_obj)
// console.log(typeof(arr))
// console.log(typeof arr[7]);
// declaring the array as const means two things yet,
// first --> we cannot use the name again
// second --> we cannot reassign the array as something else
// if we have to reassign , we would have to use let arr = [], then arr = [sasa]
// however, push() and pop() is allowed in the array declared as const
// i.e., we can do as , const arr = []
// arr.push(1), arr.push(2)
const places = ['lucknow', 'delhi', 'hungary', 'berlin', 'yorkshire', 'rekjavik']
console.log(places)
places[2] = 'tuscany'

console.log(places)

const eight = [1,2,3,4,5,6]
// eight.fill('G')
console.log(eight)
console.log(typeof eight[3]);

const arr = [1,2,3], arr1 = [20,30,40,50]

// arr1.forEach((value, index, array) => {
//     arr.push(value)
// })

console.log(arr.concat(arr1));
console.log(arr)

// almost every function used in string can be used supposedly in the arrays as well

const vals = ['aatir', 2, 'return', 'nadim', 'juskpay']

console.log(`${vals.indexOf('nadim')},   ${vals.indexOf(2)}`)

console.log(vals.includes('nadim1'))
// isArray() functions
console.log([1,2,3,4,5,6].toString())
// we can also join() passing the delimiter as the param
console.log([1,3,5,6,2,2,4,5,6].join(' ==> '))

console.log([1,2,3,4,5].map((value, index, array) => {
    return `${Array(value).fill('A').join(', ')}`
}))

console.log([4,5,6,7,8].slice(2,4))

console.log([4,5,6,7,8].splice(1, 3))