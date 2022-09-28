const val = 1234
switch(val) {
    case 1:
        let func = () => {
            console.log('this is first')
        }
        func()
        break;
    case 1234:
        let func1 = () => {
            console.log('this is second')
        }
        console.log(func1())    
        console.log('baad wala')
        break;
    default:
        console.log('wrong input')
    
}