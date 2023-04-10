import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import axios from "axios";

const User = (props) => {


  const unfollowCaller = ()=>{

    props.setIsFetching(true)

    axios
    .delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`,
      { 
        withCredentials: true,
        headers: {"API-KEY": "fbaed546-b83e-41ea-bf18-c251dff1971b"}
      }
    )
    .then((response) => {
      
      if(response.data.resultCode === 0){ props.unfollow(props.userId) } 

      props.setIsFetching(false)
      
    });

    
    
  }

  const followCaller = ()=>{

    props.setIsFetching(true)

    axios
    .post(
      `https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {}, 
      { 
        withCredentials:true,
        headers: {"API-KEY": "fbaed546-b83e-41ea-bf18-c251dff1971b"}
      }
    )
    .then( (response) => { 
      if(response.data.resultCode === 0){ props.follow(props.userId) }
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
