import { useState } from "react";

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

export default function TodoList() {
    const [todosState, setTodosState] = useState(todos);

    const addTodo = () => {
        const ids = todosState.map((todo) => todo.id)
        const maxId = Math.max(...ids);
        const newTodo = { id: maxId + 1, description: "Random text" };
        setTodosState(prevTodos => {
            return [...prevTodos, newTodo];
        });
    };

    const removeTodo = (id) => {
        const newTodos = todosState.filter(todo => todo.id !== id);
        setTodosState(newTodos);
    }

    const todoItems = todosState.map((todo) => (
        <TodoItem 
            text={todo.description} 
            onDelete={() => removeTodo(todo.id)}
            key={todo.id}>
        </TodoItem>
    ));

    return <>
        <button onClick={addTodo}>Add todo</button>
        {todoItems.length === 0 ? "No items" : <ul>{todoItems}</ul>}
    </>
}

function TodoItem({text, onDelete }) {
    const [complete, setComplete] = useState(false);

    return (
        <li>
            <span className={complete ? "strike-through" : ""}>{text}</span>
            <input type="checkbox" onClick={e => setComplete(e.target.checked)}  />
            <button onClick={() => onDelete()}>Delete</button>
        </li>
    )
}