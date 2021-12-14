import { useState } from "react";
import ToDoGenerator from "./ToDoGenerator";
import ToDoGroup from "./TodoGroup";

function ToDoList() {

    const [toDoList, setToDoList] = useState([]);

    function updateToDo(toDoString) {
        setToDoList([...toDoList, toDoString]);
    }

    return (
        <div> 
            <h4>ToDo List</h4>
            <ToDoGroup toDoList={toDoList} updateToDo={updateToDo}/>
            <ToDoGenerator updateToDo={updateToDo}/>
        </div>
    );

}

export default ToDoList;