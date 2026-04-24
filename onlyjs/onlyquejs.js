class Que{
    constructor(){
        this.maxSize=100;
        this.head=0;
        this.tail=0;
        this.que=[]
    }
    getLength(){
        return this.tail - this.head;
    }
    isFull(){
        return this.getLength() === this.maxSize-1;
    }
    isEmpty(){
        return this.getLength() === 0;
    }
    enqueue(value){
if(this.isFull()){
    return false;
}
this.que[this.tail] = value;
this.tail++;
return true;
    }
    dequeue(){
        const item = this.que[this.head];
        this.head++;
        return item;
    }
    peek(){
        return this.que[this.head]
    }
}
const queue = new Que();
queue.enqueue("Meer")
queue.enqueue("Afzal")
queue.enqueue("Shah")
console.log(queue)
queue.dequeue()
queue.dequeue()
console.log(queue.peek())

function reverseIt(str){
    let reverString="";
    const queue = new Que();
    for(let i=str.length-1; i>=0; i--){
        queue.enqueue(str[i])
    }
    while(!queue.isEmpty()){
        reverString += queue.dequeue();
    }
    return reverString;
}
let words = " Find the God and ask him a lot of questions "
let result = reverseIt(words);
console.log(result)