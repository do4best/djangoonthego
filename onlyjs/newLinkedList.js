class Node{// node class
    constructor(data){ // constructor
        this.data=data; //have data
        this.next = null // pointer is always null
    }
}
class LinkedList{ // linked list class
    constructor(){ // constructor head and tail as null
        this.head = null;
        this.tail = null;
    }
    add(value){ // add the value in linked list
        let node = new Node(value)// insert the value in node
        if(this.head == null){ // check if the node is null
            this.head = node; // if the node is null insert it at the head
        }else{
            this.tail.next=node; // else point the next pointer

        }
        return this; // return this;
    }
    printAll(){  // print the values
        let current = this.head; // local variable storing the head;
        while(current != null){ // check if the local variable is not null
            console.log(current.data) // print the data
            current = current.next // point to the next
        }
        return this;
    }
    get(index){ // get a specific position of object in linkedlist;
let current = this.head; // local variable storing the head;
let i=0; // another local variable for countering the check
while(i<index){ // check if the counter is less then the given index;
    current = current.next; // point to the pointer
    i++//increment the counter;
}
return current.data; // return the current data;
        }
        insertAt(index,value){// insert the value to a specific position
            if(index === 0){ // check the index is not null;
                const node = new Node(value);// initialize the value in Node
                this.next = this.head;// the pointer should take the position of current head;
                this.head = node // and the head should take the value of already initialized value in Node
            }else{ // if this is not the case i mean the index is not null
                let current = this.head; // then the head value should be assigned as current;
                let previous = null; //  and another local variable previous should be assigned null;
                let  i = 0; // again a counter is initialize;
                while(i<index){ // again check if counter is less then the index;
                    previous=current ; // previous should be assigned as current which i think it was null 
                    current =current.next; // then the current should be pointer to next;
                    i++; /// increment the counter;

                }
                const node = new Node(value); // now intiliazed the node;
                node.next = current; // pointer should take the value of counter;
                previous.next = node; // the pointer has node value;
            }
        }
}
let node = new LinkedList()
node.add("Welcome")
console.log(node)


console.log(node.get(0))