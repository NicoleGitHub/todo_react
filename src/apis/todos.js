import api from "./api";

export const getTodos = () => {
    return api.get("/todos")
}

export const addTodos = (item) => {
    return api.post("/todos", item);
}

export const deleteTodos = (id) => {
    return api.delete(`/todos/${id}`);
}

export const updateTodos = (item) => {
    return api.put(`/todos/${item.id}`, item);
}
