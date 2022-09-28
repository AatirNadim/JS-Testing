const a = 'aatir', b ='nadim'
const s = `this is ${a} ${b}`
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.split(' '))
// substr is supposed to take two arguments, viz. starting index and the length of the supposed substring
//substr is now deprecated
//substring takes two arguments, viz. the starting and the final index
console.log(s.substring(3, 7))

const arr = 'precociously prepare pruned perturbed purveyors'.split(' ')
console.log(arr)
console.log('     kill the karkus      '.trim(' '))

console.log('this is aatir nadim'.includes('nadim'))
console.log('this is aatir nadim'.includes('nad'))

console.log('this is aatir nadim'.replaceAll('is', 'was'))

console.log(0 + 'aatir nadim'.charCodeAt(4))

console.log('this is aatir nadim'.indexOf('is'))

//startsWith, endsWith, concat, 
// typeof(NaN) is number
//convert float to num --> parseInt()
// console.log(parseInt('453'))
// console.log(parseFloat('344.323'))
// console.log(parseInt(344.232))
// console.log()

console.log('love the way we LoVe the LOVe'.match(/love/gi))