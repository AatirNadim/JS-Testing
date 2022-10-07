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

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

for(const itr of users) {
    console.log(`${itr._id} --> ${itr.isLoggedIn}`)
}
//where the id = fg12cy, change the isLogged state.

for(const itr of users) {
    if(itr._id === 'fg12cy') {itr.isLoggedIn = !(itr.isLoggedIn)}
    console.log(`${itr._id} -> ${itr.isLoggedIn}`)
}

