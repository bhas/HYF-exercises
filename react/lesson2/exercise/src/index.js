import { createRoot } from "react-dom/client";
import TodoList from "./components/TodoList.js";
import WatchCount from "./components/WatchCount.js";
import "./index.css";

const root = createRoot(document.getElementById("root"));

// root.render(<TodoList />);
root.render(<WatchCount />);