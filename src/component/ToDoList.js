import ToDoGenerator from "./ToDoGenerator";
import ToDoGroup from "./TodoGroup";

function ToDoList() {

    return (
        <div> 
            <h4>To Do List</h4>
            <ToDoGroup/>
            <ToDoGenerator/>
        </div>
    );

}

export default ToDoList;