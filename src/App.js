
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';


const App = () => {

  return (

    <div className='appWrapper'>
      
      <Header />

      <Navbar />

      <Profile />

    </div>
    
  );
}



export default App;
