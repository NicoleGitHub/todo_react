import '../style/style.css';
import {useDispatch} from 'react-redux'
import { UPDATE_DONE, DELETE_TODO } from "../constants/constants";

function ToDoItem(props) {

    const dispatch = useDispatch();

    function deleteToDo() {
        console.log("BYEEE BITCHHH");
        dispatch({type: DELETE_TODO, payload: {id: props.id}})
    }

    function doneToDo() {
        dispatch({type: UPDATE_DONE, payload: {id: props.id}})
    }

    return (
        <div className="border" onClick={doneToDo}> 
            <span className={props.done?"strikethrough-text":""}> {props.text}</span>
            <button className="done-button" type='submit' onClick={deleteToDo}>x</button>
        </div>
    );
}

export default ToDoItem;