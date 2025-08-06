
class details {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.constru = function () {
            console.log("this is my name", +name);

        };
    }
}
const person=new details("amar",21);
console.log(person.name);
console.log(person.age);
person.constru();


//(or)

class person1 {


    constructor(name) {
        this.name = name;
    }
    hi() {
        console.log(this.name+"this is my name");
    };
}

const obj=new person1("amarnath");
obj.hi();

