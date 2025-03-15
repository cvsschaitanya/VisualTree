import LinkedList from "../../dataStructure/LinkedList.js";

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);


let temp = list.head;

while(temp!== null){
    console.log(temp.val);
    temp = temp.next;
}