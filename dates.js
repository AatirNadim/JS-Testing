const date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getUTCDate());
console.log(date.getSeconds());
console.log(date.getTime());
// const val = prompt('enter the age')
// console.log(`the age is ${val}`)

obj1 = {
    x:23, y:45
}
obj2 = {x:12, y:67}

const slope = () => {
    return (obj2.y - obj1.y)/(obj2.x- obj1.x)
}

//writing just console.log(slope) will give the output as function:slope

// console.log(slope())

const curr = new Date().getFullYear()
const year = 1998
if(curr -year >=18) console.log('Allowed')
else console.log('Not allowed')
// const date = new Date()
console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)