// type User={
//     id:number,
//     name:string,
//     isActive:boolean,
//     age:number
// }
// type Users = User[]
// const users:Users=[{
//     id:1,
//     name:"Meer",
//     isActive:true,
//     age:45
// },
// {
//     id:2,
//     name:"Afzal",
//     isActive:false,age:20
// },
// {
//     id:3,
//     name:"Shah",
//     isActive:true,age:60
// }];
// console.log(users.filter(findId=>findId.isActive))
// console.log(users.sort((user1,user2)=>user1.age<user2.age?1:-1).filter((user)=>user.isActive).map(user=>user.name))

function privateCounter(){
    let counter:number=0;
    return{
        getValue:()=>{
            return counter;
        },
        increment:(val:number = 1)=>{
             counter += val;
            return counter;
        }
    }
}
const counter = privateCounter();
console.log(counter.getValue());
counter.increment(5);
console.log(counter.getValue());

function createPair<S,T>(v1:S,v2:T):[S,T]
{
    return [v1,v2]
}
console.log(createPair<string,number>("Hello",48))