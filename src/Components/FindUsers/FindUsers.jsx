import s from "./FindUsers.module.css";
import User from "./User/User";

const FindUsers = (props) => {
  const UserList = props.users.map((item) => (
    <User
      name={item.name}
      img={item.img}
      status={item.status}
      country={item.location.country}
      city={item.location.city}
    />
  ));

  return (
    <div className={s.findUsers}>
      <h2>USERS</h2>

      <div className={s.container}>{UserList}</div>
    </div>
  );
};

export default FindUsers;
