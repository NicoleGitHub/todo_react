import ToDoGenerator from "./ToDoGenerator";
import ToDoGroup from "./TodoGroup";
import { useSelector } from 'react-redux';

function ToDoList() {

    const toDoList = useSelector(state => state.toDoList);

    return (
        <div> 
            <h4>ToDo List</h4>
            <ToDoGroup toDoList={toDoList}/>
            <ToDoGenerator/>
        </div>
    );

}

export default ToDoList;