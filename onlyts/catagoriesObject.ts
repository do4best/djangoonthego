type User={
    name:string,
    city:string
}
const users:User[]=[
    {name:"Meer",city:"Multan"},
    {name:"Shah",city:"Multan"},
    {name:"Syed",city:"Lahore"}
]
const initial: Record<string, User[]> = {};
const result = users.reduce<Record<string, User[]>>((accu, user) => {
    const cityUsers = accu[user.city] ?? [];
    cityUsers.push(user);
    accu[user.city] = cityUsers;
    return accu;
}, initial);