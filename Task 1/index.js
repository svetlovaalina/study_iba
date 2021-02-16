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

console.log(resFun);

// ****************************************************************
// ****************************************************************
// ****************************************************************
