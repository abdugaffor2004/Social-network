
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';


const App = () => {

  return (

    <div className='appWrapper'>
      
      <Header />

      <Navbar />

      <div className='appWrapper_content'>
        <Dialogs />
      </div>
      {/* <Profile /> */}

    </div>
    
  );
}



export default App;
