import TodoItem from "./todoItem.js";

export default function TodoList(props) {
    return <> 
        <h1>Todo List</h1>
        <div>
        {props.items.map(x => <TodoItem title={x.title} deadline={x.deadline}/>)}
        </div>
    </>
}