const switchCase=(obj,defaultValue="Default")=>(value)=>{
    return obj[value] || defaultValue;
}
const days={
    0:"Monday",
    1:"Tuesday",
    2:"Wednesday",
    3:"Thursday",
    4:"Friday",
    5:"Saturday",
    6:"Sunday"
}
const result = switchCase(days)
console.log(result(2))

let name1="Meer";
let anoterName = {...name1}
console.log(anoterName)