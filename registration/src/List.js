import React, {useEffect , useState} from 'react';
import fire from './fire';
import Todo from './Todo';

export default function List() {
    const [todoList, setTodoList] = useState();
  useEffect(() => {
    const itemRef=fire.database().ref("Items");
    itemRef.on("value",(snapshot)=>{
      // console.log(snapshot.val());
      const todos=snapshot.val();
      const todoList = []
      for(let id in todos){
        todoList.push({ id,...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
    return(
    <div>
        {todoList ? todoList.map((todo,index) => (
            <Todo todo={todo} key={index}/>
        )):""}
    </div>
    );
}