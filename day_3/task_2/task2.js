
//call
// call() method is used to call a method with an object as a parameter


const person = {
  name:"Amarnath",
  
  name: function () {
    return this.name ;
  }
}


//console.log(person.name());

//here it will call the name as in the assigned variable  because here this refers to the current variable.


//but methods like call and blind can refer this to any object 


const person1={
    name:"amarnath yendluri"
}

console.log(person.name.call(person1));


//we can pass the arguments in the call method 

const address={
   
    area:function(city,town){
        return this.state+" "+this.dis+" "+city+" "+town;
    }
    
}

const address1={
    state:"Andhra pradesh",
    dis:"nellore"
}

let ans=address.area.call(address1,"nellore"," nellore");
console.log(ans);


//here we passes city ,town as arugments to the function and call the function by using call method


//apply
//apply method is similar to 