class Person
{
    public firstName:string;
    public lastName:string;
    
    constructor(firstName:string="Meer",lastName:string="Afzal")
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public toString(){
        return this.firstName + ", " + this.lastName
    }
    // Make Person iterable so `for...of person` works
    // public *[Symbol.iterator](): IterableIterator<string> {
    //     yield this.firstName;
    //     yield this.lastName;
    // }
}
let person = new Person()
for(let i in Object.values(person)){
    console.log(i)
}
function sumup<N1 extends number | string>(value1:N1,value2:N1) :string | number{
 if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2; // addition
  }
  return value1.toString() + value2.toString(); // concatenation
}
console.log(sumup(90,90))