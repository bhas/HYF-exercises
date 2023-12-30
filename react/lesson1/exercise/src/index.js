import { createRoot } from "react-dom/client";
import UserList from "./components/UserList";
import Fibonacci from "./components/Fibonacci";
import "./index.css";
import Counter from "./components/Counter";

const root = createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    firstName: "Benjamin",
    lastName: "Humphrey",
    address: "1234 Main St",
    height: 188,
    spokenLanguages: ["English", "Spanish", "French"],
    age: 32,
  },
  {
    id: 2,
    firstName: "Peter",
    lastName: "Parker",
    address: "153 Baker St",
    height: 175,
    spokenLanguages: ["English"],
    age: 43,
  },
];
// root.render(<UserList users={users} />);

// root.render(<Counter />);

root.render(<Fibonacci />);