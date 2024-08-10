
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

    const onPhotoChange = (event) =>{
        props.updateProfilePhotoThunk(event.target.files[0])
        
    }
    
        
        if(!props.profile){
            return <Preloader />
        } //без этого ничего не будет работать. Если profile===null => <Preloader />

        
        return(
            
            <div className= {s.profileInfo}>
    
                <div className={s.profileImage}>
                    <img src={props.profile.photos.large || "data:image/jpeg;base64,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"} alt="profileImg"  />   
                    {props.isOwner && <div> <input className={s.custom_file_input} onChange={onPhotoChange} type={'file'} /> </div> }
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