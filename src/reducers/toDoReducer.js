import {INSERT_TODO, UPDATE_DONE, DELETE_TODO, INIT_TODO} from "../constants/constants";

const initialStates = {toDoList: []};

const ToDoReducer = (state = initialStates, action) => {
    switch(action.type) {
        case INIT_TODO:
            return {...state, toDoList: action.payload};
        case INSERT_TODO:
            return {...state, toDoList: [...state.toDoList, action.payload] };
        case UPDATE_DONE:            
            return {...state, toDoList: state.toDoList.map((item) => {
                if(item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })};

        case DELETE_TODO:
            return {...state, toDoList: state.toDoList
                .filter((item) => item.id !== action.payload.id)};   
        default:
            return state;
    }
}
export default ToDoReducer;