import { MdCheck, MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo, onHandleEditTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(data);

    const handleSave = () => {
        if (editValue.trim() === "") return;
        //data --->original Value
        // editValue ---> value entered in the input box by user
        onHandleEditTodo(data, editValue.trim());
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="edit-input"
                    />
                    <div>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </>
            ) : (
                <>
                    <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                    <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}><MdCheck /></button>
                    <button className="edit-btn" onClick={() => setIsEditing(true)}><FaRegEdit /></button>
                    <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
                </>
            )}
        </li>
    );
};
