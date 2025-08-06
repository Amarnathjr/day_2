
const cars=[10,54,8,2,,8,5];
const ans=cars.map(function(x){
    return x*2;
});
console.log(cars);

console.log(ans);

//

const twice=cars.map(x=>x*2);
console.log(twice);


Array.prototype.mymap=function(callback){
    const arr=[];
    for(let i=0;i<this.length;i++){
        if(this[i]!=undefined){
            arr.push(callback(this[i],i,this));
        }
    }
    return arr;
}
const array=[4,8,85];
const obj=array.mymap(function(x){
    return x*2;
});
console.log(obj);