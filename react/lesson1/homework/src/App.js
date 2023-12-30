export default function App() {
  return (
    <div class="app">
      <TodoList/>
    </div>
  );
}

function TodoList(props) {
  return <> 
    <h1>Todo List</h1>
    <div>
      <TodoItem title={'Get out of bed'} deadline={new Date(2017, 6, 13)}/>
      <TodoItem title={'Brush teeth'} deadline={new Date(2017, 6, 14)}/>
      <TodoItem title={'Eat breakfast'} deadline={new Date(2017, 6, 15)}/>
    </div>
  </>
}

function TodoItem(props) {
  return (
    <div className="todo-item">
      <DateLabel date={props.deadline} />
      <span className="todo-title">{props.title}</span>
    </div>
  )
}

function DateLabel(props) {
  return (
    <div className="date-label" >
      <i class="fa-regular fa-clock"></i>
      <span style={{marginLeft: 5}}>{formatDate(props.date)}</span>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}