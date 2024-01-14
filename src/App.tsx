import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodo] = useState<Array<string>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }

  const addTask = ():void => {
    setTodo([...todoList, task]);
    setTask("");
    console.log(todoList)
  }
    return (
        <div className="App">
            <p className='header'>Todo-List-App</p>
            <TodoItem onHandleChange={handleChange} onClick={addTask} valueInput={task}/>

            <div className="todoList"></div>
        </div>
    );
};

export default App;
