import { useState } from "react";
import '../style/style.css';
import {useDispatch} from 'react-redux'
import { INSERT_TODO } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";



function ToDoGenerator(props) {

    const [toDo, setToDo] = useState("");
    const dispatch = useDispatch();

    function createToDoItem() {
        if(toDo !== "") {
            dispatch({type: INSERT_TODO, payload: {id: uuidv4(), text: toDo, done: false}});
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