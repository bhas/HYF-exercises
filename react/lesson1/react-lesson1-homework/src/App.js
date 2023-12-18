import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoItem.js';

function App() {
  const tasks = [
    {
      title: 'Get out of bed',
      deadline: new Date(2017, 6, 13)
    },
    {
      title: 'Brush teeth',
      deadline: new Date(2017, 6, 14)
    },
    {
      title: 'Eat breakfast',
      deadline: new Date(2017, 6, 15)
    },
  ]

  return (
    <div class="app">
      <h1>Todo List</h1>
      <div>
        {tasks.map(x => <TodoItem title={x.title} deadline={x.deadline}/>)}
      </div>
    </div>
  );
}



export default App;
