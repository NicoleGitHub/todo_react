import { useState } from "react";
import '../style/style.css';

function ToDoGenerator(props) {

    const [toDo, setToDo] = useState("");

    function createToDoItem() {
        if(toDo !== "") {
            props.updateToDo(toDo);
            setToDo("");
        }
    }

    function handleToDoString(event) {
        setToDo(String(event.target.value));
    }

    return (
        <div> 
            <input value={toDo} onChange={handleToDoString}></input>
            <button className="add-button" type="submit" onClick={createToDoItem}>add</button>
        </div>
    );

}

export default ToDoGenerator;