const person1 = {
    name :'aatir',
    age : 20,
    lobj : {
        curr1: 12,
        curr2 : 13,
        age : 23
    },
    // arrow function not working here, why?
    objfunc : function() {
        console.log(`${this.name} and ${this.age}`)
    }
}
//arrow function not working anywhere, note.
person1.objfunc()
console.log(person1.lobj.curr1 + person1.lobj.curr2)

person1.fun1 = function() {
   console.log(this.lobj.curr1 + this.lobj.curr2) 
}
console.log('-----')
person1.fun1()
console.log('-----')
for(const itr of Object.keys(person1)) console.log(itr + ' ')

for(const itr of Object.values(person1)) console.log(itr + ' ')