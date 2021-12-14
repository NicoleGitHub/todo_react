import { useState, useEffect, render } from "react";
import ToDoItem from "./ToDoItem";

function ToDoGroup(props) {

    const [toDoList, setToDoList] = useState([]);


    useEffect(() => {

        toDoList.push(String(props.toDo));
        console.log("useEffect" + String(props.toDo));
    }, [props.toDo, toDoList])


    return (
        <div>
        {toDoList.map((item, index) => 
        (
            <ToDoItem key={item + index} toDo={toDoList.length + item}/>
        ))}
        </div>
    );

}

export default ToDoGroup;