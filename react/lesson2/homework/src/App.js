import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const todos = [
    {
      id: 1,
      description: "Get out of bed",
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ];

  return (
    <div className="app">
      <TodoList items={todos}></TodoList>
    </div>
  );
}

function TodoList(props) {
  const [initialDate, setInitialDate] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    console.log("test");
    setTimeSpent((Date.now() - initialDate) / 1000);
  });

  return <> 
    <h1>Todo List</h1>
    <p>You have used {timeSpent} seconds on this site</p>
    <ul>
      {props.items.map(x => <TodoItem title={x.title} deadline={x.deadline} key={x.id}/>)}
    </ul>
  </>
}

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span className="todo-title">{props.title}</span>
    </li>
  )
}



export default App;
