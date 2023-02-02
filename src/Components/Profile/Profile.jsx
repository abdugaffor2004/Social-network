import MainImage from './MainImage/MainImage'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import '../../reset.css'

const Profile = (props) => {


    return (

        <div>

            <div className={s.container}>
                <MainImage />
            </div>

            <div className={s.container}>
                <ProfileInfo />
            </div>

            <div className={s.container}>
                <MyPosts state={props.state.postsData}
                         addPostBLL={props.addPostBLL}
                         />
            </div>




        </div>

    )

}

export default Profile