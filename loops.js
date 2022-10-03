for(let a = 5;a<=10;a++) 
console.log(a+34)

const a =['array', 'table', 'binary']
for (const itr of a) 
console.log(itr)

const b = []
for(let itr of a)
b.push(itr)

console.log(b)

const one = 1, two = 2, three = 3
const c = [one, two, three]
console.log(c)
console.log(a.includes('table'))
const arr = [[1, 'mohammad'], [2, 'aatir'], [3, 'nadim']]
const newarr = [], new2 = []
for( let [itr1, itr2] of arr) {
    newarr.push(itr1), new2.push(itr2)
}
console.log(newarr), console.log(new2)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  const newArr = []
  for(const country of countries){
    newArr.push(country.toUpperCase())
  }
  
  console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]