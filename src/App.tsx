import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoTask from './components/TodoTask';
import { log } from 'console';

const App: FC = () => {
  let loadedTodoList = JSON.parse(localStorage.getItem("todos")!);


  const [task, setTask] = useState<string>("");
  const [todoList, setTodo] = useState<Array<string>>(loadedTodoList);
  const [edit, setEdit] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  }

  const addTask = ():void => {
    setTodo([...todoList, task]);
    setTask("");
    console.log(todoList)
  }

  const completeTask = (taskDelete: string): void => {
    setTodo(todoList.filter((task)=> {
      return task !== taskDelete
    } ))
  }

  const editTask = (id:number) => {
    setEdit(true);
  }

  // React.useEffect(() => {
  //   let todos = [];
  //   const temp = localStorage.getItem("todos")!;
  //   if(temp) {
  //     todos = (temp);
  //   }
  // })
  React.useEffect(()=>{
    const temp = JSON.stringify(todoList)
    localStorage.setItem("todos", temp);

  }, [todoList])

    return (
        <div className="App">
            <p className='header'>Todo-List-App</p>
            <TodoItem onHandleChange={handleChange} onClick={addTask} valueInput={task}/>
            <div className="todoList">
              {todoList.map((task: string, key: number) => (
                <TodoTask key={key} task={task} remove={completeTask} edit={() => {editTask(key)}}/>

              ))}
            </div>
        </div>
    );
};

export default App;
