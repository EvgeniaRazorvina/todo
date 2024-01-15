import React, {FC} from "react";
import './todoTaskStyles.css';


const trash = require ('../images/trash.png');
const editIcon = require('../images/editIcon.png');

type Props = {
    task: string;
    remove(taskDelete:string): void;
    edit: () => void;
}
const TodoTask: FC<Props> = ({task, remove, edit}:Props) => {
return (
    <>
    <div className="task">
        <div className="content">
            <span>{task}</span>
        </div>
        <button className="btn-edit" onClick={edit}>
            <img src={editIcon} alt="" />
        </button>
        <button className="btn-remove" onClick={() => {
            remove(task);
        }}>
            <img src={trash}/>
        </button>
    </div>
    </>
)

}

export default TodoTask;