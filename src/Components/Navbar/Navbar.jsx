import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import NavbarLinks from './NavbarLinks/NavbarLinks';

const Navbar = (props) => {
    
return(
  <nav className={s.nav}>

    <NavbarLinks state={props.state.friends} />

    {/* NavLink не работает вне BrowserRouter. Поэтому компонента Navbar должна вызываться в BrowserRouter!  */}
  </nav> 
);

}

export default Navbar