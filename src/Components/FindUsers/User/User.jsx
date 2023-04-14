import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import { followUser, unfollowUser } from "../../../api/api";

const User = (props) => {


  const unfollowCaller = ()=>{

    props.setIsFetching(true)

    unfollowUser(props.userId).then((response) => {
      
      if(response.resultCode === 0){ props.unfollow(props.userId) } 

      props.setIsFetching(false)
      
    });
 
  }

  const followCaller = ()=>{

    props.setIsFetching(true)

    followUser(props.userId).then( (response) => { 
      if(response.resultCode === 0){ props.follow(props.userId) }
      props.setIsFetching(false)
    });

    
  }
 
  return (
    <div className={s.user}>

      <div className={s.userAvatar}>
        <NavLink  to={'/profile/'+props.userId}>
          <img src={props.img !== null ? props.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yEOldbWv5ou8N5B8FTKj6ISTvY6qi_8ulg&usqp=CAU"} alt="Avatar" />
        </NavLink>
        {
        props.followStatus ? 
        <button onClick={unfollowCaller}  className={s.btnUnfollow} type="button">Unfollow</button>
        : <button onClick={followCaller} className={s.btnFollow} type="button">Follow</button>
        }
         
        
      </div>

      <div className={s.userInfo}>
        <div className={s.nameAndStatus}>
          <h4>{props.name}</h4>
          <span className={s.status}> {props.status} </span>
        </div>

        <div className={s.location}>
          {"props.country"} <span> {"props.city"} </span>
        </div>
      </div>
    </div>
  );


};

export default User;
