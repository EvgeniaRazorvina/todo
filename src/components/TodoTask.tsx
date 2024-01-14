import React, {FC} from "react";
import './todoTaskStyles.css';


const trash = require ('../images/trash.png');

type Props = {
    task: string;
    remove(taskDelete:string): void;
}
const TodoTask: FC<Props> = ({task, remove}:Props) => {
return (
    <>
    <div className="task">
        <div className="content">
            <span>{task}</span>
        </div>
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