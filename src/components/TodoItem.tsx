import React from "react";
import './todoItemStyles.css'

const TodoItem = () => {
    return (
        <>
            <div className="inputContainer">
                <input type="text" placeholder="Add Task" />
                <button className="add">Add Task</button>
            </div>

        </>
    );
};
export default TodoItem;