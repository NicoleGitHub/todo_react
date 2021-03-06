import ToDoItem from "./ToDoItem";
import '../style/style.css';
import { useSelector } from 'react-redux';

function ToDoGroup() {

    const toDoList = useSelector(state => state.toDoList);

    return (
        <div className="to-do-group-container">
            {toDoList.map((item) => (
                <ToDoItem key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default ToDoGroup;