import BinarySearchTree from "../dataStructure/BinarySearchTree.js";

let bst = new BinarySearchTree();

bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);

let inOrderValues = [];
for(let node of bst.inorder()){
    inOrderValues.push(node.value);

}


console.log(inOrderValues);
bst.balanceBST();

let newInOrderValues = [];
for(let node of bst.inorder()){
    newInOrderValues.push(node.value);
    
}

console.log(newInOrderValues);

let preOrderValues = [];
for(let node of bst.preorder()){
    preOrderValues.push(node.value);
    if(node.parent!==null) console.log(node.value , node.parent.value);
}

console.log(preOrderValues);

console.assert(JSON.stringify(preOrderValues)===JSON.stringify([3,1,2,5,4,6]));