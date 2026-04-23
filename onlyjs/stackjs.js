class Stack{
    constructor(){
        this.maxSize=100;
        this.top=-1;
        this.stack=[];
    }
    push(value){
        if(this.isFull()){
            return "Stack is full"
        }
        this.top++;
        return this.stack[this.top]=value
    }
    isFull(){
        return this.top === this.maxSize-1;
    }
    isEmpty(){
        return this.top === -1;
    }
    remove(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        this.top--;
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.top]
    }
}
let stack = new Stack()
stack.push(12)
console.log(stack)
function reverseString(str){
let stack = new Stack();
let sentence = "";
for(let word in str){
    stack.push(str[word])
}
while(!stack.isEmpty()){
    sentence += stack.remove();
}
return sentence;
}
function anotherReverse(str){
    let arr=[];
    let reverse=""
    for(let word in str){
        arr.push(str[word])
    }
    while(arr.length){
        reverse += arr.pop()
    }
    return reverse;
}
let sentence="This is quite strange for me"
let result = reverseString(sentence)
let result1 = anotherReverse(sentence)
console.log(result1)