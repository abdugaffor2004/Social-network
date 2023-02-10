import MainImage from './MainImage/MainImage'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    debugger

    return (

        <div>

            <div className={s.container}>
                <MainImage />
            </div>

            <div className={s.container}>
                <ProfileInfo />
            </div>

            <div className={s.container}>
                <MyPostsContainer store={props.store}/>
            </div>

        </div>

    )

}

export default Profile