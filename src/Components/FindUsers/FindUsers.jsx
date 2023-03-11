import React from "react";
import s from "./FindUsers.module.css";
import User from "./User/User";
import axios from "axios";

class FindUsers extends React.Component {

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


   let pagesCount = this.props.totalPageCount/this.props.pageSize; //Сколько страниц получается

   let pages =[] //массив из цифр(номеров страниц)
   for(let i=1; i<=pagesCount; i++){
      pages.push(i)
   }


    return (
      <div className={s.findUsers}>

        <h2>USERS</h2>

        <div className={s.pagination}>

          {pages.map( (page) =>{
            return <button onClick={ () => this.setCurrentPageCaller(page)} className={ this.props.currentPage === page && s.selectedPage}> {page} </button>
          })//Перебираем массив pages и отрисовываем кнопки пагинации, выделяем активную копку
          } 
        </div>
        
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
