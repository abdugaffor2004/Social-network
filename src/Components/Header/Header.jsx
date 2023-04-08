import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) =>{
    return(

    <header className={s.header}>
      <div className={s.container}>

        <img src='https://api.freelogodesign.org/assets/thumb/logo/8027670_400.png?t=637885647830000000' alt="Logo" />

      <div className={s.loginWrap}>
        {/* <img src={props.myProfilePhoto !== null ? props.myProfilePhoto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yEOldbWv5ou8N5B8FTKj6ISTvY6qi_8ulg&usqp=CAU"} alt="Avatar" /> */}
        { props.isAuth ? props.login : <NavLink to={'/login'} className={({ isActive }) => isActive ? s.active : undefined} > Login </NavLink> }
      </div>

      </div>
    </header> 

  );
  
}

export default Header