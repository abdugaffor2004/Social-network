import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    
return(
  <nav className={s.nav}>

    <div className={s.navItem}> <NavLink className={({isActive})=> isActive ? s.active: undefined} to="/profile" >Profile</NavLink> </div>
    <div className={s.navItem}> <NavLink className={({isActive})=> isActive ? s.active: undefined} to="/dialogs">Messages</NavLink> </div>
    <div className={s.navItem}> <NavLink className={({isActive})=> isActive ? s.active: undefined} to="/news">News</NavLink> </div>
    <div className={s.navItem}> <NavLink className={({isActive})=> isActive ? s.active: undefined} to="/music">Music</NavLink> </div>
    <div className={s.navItem}> <NavLink className={({isActive})=> isActive ? s.active: undefined} to="/settings">Settings</NavLink> </div>
    {/* NavLink не работает вне BrowserRouter. Поэтому компонента Navbar должна вызываться в BrowserRouter!  */}
  </nav> 
);

}

export default Navbar