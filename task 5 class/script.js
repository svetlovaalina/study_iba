class Validator {
    constructor({name, age}) {
        this.name = name;
        this.age = age;

    }
email= "";
    addLastName(value) {
        this.surName = value
    }

    getFullName() {
        return `Full name: ${this.name}  ${this.surName}`
    }

    isEmail(email) {
        if (/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(email)) {
            return console.log('true! All good!')
        } else {
            return console.log('false')
        }
    }

    isAdult() {
        return this.age > 18 ? true : false;
    }


}

let validator = new Validator({
    age: 12,
    name: 'Bob'

});




validator.isEmail('123123'); // false
// Понять почему отрабатывает с undefined?
console.log(validator.isEmail('test@gmail.com')); // true 
// При вводе в консоль строчки ниже, также будет undefined. Почему?:(
validator.isEmail('test@gmail.com'); 
console.log(validator.isAdult()); // true (age >=18)
validator.addLastName('Tester')
console.log(validator.getFullName()); // Bob Tester