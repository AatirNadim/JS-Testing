//here lies the start of library functions
//let be witnessed

//set works just fine.
//a collection of unique elements

const tempset = new Set()
console.log(typeof tempset)

tempset.add('javascript')
tempset.add('javascript')
console.log(tempset)    
let languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  console.log(new Set(languages))
languages = new Set(languages)
  languages.add('hispanic')
  languages.add('hungarian')
  languages.add('taiwanese')

console.log(languages)
// take note that declaring const means no change of any kind, (except in case of an array), neither the identifier can be used anywhere else
let language = ''
languages.forEach((itr) => {language += itr + ','})

console.log(language)

console.log(languages)
languages.add(344)
// console.log(languages.join(', '))
//spread operator is a great tool --> it gives the values individually, and can be used to print elements in a single line
console.log(...languages)

let arr1 = [6,1, 2, 3, 4,4, 4, 5, 6 ,2]
let set1 =new Set(arr1)
console.log(set1)

set1.add('dsdsd')
set1.add('eee')
console.log(set1)
console.log(typeof set1)
for(const itr of set1) console.log(typeof itr)

set1.add({
  name : 'aatir',
  class : 'jekyll'
})
console.log(set1)

console.log(set1.delete('aatir'))
// console.log(set1)
const arrobj  = []
for(const itr of set1) arrobj.push({name : '', class : itr})
arrobj.forEach((itr) => console.log(itr))

//union of sets

const a = [1, 2, 3, 4, 5, 7786]
const b = ['aatir', 'aatir','Aatir', 'nadim', 1]
let setc = new Set([...a,...b])
console.log(setc)
// (A - B) + (B - A)
const c = [3, 4, 5,6]
setc = new Set(c)
let setA = new Set(a), setB = new Set(b)
setA.forEach((itr) => {
  if(setB.has(itr));
  else setc.add(itr)
})
setB.forEach((itr) => {
  if(setA.has(itr));
  else setc.add(itr)
})
console.log(setc)


//working with maps
let map1 = new Map()
map1.set('aatir', 'nadim')
map1.set('nadim', 'ansari')
map1.forEach((itr) => console.log(itr))
console.log(map1)

console.log(map1.has('nadim'))
