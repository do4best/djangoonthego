import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
class Node{
    constructor(data){
        this.data = data;
        this.right=null;
        this.left=null
    }
}
function depthFirstTreversal(value){
    const result=[]// array
    function traversal(node){ // a function taking a parameter
        if(node!==null){  // checking if the given value is not null
            result.push(node.data);
            traversal(node.left);
            traversal(node.right)

        }
       

    }
     traversal(value)
        return result;
}
const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');
root.left=nodeB;
root.right= nodeC;
nodeB.left= nodeD;
nodeB.right= nodeE;
nodeC.left= nodeF;
let result = depthFirstTreversal(root)
let counter=1;
function recursion(number){
    if(counter>number){
        return ;
    }
    console.log(counter)
     counter++;
    return recursion(number)
}
document.querySelector('#app').innerHTML = `
<h1>${recursion(19)}</h1>
`

setupCounter(document.querySelector('#counter'))
