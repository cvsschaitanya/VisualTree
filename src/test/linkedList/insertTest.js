import LinkedList from "../../dataStructure/LinkedList.js";

let list = new LinkedList();


list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

let temp = list.head;

while(temp.next != null){
    console.log(temp.value);
    temp = temp.next;
}



console.log(list);