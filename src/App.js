
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import FindUsersContainer1 from './Components/FindUsers/FindUsersContainer_1';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';



const App = (props) => {

  return (
  
    
      <div className='appWrapper'>

        <HeaderContainer />

        <NavbarContainer />

          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<FindUsersContainer1 />} />
            <Route path='/login' element={<LoginPage />} />
            {/* Звевдочка ставится чтобы Rout также отслеживал вложенные пути ввида /dialogs/3 */}
          </Routes>


      </div>
    
  );
}



export default App;
