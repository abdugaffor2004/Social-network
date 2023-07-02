
import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
 
 class ProfileInfoClass extends React.Component{


    state = {
        editMode: false,
        localStatus: this.props.profileStatus
    }

    editModeOn = () =>{
        this.setState({editMode: true})
    }

    editModeOff = () =>{
        this.setState({editMode: false})

        this.props.updateProfileStatusThunk(this.state.localStatus)
    }

    onStatusEdit = (event) =>{
        let value = event.target.value
        this.setState({localStatus: value})
    }

    componentDidUpdate =(prevProps) =>{
        if(prevProps.profileStatus !== this.props.profileStatus){
            this.setState({localStatus: this.props.profileStatus})
        }
        
    }


    
    render(){
        console.log('ProfileInfo rendered')
        if(!this.props.profile){
            return <Preloader />
        } //без этого ничего не будет работать. Если profile===null => <Preloader />

        return(
            
            <div className= {s.profileInfo}>
    
                <img src={this.props.profile.photos.large} alt="profileImg"  />
    
                <div className={s.profileInfo_content}>
    
                    <h2 className={s.name}> {this.props.profile.fullName} </h2>

                    {!this.state.editMode && <h3 className={s.status} onDoubleClick={this.editModeOn}> {this.props.profileStatus || "No status"} </h3>}
                    {this.state.editMode && <input onChange={this.onStatusEdit} value={this.state.localStatus} autoFocus={true} className={s.status} onBlur={this.editModeOff}/>}
                    
    
                    <div className={s.birth}>Date of Birth: 2 January </div>
                    <div className={s.city}> City: Balabanovo </div>
                    <div className={s.education}> Education: IATE MEPHI </div>
                    <div> Instagram: {this.props.profile.contacts.instagram} </div>
                    <div> VK: {this.props.profile.contacts.vk} </div>
    
    
                </div>
    
            </div>
    
    
        )

    }

    

 }

 export default ProfileInfoClass