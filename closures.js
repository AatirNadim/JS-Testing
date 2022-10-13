//we can declare as many inner functions inside the outer fuction as we want
// when the inner function uses the data members of the outer function, we term it as closure

const outerfunction = () => {
    let count = 0
    const innerfunction = () => {
        count++
        return count
    }
    return innerfunction
}

const fun = outerfunction()
console.log(fun())
console.log(fun())
console.log(fun())
console.log(fun())

//the inner function return value increases at every turn
