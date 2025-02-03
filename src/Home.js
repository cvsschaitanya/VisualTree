import React, { useState } from "react";
import BinaryTreeComponent from "./components/binarytree.jsx";

const Home = () => {

    const [showTree, setTree] = useState(false);
    // const [showLL, setLL] = useState(false);
    // const [showStack, setStack] = useState(false);
    // const [showQueue, setQueue] = useState(false);

    const goToTree = () => {setTree(true)};
    
    return(
        <div>
        {/* {showTree || showLL || showStack || showQueue ? ( */}
            {showTree ? (
            <>
                {showTree && <BinaryTreeComponent />}
                {/* {showLL && <BinaryTreeComponent />}
                {showStack && <BinaryTreeComponent />}
                {showQueue && <BinaryTreeComponent />} */}
            </>
        ) : (
            <div>
                <h1>Choose Data Structure</h1>
                <button onClick={goToTree}>Binary Tree</button>
                {/* <button onClick={goToLL}>Linked List</button>
                <button onClick={goToStack}>Stack</button>
                <button onClick={goToQueue}>Queue</button> */}
            </div>
        )}
    </div>
            );
        
      
    
}
export default Home;