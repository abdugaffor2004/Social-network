import React from "react";
import axios from "axios";
import FindUsers from "./FindUsers";

class FindUsersContainer_2 extends React.Component {

  componentDidMount(){
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        //this.props.setTotal(response.data.totalCount)
      });
  }

  setCurrentPageCaller = (currentPage) =>{
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
      
      //this.props.setTotal(response.data.totalCount)
    });

    this.props.setCurrentPage(currentPage)
  }

  render(){
    return(
    <FindUsers users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               totalPageCount={this.props.totalPageCount}
               pageSize = {this.props.pageSize}
               currentPage ={this.props.currentPage}
               setCurrentPageCaller={this.setCurrentPageCaller}
    
    />
    )
  }
}

export default FindUsersContainer_2;

//Проблема: Почему-то с классовой компонентой происходит ошибка.
//При перезагрузке страницы(/users) пользователи не появляются.
//А при переходе по navlink-ам они появляютсяб но опять исчезают после перезагрузки.


{/* Эта проблема(вышеуказанная) решена!!!(после долгих размышлений).
 А надо было всего лишь процесс маппинга массива написать в методе render().  */}
