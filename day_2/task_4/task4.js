

//prototype
//prototype is a used to inherit the features  of another class.

const animal={
    eat:true,
    walk(){
        console.log("animal is walking");
    }
};
console.log(animal);


const dog={
  bark:true,
};
console.log(dog.bark);
console.log(dog.eat);//it is error here we are not defined the eat vraible in dog object 

//eat variable is in the animal object by using prototype we can inherite it 

//Object.setPrototypeOf(dog, animal);//now we can extends all the methods and variables in animal object.

//console.log(dog.eat);

dog.__proto__ = animal;
console.log(dog.eat);



console.log(Object.getPrototypeOf(dog));//it will give the parent of the object


//const animaldetails={};
//console.log(animaldetails);//it is an empty object

const animaldetails=Object.create(animal);
console.log(animaldetails);
//it will give the all the properts of the animal object



class person {
    constructor(name) {
        this.name = name;
    }
    hi() {
        console.log("name of the person is" + this.name);
    }
}

const person=new person("amarnath");
console.log(hi.person());




function Person(name) {
  this.name = name;
}

Person.prototype.hi = function () {  //here prototype method id used to to add the methood in the person function
  console.log("Name of the person is " + this.name);
};

const person1 = new Person("amarnath");
person1.hi(); 




