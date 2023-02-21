import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './NavbarLinks.module.css'

const NavbarLinks = (props) => {

  let friendsRender = props.friends.map(item => <Friend key={item.id} img={item.img} name={item.name} />)

  return (


    <div className={s.wrap}>

      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/profile" >Profile</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/dialogs">Messages</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/news">News</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/music">Music</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/settings">Settings</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/users">Find users</NavLink> </div>
      <div className={s.navItem}> <NavLink className={({ isActive }) => isActive ? s.active : undefined} to="/friends">Friends</NavLink> </div>


      <div className={s.friend}>
        {friendsRender}
      </div>

    </div>

  );

}

export default NavbarLinks