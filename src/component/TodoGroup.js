import ToDoItem from "./ToDoItem";
import '../style/style.css';

function ToDoGroup(props) {
    return (
        <div className="to-do-group-container">
            {props.toDoList.map((item, index) => (
                <ToDoItem key={item + index} toDo={item}/>
            ))}
        </div>
    );
}

export default ToDoGroup;