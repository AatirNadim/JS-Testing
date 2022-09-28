const handleClick = (name, e) => {
    // console.log(`Hello, ${name}`);
    console.log('hello, ' + name + ' ' + e)
}

handleClick('Aatir');

const basket = [
    {
        name : 'Mohammad Aatir Nadim',
        type : 'Kuch bhi'
    },
    {
        // name : 'Kajaria',
        type: 'Desh ki mitti se bana hai bhaii'
    }

]
// var len = basket.length()
// console.log(len)
// vaforEr len = (basket.length())?basket.length():0;
// basket.forEach((element) => {
//     console.log(element.name)
// });

const htmlcomp = document.getElementById('sdsd').innerHTML;
htmlcomp = <>
<div class = 'sjaksja'>
    Hey there
</div>
</>

document.getElementsByClassName('asassa').forEach(element => {
    let html = element
    html.innerHTML = <></>
});

handleClick('Aatir', `${(e) => {return e;}}`)