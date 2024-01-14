import React, {FC, useState } from "react";
import './todoItemStyles.css'

type TodoItemProps = {
    onClick: () => void;
    onHandleChange?: (text:any) => void;
    valueInput: string;
}

const TodoItem: FC<TodoItemProps> = (props) => {
    return (
        <>
            <div className="inputContainer">
                <input onChange={props.onHandleChange} name="task" type="text" placeholder="Add Task" value={props.valueInput} />
                <button onClick={props.onClick} className="add">Add Task</button>
            </div>

        </>
    );
};
export default TodoItem;