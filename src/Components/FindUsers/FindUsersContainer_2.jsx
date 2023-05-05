import React from "react";
import FindUsers from "./FindUsers";
import Preloader from "../../Common/Preloader/Preloader";


class FindUsersContainer_2 extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
  }

  setCurrentPageCaller = (currentPage) => {
    // this.props.setIsFetching(true); //Пока делается ассинхронный запрос показывается спиннер
    
    //   userApi.getUsers(this.props.pageSize, currentPage).then((response) => {
    //     this.props.setUsers(response.items);
    //     this.props.setIsFetching(false); // После запроса спиннер убирается
    //   });

    //this.props.setCurrentPage(currentPage);
    
    this.props.setCurrentPageThunk(this.props.pageSize, currentPage)
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.props.isFetching === true ? <Preloader /> : null}
        <FindUsers
          // follow={this.props.follow}           
          // setIsFetching={this.props.setIsFetching} больше не используется так как мы внедрили санки
          // unfollow={this.props.unfollow}
          // followingInProgress={this.props.followingInProgress}
          
          users={this.props.users}
          totalPageCount={this.props.totalPageCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          setCurrentPageCaller={this.setCurrentPageCaller}
          
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

