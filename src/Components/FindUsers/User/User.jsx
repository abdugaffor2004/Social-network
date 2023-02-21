import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.userAvatar}>
        <img src={props.img} alt="Avatar" />
        <button type="button" className={s.btn}>
          Follow
        </button>
      </div>

      <div className={s.userInfo}>
        <div className={s.nameAndStatus}>
          <h4>{props.name}</h4>
          <span className={s.status}> {props.status} </span>
        </div>

        <div className={s.location}>
          {props.country} <span> {props.city} </span>
        </div>
      </div>
    </div>
  );
};

export default User;
