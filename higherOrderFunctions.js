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


const ages = [24, 22, 25, 32, 35, 18]

let val = ages.every((itr) => { return !(itr&1)})
ages.sort((a, b) => {return})
console.log(!(24&1))

console.log(ages.sort((a, b) => {return a - b}))
console.log(ages)
