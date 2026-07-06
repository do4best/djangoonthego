enum family{
    Brother,
    Sister,
    Mother,
    Father="Father"
}

let head_of_Table:family = family.Father;
console.log(head_of_Table)

type food=  "breakfast" | "Lunch" | "Dinner"
interface Person{
    name:string,
    email:string
}
function foodDemand(t:Person){
    console.log(t.name + " " + t.email)
}

foodDemand({name:"Meer Afzal",email: "do4best@gmail.com "})