//with this we officially kick off with classes in javascript

class class1 {
    constructor (name = "aatir", age, id) {
        this.name= name
        this.age = age
        this.id = id
        this.arr = []
    }
    disp() {
        console.log(`name --> ${this.name}, age --> ${this.age}, id --> ${this.id}`)
    }
}

const obj = new class1(undefined, 23, '33ed4')
obj.disp()

const obj1 = new class1('hill', 23, 'yy03ed')
console.log(obj)
console.log(obj1)

//this works just fine
obj.yips = true
console.log(obj)

for(let i=0;i<12;i++) obj1.arr.push(i*34)

console.log(obj1)

//getter functions

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }

    getFullName() {
        return this.firstName + ' '+ this.lastName
    }
    get getName() {
        return this.firstName + ' '+ this.lastName
    }
    set setCity (name) {
        this.city = name
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//both below work the same
console.log(person1.getFullName())
console.log(person1.getName)

person1.setCity = 'Lucknow'
console.log(person1.city)

//setter functions

console.log(person1)

//static functions

class class2 {
    constructor(val1,val2, val3) {
        const v1 = val1
        const v2 = val2
        const v3 = val3
    }
    getVal() {
        return this.v1 + ' ' + this.v2 + ' ' + this.v3
    }
    static func1() {
        let arr = [1, 2,3, 4, 5]
        console.log(arr)
    }
}

const cl = new class2(23,'sasa', 233)

cl.getVal()
//call the static function with class,when required
//call the normal method with object of the class
class2.func1()

