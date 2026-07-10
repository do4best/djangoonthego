class Stack{
    constructor(){
        this.stack = [];
        this.maxSize=100;
        this.top=-1;
    }
    pushIt(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull(){
        return this.top === this.maxSize-1;

    }
    pop(){
        if(this.isEmpty()){
            return null;
        }

        --this.top;
       return this.stack.pop()
    }
    isEmpty(){
        return this.top === -1;
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.top]
    }
}
let stack = new Stack();
stack.pushIt("god")
stack.pushIt(90)
console.log(stack)