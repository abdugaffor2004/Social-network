import React from "react";
import axios from "axios";
import FindUsers from "./FindUsers";
import Preloader from "../../Common/Preloader/Preloader";

class FindUsersContainer_2 extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true); //Пока делается ассинхронный запрос показывается спиннер

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false); // После запроса спиннер убирается
      });
  }

  setCurrentPageCaller = (currentPage) => {
    this.props.setIsFetching(true); //Пока делается ассинхронный запрос показывается спиннер

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false); // После запроса спиннер убирается
      });

    this.props.setCurrentPage(currentPage);
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.props.isFetching === true ? <Preloader /> : null}
        <FindUsers
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalPageCount={this.props.totalPageCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          setCurrentPageCaller={this.setCurrentPageCaller}
        />
      </div>
    );
  }
}

export default FindUsersContainer_2;

//Проблема: Почему-то с классовой компонентой происходит ошибка.
//При перезагрузке страницы(/users) пользователи не появляются.
//А при переходе по navlink-ам они появляютсяб но опять исчезают после перезагрузки.

{
  /* Эта проблема(вышеуказанная) решена!!!(после долгих размышлений).
 А надо было всего лишь процесс маппинга массива написать в методе render().  */
}
