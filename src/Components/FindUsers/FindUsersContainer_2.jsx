import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../../Common/Preloader/Preloader";



class FindUsersContainer_2 extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
  }


  render() {

    return (
      <div style={{ position: "relative" }}>
        {this.props.isFetching === true ? <Preloader /> : null}
        <FindUsers
          
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}

          setCurrentPageThunk = {this.props.setCurrentPageThunk}
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
        />
      </div>
    );
  }
}

export default FindUsersContainer_2;

//Проблема: Почему-то с классовой компонентой происходит ошибка.
//При перезагрузке страницы(/users) пользователи не появляются.
//А при переходе по navlink-ам они появляютсяб но опять исчезают после перезагрузки.


  /* Эта проблема(вышеуказанная) решена!!!(после долгих размышлений).
 А надо было всего лишь процесс маппинга массива написать в методе render().  */

