import Preloader from './Common/Preloader/Preloader';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import NavbarContainer from './Components/Navbar/NavbarContainer';
//import FindUsersContainer1 from './Components/FindUsers/FindUsersContainer_1';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { toInitializeAppThunkCreator } from './Redux/app-reducer.ts';

import { compose } from 'redux';
import { withBoundary } from './HOC/withBoundary';

const FindUsersContainer1 = lazy( () => import('./Components/FindUsers/FindUsersContainer_1') )




class App extends React.Component{

  componentDidMount() {
    this.props.toInitializeAppThunk()
  }

  render(){

    if(!this.props.isInitialized){  
      return <Preloader />
    }


    return (
  
      
      <div className='appWrapper'>

        <HeaderContainer />

        <NavbarContainer />

        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path='/profile/:userId?' element={ <ProfileContainer />    } /> 
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<FindUsersContainer1 />} /> 
            <Route path='/login' element={<LoginPage />} />
            {/* Звевдочка ставится чтобы Rout также отслеживал вложенные пути ввида /dialogs/3 */}
          </Routes>
        </Suspense>

      </div>
    
  );

  }
  
}

const mapStateToProps = (state) =>{
  return {
    isInitialized: state.app.isInitialized
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
   toInitializeAppThunk: () => dispatch( toInitializeAppThunkCreator() )
  }
}



export default compose(
  withBoundary,
  connect(mapStateToProps, mapDispatchToProps) 
) (App)
