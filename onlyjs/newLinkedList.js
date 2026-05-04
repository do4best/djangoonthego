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
        return this;
    }
    get(index){
let current = this.head;
let i=0;
while(i<index){
    current = current.next;
    i++
}
return current.data;
        }
        insertAt(index,value){
            if(index === 0){
                const node = new Node(value);
                this.next = this.head;
                this.head = node
            }else{
                let current = this.head;
                let previous = null;
                let  i = 0;
                while(i<index){
                    previous=current ;
                    current =current.next;
                    i++

                }
                const node = new Node(value);
                node.next = current;
                previous.next = node;
            }
        }
}
let node = new LinkedList()
node.add("Welcome")
console.log(node)


console.log(node.get(0))