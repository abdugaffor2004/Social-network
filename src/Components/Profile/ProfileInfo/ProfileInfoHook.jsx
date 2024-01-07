
import React, { useEffect, useState } from 'react'
import Preloader from '../../../Common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
 
const ProfileInfoHook = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [localStatus, setLocalStatus] = useState(props.profileStatus)

    useEffect( () =>{
        setLocalStatus(props.profileStatus)
    }, [props.profileStatus] )

    const editModeOn = () =>{
       setEditMode(true)
    }

    const editModeOff = () =>{
        setEditMode(false)
        
        props.updateProfileStatusThunk(localStatus) // обновляем глобальный статус
    }

    const onStatusEdit = (event) =>{
        let value = event.target.value
        setLocalStatus(value)
    }

    
        
        if(!props.profile){
            return <Preloader />
        } //без этого ничего не будет работать. Если profile===null => <Preloader />

        
        return(
            
            <div className= {s.profileInfo}>
    
                <div className={s.profileImage}>
                    <img src={props.profile.photos.large || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yEOldbWv5ou8N5B8FTKj6ISTvY6qi_8ulg&usqp=CAU"} alt="profileImg"  />
                    {props.isOwner && <div> <input type={'file'} /> </div> }   
                </div>

                <div className={s.profileInfo_content}>
    
                    <h2 className={s.name}> {props.profile.fullName} </h2>

                    {!editMode && <h3 className={s.status} onDoubleClick={editModeOn}> {props.profileStatus || "No status"} </h3>}
                    {editMode && <input onChange={onStatusEdit} value={localStatus} autoFocus={true} className={s.status} onBlur={editModeOff}/>}
                    
    
                    <div className={s.birth}>Date of Birth: 2 January </div>
                    <div className={s.city}> City: Balabanovo </div>
                    <div className={s.education}> Education: IATE MEPHI </div>
                    <div> Instagram: {props.profile.contacts.instagram} </div>
                    <div> VK: {props.profile.contacts.vk} </div>
    
    
                </div>
    
            </div>
    
    
        )

    }


 export default ProfileInfoHook