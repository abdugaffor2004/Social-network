import { memo } from "react";
import s from "./FindUsers.module.css";
import User from "./User/User";
import Paginator from "../../Common/Paginator/Paginator";


const FindUsers = memo((props) => {
  
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
      followingInProgress={props.followingInProgress}
      toggleFollowingProgress = {props.toggleFollowingProgress}

      unfollowThunk={props.unfollowThunk}
      followThunk={props.followThunk}
    />
  ));


 


  return (
    <div className={s.findUsers}>

      <h2>USERS</h2>

      <Paginator setCurrentPageThunk={props.setCurrentPageThunk} pageSize = {props.pageSize} totalUsersCount = {props.totalUsersCount} currentPage = {props.currentPage}/>
      
      <div className={s.container}>
        {UserList}
      </div>

      
    </div>
  );

});

export default FindUsers;
