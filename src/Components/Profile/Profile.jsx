import MainImage from './MainImage/MainImage'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'
 
 const Profile = () =>{

    return(

        <div className= {s.profileWrapper}> 
            
        <div className={s.container}>
            <MainImage />
        </div>    
        
        <div className={s.container}>
            <ProfileInfo />
        </div>   

        <div className={s.container}>
            <MyPosts />
        </div>   

        
        

        </div>

    )

 }

 export default Profile