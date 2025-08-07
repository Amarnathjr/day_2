

//bind()

//bind method is similar to the call method but bind method it will create a new function when we called.

const person={
   
    name:function(){
        return this.name;
    }
}

const person1={
    name:"amarnath yendluri"
}

let person3=person.name.bind(person1);
console.log(person3());


//here we  binds the function in to the variable





function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); 
console.log(double(2)); 
//output 4

//here we can pass method as a callback to correct the this

//bind method doesnt call immidetally it will return new function from the orginal function 
//we can pass the argumnets in the new function if we need.