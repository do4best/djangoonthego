/*
       a
      /  \
      b   c
      /\  /
      d e f
*/

function depthTraversal(root){
    const result = [];
    function traverse(node){
        if(node !== null){
            result.push(node.value)
            traverse(node.left);
            traverse(node.right)
        }
    }
    traverse(root)
    return result;
}
class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left  = null;
    }
}

let root = new Node('a')
const nodeB = new Node('b')
const nodeC = new Node('c')
const nodeD = new Node('d')
const nodeE = new Node('e')
const nodeF = new Node('f')

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE
nodeC.left=nodeF;

let result = depthTraversal(root)
console.log(result)