import TodoList from "./components/TodoList.js";
import WatchCount from "./components/WatchCount.js";

export default function App() {
    return <>
        <h1>Todolist</h1>
        <WatchCount />
        <TodoList />
    </>
}