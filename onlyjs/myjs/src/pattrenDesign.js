// Abstract Factory method.
// class Employee{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     toString(){
//         return this.fname + " , " + this.lname; 
//     }
// }
// class Student{
//     static studentName(fname,lname){
// return new Employee(fname,lname)
//     }
// }
// let employee = new Employee("Meer","Afzal")
// console.log(employee)
// let student1 = Student.studentName("Meer","Afzal");
// console.log(student1.toString())

//////// Abstaract Factory


class Vehicle{
    drive(){

    }
}
class Bus extends Vehicle{
    drive(){
        console.log("Bus is Driving")
    }
}
class Car extends Vehicle{
    drive(){
        console.log("Car is Driving")
    }
}

class Airplane extends Vehicle{
    drive(){
        console.log("Airplane is Driving")
    }
}
let car = new Car();
car.drive();
