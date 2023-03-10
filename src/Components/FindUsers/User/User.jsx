import s from "./User.module.css";

const User = (props) => {


  const unfollowCaller = ()=>{
    props.unfollow(props.userId)
    
  }

  const followCaller = ()=>{
    props.follow(props.userId)
  }
 
  return (
    <div className={s.user}>
      <div className={s.userAvatar}>
        <img src={props.img !== null ? props.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yEOldbWv5ou8N5B8FTKj6ISTvY6qi_8ulg&usqp=CAU"} alt="Avatar" />

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
