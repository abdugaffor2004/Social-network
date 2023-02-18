
import s from './Navbar.module.css'
import NavbarLinks from './NavbarLinks/NavbarLinks';

const Navbar = (props) => {
    
return(
  <nav className={s.nav}>

    <NavbarLinks friends={props.friends} />

    {/* NavLink не работает вне BrowserRouter. Поэтому компонента Navbar должна вызываться в BrowserRouter!  */}
  </nav> 
);

}

export default Navbar