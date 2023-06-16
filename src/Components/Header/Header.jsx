import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) =>{
    return(

    <header className={s.header}>
      <div className={s.container}>

        <img src='https://api.freelogodesign.org/assets/thumb/logo/8027670_400.png?t=637885647830000000' alt="Logo" />

      <div className={s.loginWrap}>
        { props.isAuth ? props.login : <NavLink to={'/login'} className={({ isActive }) => isActive ? s.active : undefined} > Login </NavLink> }
        
        { props.isAuth && 
        
        <button onClick={props.logOutThunk} className={s.logout} to={'/login'}>
        
          <svg className={s.logout} width="24" height="24"><path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"/></svg>

        </button>
        } 
      

      </div>

      </div>
    </header> 

  );
  
}

export default Header