import { useState } from "react";
import '../style/style.css';
import { useDispatch } from 'react-redux'
import { INSERT_TODO } from "../constants/constants";
import { addTodos } from "../apis/todos";
import { Button, Input } from 'antd';

function ToDoGenerator() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function createToDoItem() {
        addTodos({text, done: false}).then((response) => {
            dispatch({type: INSERT_TODO, payload: response.data});
        })
        setText("");
    }

    function handleToDoString(event) {
        setText(String(event.target.value));
    }

    return (
        <div> 
            <Input
            placeholder="do sth you lazy boi"
            allowClear
            size="small"
            style={{ width:260}}
            value={text}
            onChange={handleToDoString} 
            />
            <Button type="submit" size="small" disabled={(text.length === 0)} onClick={createToDoItem}>add</Button>
        </div>
    );

}

export default ToDoGenerator;