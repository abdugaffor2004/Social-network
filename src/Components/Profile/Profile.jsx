import MainImage from './MainImage/MainImage'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {Navigate} from  'react-router-dom'

const Profile = (props) => {

    if(!props.isAuth) return <Navigate to="/login" />

    return (

        <div>

            <div className={s.container}>
                <MainImage />
            </div>

            <div className={s.container}>
                <ProfileInfo profile={props.profile} />
            </div>

            <div className={s.container}>
                <MyPostsContainer />
            </div>

        </div>

    )

}

export default Profile