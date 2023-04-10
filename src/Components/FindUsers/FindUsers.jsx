import s from "./FindUsers.module.css";
import User from "./User/User";


const FindUsers = (props) => {
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
      setIsFetching={props.setIsFetching}
    />
  ));


 let pagesCount = props.totalPageCount/props.pageSize; //Сколько страниц получается

 let pages =[] //массив из цифр(номеров страниц)
 for(let i=1; i<=pagesCount; i++){
    pages.push(i)
 }


  return (
    <div className={s.findUsers}>

      <h2>USERS</h2>

      <div className={s.pagination}>

        {
          pages.map( (page) =>{
            return <button onClick={ () => props.setCurrentPageCaller(page)} className={ props.currentPage === page ? s.selectedPage : null}> {page} </button>
          })//Перебираем массив pages и отрисовываем кнопки пагинации, выделяем активную копку
        } 
      </div>
      
      <div className={s.container}>
        {UserList}
      </div>

      
    </div>
  );

};

export default FindUsers;
