import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({});

    const handleChangeEvent = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    };

    return (
        <section className="form form-box">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    className="todo-input"
                    autoComplete="off"
                    value={inputValue.content}
                    onChange={(event) => handleChangeEvent(event.target.value)}
                />
                <button type="submit" className="todo-btn task-btn">Add Task</button>
            </form>

        </section>
    );
};

export default TodoForm;
