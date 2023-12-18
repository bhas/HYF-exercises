import './App.css';
import TodoList from './components/todoList.js';

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
      <TodoList items={tasks}></TodoList>
    </div>
  );
}



export default App;
