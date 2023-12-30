function UserItemExpanded(props) {
    return (
        <li>
        <h3>
            {props.user.firstName} {props.user.firstName} 
        </h3>
            <p>Height: {props.user.height} cm </p>
            <p>Age: {props.user.age}</p>
            <p>Address: {props.user.address}</p>
            <p>Spoken languages: {props.user.spokenLanguages.join(", ")}</p>
        </li>
    );
}
  
export default function UserList(props) {
return (
    <ul>
    {props.users.map((user) => {
        return <UserItemExpanded user={user} key={user.id} />;
    })}
    </ul>
);
}
  
