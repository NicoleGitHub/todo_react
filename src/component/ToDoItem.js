import '../style/style.css';
import { useDispatch } from 'react-redux'
import { UPDATE_DONE, DELETE_TODO } from "../constants/constants";
import { deleteTodos, updateTodos, editTodos } from '../apis/todos';
import { Button, Modal, Input } from 'antd';
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { useState } from 'react'


function ToDoItem(props) {

    const{id, text, done} = props.item;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [toDoTextInput, setToDoTextInput] = useState(text);
    const dispatch = useDispatch();

    const { TextArea } = Input;

    function doneToDo() {
        updateTodos({id: id, text: text, done: !done}).then((response) => {
            dispatch({type: UPDATE_DONE, payload: response.data});
        })
    }

    function deleteToDo(event) {
        event.stopPropagation()
        deleteTodos(id).then((response) => {
            dispatch({type: DELETE_TODO, payload: response.data});
        })
    }

    function showModal(event) {
        event.stopPropagation();
        setIsModalVisible(true);
    };

    function handleOk(event) {
        updateTodos({id: id, text: toDoTextInput, done: done}).then((response) => {
            dispatch({type: UPDATE_DONE, payload: response.data});
        })
        setIsModalVisible(false);
      };
    
    function handleCancel(event) {
        setIsModalVisible(false);
    };

    function handleToDoTextInput(event) {
        setToDoTextInput(event.target.value);
    };

    return (
        <>
        <div className="border" onClick={doneToDo}> 
            <span className={done ? "strikethrough-text" : ""}>{text}</span>
            <div>
            <Button icon={<CloseCircleOutlined />} type='text' size='small' onClick={deleteToDo}></Button>
            <Button icon={<EditOutlined />} type='text' size='small' onClick={showModal}></Button>
            </div>
        </div>
        <Modal title="Edit To Do" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
            <TextArea 
                showCount 
                maxLength={30} 
                style={{ height: 60 }}
                value={toDoTextInput}
                onChange={handleToDoTextInput}

            />
        </Modal>
        </>
    );
}

export default ToDoItem;