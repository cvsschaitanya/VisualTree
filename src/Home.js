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
            <div>
            
                {
                    showTree ?  <BinaryTreeComponent/> : 
                                    showLL : <LinkedListComponent/>
                    
                    
                    
                }


            </div>


        </div>
            );
        
      
    
}
export default Home;