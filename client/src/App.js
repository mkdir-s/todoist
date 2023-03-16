import React from 'react';
import ToDoItem from './component/ToDo/ToDoItem';

function App() {
  return (
    <div className='site__wrapper'>
      <h1>ToDo List</h1>
      <div className="addTask__wrapper">
        <input type="text" placeholder='Write your task' />
        <button>Add Task</button>
      </div>
      <ToDoItem />
    </div>
  );
}

export default App;
