import { useSelector } from 'react-redux';
import '../style/style.css';

function DoneList() {

    const toDoList = useSelector(state => state.toDoList);

    return (
        <div className="to-do-group-container">
            <h4>Done List</h4>
            {toDoList.map((item) => (
                (item.done)?<span className="border">{item.text}</span>:<></>
            ))}
        </div>
    );

}

export default DoneList;