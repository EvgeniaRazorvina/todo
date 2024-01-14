import React, { FC } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

const App: FC = () => {
    return (
        <div className="App">
            <p className='header'>Todo-List-App</p>
            <TodoItem/>

            <div className="todoList"></div>
        </div>
    );
};

export default App;
