
import { NavLink } from 'react-router-dom'
import Preloader from '../../../Common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
 
 const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader />
    } //без этого ничего не будет работать. Если profile===null => <Preloader />

    return(
            
        
        <div className= {s.profileInfo}>

            <img src={props.profile.photos.large} alt="profileImg"  />

            <div className={s.profileInfo_content}>

                <h2 className={s.name}> {props.profile.fullName} </h2>
                <div className={s.birth}>Date of Birth: 2 January </div>
                <div className={s.city}> City: Balabanovo </div>
                <div className={s.education}> Education: IATE MEPHI </div>
                <div> Instagram: {props.profile.contacts.instagram} </div>
                <div> VK: <NavLink target={'_blank'} to= {props.profile.contacts.vk}> {props.profile.contacts.vk}</NavLink> </div>


            </div>

        </div>


    )

 }

 export default ProfileInfo