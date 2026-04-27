class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(value){
        let node = new Node(value);
        if(this.head === null){
            this.head = node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
    }
    get(index){
        let current = this.head;
        let i=0;
        while(i<index){
            current = current.next;
            i++;
        }
        return current.data;
    }
    insertAt(index,data){
        if(index === 0){
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        }else{
            let current =  this.head;
            let previous = null;
            let i = 0;
            while(i<index){
                previous = current;
                current = current.next;
                i++;
            }
            const node = new Node(data);
            node.next = current;
            previous.next = node;
        }
    }
    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data)
            current = current.next;
        }
    }
}

let linked = new LinkedList();
linked.add(100);
linked.add(200);
linked.add(300);
linked.printAll()