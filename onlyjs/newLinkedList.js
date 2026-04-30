class Node{
    constructor(data){this.data=data;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(value){
        let node = new Node(value)
        if(this.head == null){
            this.head = node;
        }else{
            this.tail.next=node;

        }
        return this;
    }
    printAll(){
        let current = this.head;
        while(current != null){
            console.log(current.data)
            current = current.next
        }
    }
}
let node = new Node("Hello")
node.next = new Node("Welcome")
console.log(node)


console.log(node.next)