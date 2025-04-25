const todoKey = "reactTodo";
export const getTodoLocalStorageData = () => {
    const toDo = localStorage.getItem(todoKey);
    return toDo ? JSON.parse(toDo) : [];
}
export const setTodoLocalStorageData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}