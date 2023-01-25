import MainImage from './MainImage/MainImage'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
 
 const Profile = () =>{

    return(

        <div className="content"> 
            
        <MainImage />
        <ProfileInfo />
        <MyPosts />

        </div>

    )

 }

 export default Profile