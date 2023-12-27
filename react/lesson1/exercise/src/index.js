import { createRoot } from "react-dom/client";
import UserList from "./components/UserList";
import Fibonacci from "./components/Fibonacci";
import "./index.css";
import Counter from "./components/Counter";

const root = createRoot(document.getElementById("root"));

const users = [
  {
    id: 0,
    name: "Benjamin",
    age: 32,
  },
  {
    id: 1,
    name: "Peter",
    age: 43,
  },
];
// root.render(<UserList users={users} />);

// root.render(<Counter />);

root.render(<Fibonacci />);