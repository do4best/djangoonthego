type wrapped<T> ={value:T}
const wrappedValue:wrapped<number> = {value:10} 
const nameFind:wrapped<string> = {value:"Meer"}
console.log(wrappedValue)
console.log(nameFind)

class Person<T>{
    constructor(private name:string){

    }
    public setValue(value:T){
        return this.value;
    }
}