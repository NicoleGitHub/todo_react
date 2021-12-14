import { useState } from "react";
import ToDoGenerator from "./ToDoGenerator";
import ToDoGroup from "./TodoGroup";

function ToDoList() {

    const [toDo, setToDo] = useState("");


    function updateToDo(toDoString) {
        setToDo(toDoString);
    }

    return (
        <div> 
            <ToDoGroup toDo={toDo} updateToDo={updateToDo}/>
            <ToDoGenerator updateToDo={updateToDo}/>
        </div>
    );

}

export default ToDoList;