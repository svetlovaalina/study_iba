const users = [{
    name: 'Eugene',
    surname: 'Vasil',
    age: 27,
  },
  {
    name: 'Alina',
    surname: 'Gospodarik',
    age: 17,
  },
  {
    name: 'Max',
    surname: 'Sotnikov',
    age: 33,
  },
  {
    name: 'Nick',
    surname: 'Tester',
    age: 5,
  },
  {
    name: 'Sveta',
    surname: 'Developer',
    age: 55,
  },
];




/*function myFunForArr(users) {
  let sortByAge = function (a, b) {
  return a.age > b.age ? 1 : -1;
}

let resMapUsers = users.map(function (item) {
  item.fullName = `${item.name} ${item.surname}`;
  return item;
}).sort(sortByAge);

  return resMapUsers;
}*/




const myFunForArr = users =>
  users.map(user => ({...user, fullName: `${user.name} ${user.surname}` })).sort((a, b) => a.age > b.age ? 1 : -1);

const obj1 = {x: 1};
const obj2 = {x: 2};
const obj3 = {...obj1, ...obj2}; // {x: 2}

let resFun = myFunForArr(users);

// console.log(resFun);

// ****************************************************************
// ****************************************************************
// ****************************************************************

// const foo = number => number2 => number3 => number + number2 + number3;

// foo(1)(2)(3); // 6

function fooTask1(a) { // fooTask1(f) выполняет каррирование
  return function(b) {
    return function(c) {
      return a+b+c
      };
  };
}

console.log(fooTask1(1)(2)(3))
// ****************************************************************
// ****************************************************************
// ****************************************************************

const obj = { x: 1 };

function foo(number) {
  return  this.x + number;
}
 

 const objGeneral = {
   x: 3,
   callfooTest:foo
 }

 foo.call(obj,1)
 foo.bind(obj,1)()
 foo.apply(obj,[1])
 

objGeneral.callfooTest.call(obj,1)


// foo.... ...

// call, apply, bind

// call foo function to get "2" as result


