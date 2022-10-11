//with this we officially kick off with classes in javascript

class class1 {
    constructor (name = "aatir", age, id) {
        this.name= name
        this.age = age
        this.id = id

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