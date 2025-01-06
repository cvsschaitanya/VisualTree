import React, { useState } from "react";
import Node from "./node";
import Line from "./line";
import BinarySearchTree from "../dataStructure/BinarySearchTree";

const BinaryTreeComponent = () => {
    
    // Initialize the binary search tree

    const [bst, setBst] = useState(() => {
        let initialBst = new BinarySearchTree();
        console.log(initialBst.inorder());
        return initialBst;

    });

    // Initialize the new value

    const [newVal, setNewVal] = useState("");

    // Function to add a new value to the tree

    const addNewVal = () => {
        let newBst = bst.clone();
        if(newVal!=="") newBst.insert(newVal);
        console.log(newBst);
        setBst(newBst);
		setNewVal("");

    };

    // function to balance the tree

    const balanceBinaryTree = () => {
        let newBst = bst.clone();
        newBst.balanceBST();
        setBst(newBst);

    };

    //function to remove a particular node from tree

    const removeNode = () => {
        let newBst = bst.clone();
        newBst.remove(newVal);
        setBst(newBst);
        setNewVal("");

    };

    return (
        <React.Fragment>
            <h1>Tree</h1>
            <input
                type="number"
                onChange={(event) => {
                    setNewVal(Number(event.target.value));
                }}
				value={newVal}
            />
            
            <button
                className="btn btn-success m-2"
                onClick={addNewVal}
            >
                Add
            </button>

            <button
                className="btn btn-danger m-2"
                onClick={removeNode}
            >
                Remove
            </button>

            <button
                className="btn btn-warning m-2"
                onClick={balanceBinaryTree}
            >
                Balance
            </button>

           

            <div style={{ position: "relative" }}>
                {bst.inorder().map((treenode) => (
                    <React.Fragment key={treenode.keystr}>
                        <Line
                            r = {0.9}
                            node = {treenode}
                            initH = {50 * bst.getHeight()}    
                        />
                        <Node
                            r = {0.9}
                            node = {treenode}
                            initH = {50 * bst.getHeight()}
                        />
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

export default BinaryTreeComponent;