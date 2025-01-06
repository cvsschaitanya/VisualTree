import BinarySearchTree from "../dataStructure/BinarySearchTree.js";

let bst = new BinarySearchTree();

bst.insert(4);
bst.insert(3);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(6);
bst.insert(7);

bst.balanceBST();

bst.remove(4);

// console.assert(bst.tree.value===5);

let inOrderValues = []
for(let node of bst.inorder()){
    inOrderValues.push(node.value);
}

console.assert(JSON.stringify(inOrderValues) == JSON.stringify([1,2,3,5,6,7]))