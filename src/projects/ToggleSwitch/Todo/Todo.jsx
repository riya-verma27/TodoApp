//Todo.jsx:
import "./Todo.css";
import TodoForm from "./TodoForm";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getTodoLocalStorageData, setTodoLocalStorageData } from "./TodoLocalStorage";


export const Todo = () => {
    const [task, setTask] = useState(() => getTodoLocalStorageData());
    const handleEditTodo = (originalValue, newValue) => {
        const updatedTask = task.map((item) =>
            item.content === originalValue ? { ...item, content: newValue } : item
        );
        setTask(updatedTask);
    };
    //Toggle Mode 
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) {
            return;
        }
        /*if(task.includes(inputValue?.trim())){ // to prevent storing similar value multiple times
            return;
        }*/
        const isTodoMatch = task.find(item => item?.content?.trim() === content?.trim());
        if (isTodoMatch) {
            return;
        }
        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }
    //set data in local storage
    setTodoLocalStorageData(task);
    //delete data from to do list
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((item) => item.content !== value);
        setTask(updatedTask);
    }
    //check data in to do list
    const handleCheckedTodo = (value) => {
        const updatedTask = task.map((item) => (item?.content === value) ? { ...item, checked: !item.checked } : item);
        setTask(updatedTask);
    }
    //clear to do list
    const handleClear = () => {
        setTask([]);
    }
    return <section className={`todo-container ${isDarkMode ? "" : "light"}`}>
        <div className="button-box"> <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button></div>
        <header className="todo-header">
            <div className="header-row">
                <h1 className="todo-title">Todo List</h1>
            </div>
            <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnordList">
            <ul>
                {
                    task.map((currTask) => {
                        return (<TodoList key={currTask.id} data={currTask.content} onHandleDeleteTodo={handleDeleteTodo}
                            checked={currTask.checked} onHandleCheckedTodo={handleCheckedTodo} onHandleEditTodo={handleEditTodo} />);
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClear}>Clear All</button>
        </section>
    </section>
}