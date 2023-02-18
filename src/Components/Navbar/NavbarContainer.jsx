
import { connect } from 'react-redux';
import Navbar from './Navbar';

// const NavbarContaine = (props) => {
    
// return(
//   <nav className={s.nav}>

//     <NavbarLinks state={props.state.friends} />

//     {/* NavLink не работает вне BrowserRouter. Поэтому компонента Navbar должна вызываться в BrowserRouter!  */}
//   </nav> 
// );

// }

const mapStateToProps = (state) =>{
  return {
    friends: state.navbar.friends
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer