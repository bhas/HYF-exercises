import DateLabel from "./dateLabel";


export default function TodoItem(props) {
    return <div className="todo-item">
            <DateLabel date={props.deadline} />
            <span className="todo-title">{props.title}</span>
        </div>
}