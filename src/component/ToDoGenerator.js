import { useState } from "react";

function ToDoGenerator(props) {

    const [toDo, setToDo] = useState("");

    function createToDoItem() {
        if(toDo !== "") {
            props.updateToDo(toDo);
            console.log("createToDoItem" + toDo);
        }
        setToDo("");
    }

    function handleToDoString(event) {
        setToDo(String(event.target.value));
        console.log("handleToDoString" + event.target.value);
    }

    return (
        <div> 
            <input value={toDo} onChange={handleToDoString}></input>
            <button type="submit" onClick={createToDoItem}>add</button>
        </div>
    );

}

export default ToDoGenerator;