import { useState } from "react";

const initTodos = [
    {
        id: 1,
        text: "clean room",
    },
    {
        id: 2,
        text: "do pushups",
    },
];

export default function TodoList() {
    const [deleteId, setDeleteId] = useState(null);1
    const [todosState, setTodosState] = useState(initTodos);

    const addTodo = () => {
        const ids = todosState.map((todo) => todo.id)
        const maxId = Math.max(...ids);
        const newTodo = { id: maxId + 1, text: "learn React" };
        setTodosState(prevTodos => {
            return [...prevTodos, newTodo];
        });
    };

    const removeTodo = (id) => {
        console.log("called with ", id);
        const newTodos = todosState.filter(todo => todo.id !== id);
        setTodosState(newTodos);
    }

    const todoItems = todosState.map((todo) => (
        <TodoItem id={todo.id} text={todo.text} key={todo.id}></TodoItem>
    ));

    return (
        <div className="App">
            <button onClick={addTodo}>Add todo</button>
            <div>
                <input 
                    type="number" 
                    onChange={x => setDeleteId(parseInt(x.target.value))} 
                    placeholder="Enter an id">
                </input>
                <button onClick={x => removeTodo(deleteId)}>Delete</button>
                </div>
            {todoItems}
        </div>
    );
}

function TodoItem({id, text }) {
    return (
        <li>{id} - {text}</li>
    )
}