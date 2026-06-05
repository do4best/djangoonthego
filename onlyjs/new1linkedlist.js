class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    addMember(value){
        let node = new Node(value)
        if(this.head === null){
             node = this.head;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
        return this;
    }
    
}
