import React, { useState } from "react";
import BinaryTreeComponent from "./components/binarytree.jsx";
import LinkedListComponent from "./components/linkedList.jsx";

const Home = () => {

    const [showBST, setBST] = useState(false);
    const [showLL, setLL] = useState(false);
    // const [showStack, setStack] = useState(false);
    // const [showQueue, setQueue] = useState(false);

    const goToLinkedList = () =>{
        setLL(true);
    }
    const goToBST = () => {
        setBST(true)
    }
    
    return(
        <div>
            <div>
                {showBST ?  <BinaryTreeComponent/> :  showLL ? <LinkedListComponent/> : (
            
                <>
                    <h2 className="home">Select Data Structure</h2>
                    <button className="home" onClick={goToLinkedList}> Linked List</button>
                    <button className="home" onClick={goToBST}> Binary Search Tree</button>
                </>
                )}
            </div>
        </div>
            );
        
      
    
}
export default Home;