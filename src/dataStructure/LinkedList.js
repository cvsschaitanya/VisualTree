function LinkedList(){
    this.head = null;
    
    function insert(head,value){
        
            let temp = head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = {
                val : value,
                next : null
            };

    }
    this.insert = (value) => {
        if(this.head === null){
            this.head = {
                val : value,
                next : null
            
            };

        }
        else{
            insert(this.head,value);
        }

    }
  
    this.display = () =>{
        let temp = this.head ;
        let elements = [];
        while(temp!==null){
            elements.push(temp.val);
            temp = temp.next;
        }
        return elements;
    }
}

export default  LinkedList;