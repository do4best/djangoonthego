class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;

    }
    setCarName(name,model){
        this.name = name;
        this.model = model
        console.log(`Car name adjusted to: ${this.name}`)
    }
    clone(){
        return new Car(this.name,this.model)
    }
}
const originalName = new Car("Toyota","1986")
const cloneCar = originalName.clone()
cloneCar.setCarName("Mercedes",'2026')
console.log(originalName)
console.log(cloneCar)