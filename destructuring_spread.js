//this workplace is to delve into the spread operations

const numbers = [1, 2, 3,4]
const [one, two, ...rest]= numbers
console.log(one, two, rest)

const arr = [[1, 2, 3, 4], [5, 6, 7,8]]
const [thee, four] = arr
console.log(thee, ',,', four)

//skipping values

let [et, un, tes] = numbers
console.log(et, un, tes)

let [p1 = 'juspay', p2, p3] = [undefined, 'tsunade', 'faasil', 'asss']
console.log(p1, p2, p3)

//destructuring objects

const obj1 = {
    name : 'aatir', class:'1st', age: 10, traits : {
        behaviour : ['behaviour1', 'behaviour2']
    }
}
console.log(obj1.traits.behaviour)
console.log(obj1.class)

//note that class is a keyword
//everything is keyword specific
let {name, traits, age, class : c} = obj1
console.log(name, traits, c)
//working just fine
let {name : n, traits : {behaviour : b}} = obj1
console.log(n, b)

//object parameter with destructuring

function disp({name, traits}) {
    console.log('inside the function')
    console.log(name, traits)
}

disp(obj1)
//rest operator with objects
let obj2 = {...obj1, travelogue : 'not applicable'}

console.log(obj2)

