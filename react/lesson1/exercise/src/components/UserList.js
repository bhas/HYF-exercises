function UserItem(props) {
    return (
        <li>
        <h3>
            {props.name}: {props.age}
        </h3>
        </li>
    );
}
  
export default function UserList(props) {
return (
    <ul>
    {props.users.map((user) => {
        return <UserItem name={user.name} age={user.age} key={user.id} />;
    })}
    </ul>
);
}
  
