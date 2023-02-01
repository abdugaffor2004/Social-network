
import s from './Friend.module.css'

const Friend = (props) => {

  return (

    <div className={s.friendItem}>
      <img src={props.img} alt="Avatar" />
      <h3>{props.name}</h3>
    </div>

  );

}

export default Friend