function LinkedList () {
    this.head = null;

    function insert(node,key){
        if(node.next === null){
            node.next = {
                value : key,
                next : null

            };
        }else{
            insert(node.next,key)
        }
    }
    this.insert = (key) => {
        if(this.head === null){
            this.head = {
                value : key,
                next : null
            };
        }
        else{
            insert(this.head,key);
        }
    }
    
}
export default LinkedList;