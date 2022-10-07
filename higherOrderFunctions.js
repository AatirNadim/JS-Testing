//higher order functions are the functions that take other functions as a paremeter, or return other function as value.
const callback = (n) => {return n*n}

const cube = (n) => {return n*callback(n)}
console.log(cube(21349))

//returning function as value