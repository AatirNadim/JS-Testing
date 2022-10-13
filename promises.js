
console.log('getting started with promises')
setTimeout(() => {
    console.log('afer waiting some time')
}, 3000)
// alias to the functioning of a promise

const func = (callback) => {
    setTimeout(() => {
        const arr = [1, 2,3, 4,5]
        callback(null, 'rejected message') //can be the arr or 0 or any value
    }, 3000)
}

const callback = (arr, msg) => {
    if(arr) console.log(...arr)
    else console.log(msg)
}

func(callback)

//moving on to promises
const func1 = (arr) => {
    let b= true
    arr.forEach((itr) => {
        console.log('------- ' + itr)
        if(itr > 20) b = false
    })
    arr.forEach((itr) => console.log(itr))
    console.log('everything fine')
    return b
}
const pro = new Promise((resolve, reject) => {
    const arr =[1, 2, 3,4,5, 26]
    const val = func1(arr)
    console.log('value returned is => ' + val)
    if(val) resolve('pending matter resolved')
    else reject('pending matter rejected')
}) //resolve, reject are the callback functions

pro
.then((msg) => {console.log(msg)})
.catch((msg) => {console.error(msg)})


const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const arr = ['Aatir', 'Bilal', 'Ijlal', 'Faiz', 'Anzal', 'Rashid']
        if(arr.includes('Bilal')) resolve('array includes the name')
        else reject('array does not include the name')
    },3000)
})

promise
    .then((msg) =>{console.log(msg)})
    .catch((msg) => {console.log(msg)})

//working with fetch api

