import ToDoItem from "./ToDoItem";
import '../style/style.css';

function ToDoGroup(props) {
    return (
        <div className="to-do-group-container">
            {props.toDoList.map((item) => (
                <ToDoItem id={item.id} text={item.text} done={item.done}/>
            ))}
        </div>
    );
}

export default ToDoGroup;