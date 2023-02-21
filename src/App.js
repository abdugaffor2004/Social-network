
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import FindUsersContainer from './Components/FindUsers/FindUsersContainer';



const App = (props) => {

  return (
  
    <BrowserRouter>
      <div className='appWrapper'>

        <Header />

        <NavbarContainer />

        <div className='appWrapper_content'>

          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<FindUsersContainer />} />
            {/* Звевдочка ставится чтобы Rout также отслеживал вложенные пути ввида /dialogs/3 */}
          </Routes>

        </div>


      </div>
    </BrowserRouter>
  );
}



export default App;
