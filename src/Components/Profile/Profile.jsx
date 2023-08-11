import MainImage from './MainImage/MainImage'
import s from './Profile.module.css'
import '../../reset.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoHook from './ProfileInfo/ProfileInfoHook'
import ProfileInfoClass from './ProfileInfo/ProfileInfoClass'
import { memo } from 'react'

// window.props = [] // для сравнивания пропсов

const Profile = memo( (props) => {
//console.log('Profile Rendered')
// window.props.push(props) // для сравнивания пропсов

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

})

export default Profile