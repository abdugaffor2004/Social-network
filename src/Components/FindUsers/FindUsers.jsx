import React from "react";
import s from "./FindUsers.module.css";
import User from "./User/User";
import axios from "axios";

class FindUsers extends React.Component {

  componentDidMount(){
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }


  render(){

    this.UserList = this.props.users.map((item) => (
      <User
        key={item.id}
        userId={item.id}
        followStatus={item.followed}
        name={item.name}
        img={item.photos.small}
        status={item.status}
        // country={item.location.country}
        // city={item.location.city}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUsers={this.props.setUsers}
      />
    ));

    return (
      <div className={s.findUsers}>
        <h2>USERS</h2>
        
        <div className={s.container}>{this.UserList}</div>
      </div>
    );
  }
}

export default FindUsers;

//Проблема: Почему-то с классовой компонентой происходит ошибка.
//При перезагрузке страницы(/users) пользователи не появляются.
//А при переходе по navlink-ам они появляютсяб но опять исчезают после перезагрузки.


{/* Эта проблема(вышеуказанная) решена!!!(после долгих размышлений).
 А надо было всего лишь процесс маппинга массива написать в методе render().  */}
