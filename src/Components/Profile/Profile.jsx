import MainImage from './MainImage/MainImage'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'
 
 const Profile = () =>{

    let postsData = [
        {img: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        message: 'Hey, why nobody love me ?'},

        {img: 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        message: "Hi everyone! It's already my second post!"},

        {img: 'https://images.unsplash.com/photo-1587996833651-06a23343b15d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGtpdHRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        message: "I love chocolate."},
        
        {img: 'https://images.unsplash.com/photo-1542736705-53f0131d1e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        message: "I am fun of React! "}
    ]


    return(

        <div> 
            
        <div className={s.container}>
            <MainImage />
        </div>    
        
        <div className={s.container}>
            <ProfileInfo />
        </div>   

        <div className={s.container}>
            <MyPosts postsData={postsData} />
        </div>   

        
        

        </div>

    )

 }

 export default Profile