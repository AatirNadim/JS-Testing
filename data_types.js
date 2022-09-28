const val = 1234;
const val1 = 5668;
const obj = {
    a :12234, 
    b : 'yippee'
}

console.log(obj)
let word = 'aatir_nadim'
word[5] = '5'
// original word not changed, strings are immutable
console.log(word)

console.log(word == 'Aatir_Nadim')

let arr = [2,3,4,5,6,7]
arr[3] = 1223
console.log(arr)
//entire array can be logged in the console


let obj1 = {
    first_name :'aatir', 
    last_name : 'nadim'
}
let obj2 = {
  first_name: "aatir",
  last_name: "nadim",
};
//console.log(obj1 == obj2) will yield false
console.log(obj1.first_name == obj2.first_name)

const pi = Math.PI

console.log(Math.floor(3.4))
console.log(Math.ceil(3.4));
console.log(Math.cos(34))
console.log(Math.min(2,3,7,1,4,-34))

console.log(Math.max(3,4,565,23))
console.log(Math.abs(-343))

// console.log(typeof(Math.sqrt(100)))

// console.log(typeof(Math.sqrt(2)))
console.log(Math.sin(1.57))
//radian
console.log('erer')
console.log(Math.random())

let beta = 'aatir', gamma = 'nadim'
const alpha = beta + gamma 
console.log(alpha)

//escape sequence 
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")
console.log('--------------------------------------------')
//we can use \ to indicate continuation of paragraph from the next line for javascript code, when not using text_wrap
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph.length);

// let a = `value of ${b} + ${c} = ${b+c}`
// is the same as print(f('value of {a} + {b} = {a+b}'))