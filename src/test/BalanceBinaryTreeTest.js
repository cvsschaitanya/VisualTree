import BinarySearchTree from "../dataStructure/BinarySearchTree.js";

let bst = new BinarySearchTree();

bst.insert(4);
bst.insert(3);
bst.insert(5);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(7);

bst.insert(10);


let preOrderValues = [];
for(let node of bst.preorder()){
    preOrderValues.push(node.value);
    
}

console.assert(JSON.stringify(preOrderValues)===JSON.stringify([]));