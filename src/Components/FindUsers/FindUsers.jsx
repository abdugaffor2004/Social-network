import s from "./FindUsers.module.css";
import User from "./User/User";

const FindUsers = (props) => {

  if(props.users.length===0){
    props.setUsers([
        {
          id: 1,
          followed: true,
          name: "Dilshod",
          img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          status: "La rahta fit dunia",
          location: {
            country: "Tajikistan",
            city: " Dushanbe",
          },
        },
        {
          id: 2,
          followed: false,
          name: "Muhammed",
          img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          status: "Inna lilahi inna ilaihi radzhiun",
          location: {
            country: " Russia",
            city: "Balabanovo",
          },
        },
        {
          id: 3,
          followed: false,
          name: "Iskandar",
          img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          status: "Hasbi Allahu va nimal waqil",
          location: {
            country: "Russia",
            city: "Perm",
          },
        },
        {
          id: 4,
          followed: true,
          name: "Zafar",
          img: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          status: "Fi aman Allah",
          location: {
            country: "Tajikistan",
            city: "Dushanbe",
          },
        },
        {
          id: 5,
          followed: false,
          name: "Shukur",
          img: "https://images.unsplash.com/photo-1565708097881-bbf4ecf47cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          status: "Inna maal usri usro",
          location: {
            country: "Tajikistan",
            city: "Uliyanovsk",
          },
        },
      ]
    )
  }

  let UserList = props.users.map((item) => ( 
    <User
      key={item.id}
      userId = {item.id}
      followStatus = {item.followed}
      name={item.name}
      img={item.img}
      status={item.status}
      country={item.location.country}
      city={item.location.city}
      follow={props.follow}
      unfollow={props.unfollow}
      setUsers = {props.setUsers}
    />
  ));

  return (
    <div className={s.findUsers}>
      <h2>USERS</h2>

      <div className={s.container}>
        {UserList}
      </div>
    </div>
  );
};

export default FindUsers;
