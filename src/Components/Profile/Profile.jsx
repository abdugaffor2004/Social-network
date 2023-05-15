import MainImage from './MainImage/MainImage'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (props) => {

    return (

        <div>

            <div className={s.container}>
                <MainImage />
            </div>

            <div className={s.container}>
                <ProfileInfo {...props} profile={props.profile} updateProfileStatusThunk={props.updateProfileStatusThunk}/>
            </div>

            <div className={s.container}>
                <MyPostsContainer />
            </div>

        </div>

    )

}

export default Profile