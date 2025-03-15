import { useState } from "react";
import LinkedList from "../dataStructure/LinkedList.js";

function LinkedListComponent(){

    const [linkedList,setList] = useState(() => {
            
                                        let list = new LinkedList();
                                        console.log(list.display());
                                        return list;
                                    });


    const [newVal,setNewVal] = useState("");

    const onAddClick = () => {
        if(newVal!=="") linkedList.insert(newVal)
        setList(linkedList);
        
    }

    return (

        <div>
            <h1>Linked List</h1>
            <input  
                type = "number" 
                onChange={(event) =>{
                    setNewVal(Number(event.target.value));
                    
                }}

                value = {newVal}
            />
            <button onClick={onAddClick}>Add Element </button>





        </div>

    )
}

export default LinkedListComponent;