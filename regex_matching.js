//moving up with regex
//we can create a regexp with the constructor RegExp() or with enclosing forward slashes
//like --> /pattern/[<flag>]

let expr = 'lov'
let reg = new RegExp(expr)

console.log(reg.test('i think i be lovin you'))
console.log('i think i love the fact that i be lovin you'.match(/lov/gi))

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

console.log(txt.replace(/Python/gi, 'COBOL'))
console.log(txt.replace(/ /g, ' <space> '))

console.log(txt.replace(/language|recommend/gi, 'LANG'))

//[] represents any set
//[A-Za-z] with no space results in a-z and A-Z
console.log('apples are not read as Apples yet Apples are read as apples and Aadmi musafir hai aadmi nhi'.match(/[Aa](pples|admi)/g))

console.log('I have 12443 matches pending wherein I require 233 more'.match(/[0-9]/g))
console.log('I have 12443 matches pending wherein I require 233 more'.match(/\d/g))//wprks the same as above
console.log('I have 12443 matches pending wherein I require 233 more'.match(/\d+/g))
// console.log(txt.replace(/[A-Z]|*thon/g, 'jojo'))
console.log('I have 12443 matches pending wherein I require 233 more'.match(/\d../g))
//. represents any character except newline
console.log('I have 12443 matches pending wherein I require 233 more'.match(/\d.+/g))
console.log('I have \n12443 matches pending \nwherein I requi\nre 233 more'.match(/.+/g))
//above regex instruction, splits the given string into groups with the delimiter as '\n'
console.log('abcdefghijklmnopqrstuvwxyz'.match(/[ax](bc|yz)+/g))

console.log('Apples are apples'.match(/(A|a)pples/g))
console.log('Apples are apples'.match(/(A|a).{3}/g))
//both above and below work the same
console.log('Apples are apples'.match(/[Aa].{3}/g))
// console.log('')

