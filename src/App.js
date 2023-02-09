
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';


const App = (props) => {

  return (
  
    <BrowserRouter>
      <div className='appWrapper'>

        <Header />

        <Navbar state={props.state.navbar} />

        <div className='appWrapper_content'>

          <Routes>
            <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            {/* Звевдочка ставится чтобы Rout также отслеживал вложенные пути ввида /dialogs/3 */}
          </Routes>

        </div>


      </div>
    </BrowserRouter>
  );
}



export default App;
