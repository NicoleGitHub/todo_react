import '../style/style.css';

function ToDoItem(props) {
    return (
        <div className="border"> 
            <span>{props.toDo}</span>
        </div>
    );
}

export default ToDoItem;