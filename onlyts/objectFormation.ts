type PersonData={
    name:string,
    email:string|number,
    phone:number|string
    address?:string
}

const personDate:PersonData={
    name:"Meer Afzal",
    email:"do4best@gmail.com",
    phone:'0320-4522701'
}
const people:PersonData[] = [personDate]
console.log(people)
let result = people.map(list=>{
    console.log(list.name)
})
class Storage<T>{
private items:T[]=[];
add(item:T){
    this.items.push(item)
}
getAll():T[]{
    return this.items;
}
}
const numberStorage = new Storage<number>();
numberStorage.add(90)
numberStorage.add(80)
console.log(numberStorage)
