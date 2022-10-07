//higher order functions are the functions that take other functions as a paremeter, or return other function as value.
const callback = (n) => {return n*n}

const cube = (n) => {return n*callback(n)}
console.log(cube(21349))

//returning function as value

const onetier = (n) => {
    const twotier = (m) => {
        const threetier = (o) => {
            return o*m*n;
        }
        return threetier
    }
    return twotier
}

console.log(onetier(2)(3)(4))
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

countries.filter((itr) => {return !itr.includes('land')}).forEach((itr) => console.log(itr.toUpperCase()))


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let val = ages.every((itr) => { return !(itr&1)})
ages.sort((a, b) => {return})
console.log(!(24&1))

console.log(ages.sort((a, b) => {return a - b}))
console.log(ages)
console.log(ages.sort((a, b) => {return b - a}))
console.log(ages)
const newarr = [...countries]

console.log(newarr.sort((a, b) => {return a.length - b.length}))

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
console.log(users.sort((a, b) => {
    if(a['age'] < b['age']) return -1;
    if(a['age'] > b['age']) return 1;
    return 0
}))

let sum = 0
sum = ages.reduce((prev, itr) => {return prev + itr}, 0)
console.log(Number.parseInt(sum/ages.length))
console.log(Number.parseFloat('    +10.233'))

const obj = {}
obj.arr = [...ages]

obj.sum = sum
obj.length = ages.length
obj.arr.forEach((itr) => console.log('value -->' + itr))