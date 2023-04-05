
import './App.css';
import Header from './Components/Header/Header';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import FindUsersContainer_1 from './Components/FindUsers/FindUsersContainer_1';
import ProfileContainer from './Components/Profile/ProfileContainer';



const App = (props) => {

  return (
  
    
      <div className='appWrapper'>

        <Header />

        <NavbarContainer />

        <div className='appWrapper_content'>

          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<FindUsersContainer_1 />} />
            {/* Звевдочка ставится чтобы Rout также отслеживал вложенные пути ввида /dialogs/3 */}
          </Routes>

        </div>


      </div>
    
  );
}



export default App;
