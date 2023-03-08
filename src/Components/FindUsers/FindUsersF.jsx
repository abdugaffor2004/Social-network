import s from "./FindUsers.module.css";
import User from "./User/User";
import axios from "axios";

const FindUsersF = (props) => {

 let getUsers = () => { 
    if (props.users.length === 0) {
    
      axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
        console.log(response.data.items)
      });
    }
} 
  
  

  let UserList = props.users.map((item) => (
    <User
      key={item.id}
      userId={item.id}
      followStatus={item.followed}
      name={item.name}
      img={item.photos.small}
      status={item.status}
      // country={item.location.country}
      // city={item.location.city}
      follow={props.follow}
      unfollow={props.unfollow}
      setUsers={props.setUsers}
    />
  ));

  return (
    <div className={s.findUsers}>
      <h2>USERS</h2>

    <button onClick={getUsers}>Push</button>
      <div className={s.container}>{UserList}</div>
    </div>
  );
};

export default FindUsersF;
