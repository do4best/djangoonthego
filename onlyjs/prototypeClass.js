// Functional Programming approach - Factory function
const createCar = (name, model) => ({
    name,
    model
})

// Pure function - returns new object instead of mutating
const setCarName = (car, name, model) => {
    console.log(`Car name adjusted to: ${name}`)
    return createCar(name, model)
}

// Pure function - creates a copy
const cloneCar = (car) => createCar(car.name, car.model)

// Usage
const originalName = createCar("Toyota", "1986")
const cloneCar1 = cloneCar(originalName)
const updatedCar = setCarName(cloneCar1, "Mercedes", "2026")

console.log(originalName)
console.log(updatedCar)
function memoize(fn) {
  const cache = {};
  return function(x) {
    // if (cache[x]) return cache[x];
    // const result = fn(x);
    // cache[x] = result;
    // return result;
    return cache[x]?fn(x):cache[x]
  };
}

const square = memoize(x => x * x);
console.log(square(5)); // computes and caches
console.log(square(5)); // returns cached result

const order2=(a,b)=>{
    if(a<b){
        return [a,b]
    }else{ return [b,a]}
};
let [smaller,bigger] = order2(90,95)

console.log(bigger)
const findMax=(...max)=>{
    let max1 = max[0];
    for(i of max){
        if(max1<max[i]) max1=max[i]
    }
    return max1;
}

let arr = [11,2,3,4,5,66]
console.log(findMax(...arr))
function sumit(sum,...calc){
    sum(...calc)
}
console.log(sumit(1,2,3,4,5))