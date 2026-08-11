function findNumber(arr:number[],value:number):number|undefined|string{
    return arr.find(val=>val===value)??"Sorry nothing is found";

}
let students:number[] = [2,44,51,23,55,48]
console.log(findNumber(students,11))
function findGeneric<T>(arr:T[],value:T):T|undefined|string{
    return arr.find(val=>val===value)??"Nothing found"
}
const names:string[]=["Meer","Faisal","Shah"]
console.log(findGeneric(names,"Syed"))