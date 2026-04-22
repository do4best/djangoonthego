class Stack{
    constructor(){
        this.stack=[];
        this.maxSize=100;
        this.top = -1
       
    }
    isEmpty(){
        return this.top == -1?"Nothing is there":"Yes we have"
    }
}

let stack = new Stack();
console.log(stack)
