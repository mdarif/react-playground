import Card from "./Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years of age)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
