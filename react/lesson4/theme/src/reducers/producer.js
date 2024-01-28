import { useReducer } from "react";


export default function TaskReducer(initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...initialState, action.payload];
        case 'REMOVE_TASK':
            return initialState.filter(x => x.id !== action.payload);
        default:
            return initialState;
    }
}




function MyComponent() {
    const [tasks, dispatch] = useReducer(TaskReducer, []);

    return (
        <button onClick={() => dispatch({ type: 'ADD_TASK', payload: { id: 1, name: 'task1' } })}>Add Task</button>
    )
}
