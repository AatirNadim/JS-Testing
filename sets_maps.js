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