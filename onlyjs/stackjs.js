class Stack{
    constructor(){
        this.stack=[];
        this.maxSize=100;
        this.top = -1
       
    }
    isEmpty(){
           let value=''
        for (let value1 in stack){
value++;
        }
         if(this.stack === null){
            return "Nothing is in the stack"
        }else{
            return `We have ${value} values in the stack`
        }
       
    }
    isFull(){
        let value=''
        for (let value1 in stack){
value++;
        }
    return (this.maxSize === -1?"The Stack is full ":`Here we go we have ${value} element`)
    }
    push(value){
         if (this.stack.includes(value)) {
        return "Duplicate value, not pushed";  // Or handle as needed (e.g., do nothing)
    }
        if (this.top >= this.maxSize - 1) {
            return "Stack is full";
        }
        this.top++;
        this.stack[this.top] = value;
        return value;
    }
}

let stack = new Stack();
stack.push(2)
stack.push(2)
stack.push(22)
console.log(stack)
