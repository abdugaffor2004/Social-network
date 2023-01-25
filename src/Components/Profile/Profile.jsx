import MainImage from './MainImage/MainImage'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
 
 const Profile = () =>{

    return(

        <div className= {s.content}> 
            
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