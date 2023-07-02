import MainImage from './MainImage/MainImage'
import s from './Profile.module.css'
import '../../reset.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoHook from './ProfileInfo/ProfileInfoHook'
import ProfileInfoClass from './ProfileInfo/ProfileInfoClass'


const Profile = (props) => {
console.log('Profile Rendered')
    return (

        <div>

            <div className={s.container}>
                <MainImage />
            </div>

            <div className={s.container}>
                <ProfileInfoHook {...props} profile={props.profile} updateProfileStatusThunk={props.updateProfileStatusThunk}/>
                
            </div>

            <div className={s.container}>
                <MyPostsContainer />
            </div>

        </div>

    )

}

export default Profile