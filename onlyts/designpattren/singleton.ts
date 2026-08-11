class Database{
    private static instance:Database
    private constructor(){
        console.log("Connecting to Database...")
    }
    static getInstance():Database{
        if(!Database.instance){
            Database.instance =  new Database()
        }
        return Database.instance;
    }
    query(sql:string){
        console.log(`Executing : ${sql}`)
    }
}
const db1 = Database.getInstance()
const db2 = Database.getInstance()
db1.query("Select * From users");
db2.query("Select * From users");
console.log(db1 === db2)