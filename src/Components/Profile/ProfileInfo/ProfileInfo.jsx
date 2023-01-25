
import s from './ProfileInfo.module.css'
 
 const ProfileInfo = () =>{

    return(
            
        
        <div className= {s.profileInfo}>

            <img src="https://images.unsplash.com/photo-1627157766791-4eeb96934b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0dGVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profileImg"  />

            <div className={s.profileInfo_content}>

                <h2 className={s.name}> Dmitry K. </h2>
                <div className={s.birth}>Date of Birth: 2 January </div>
                <div className={s.city}> City: Balabanovo </div>
                <div className={s.education}> Education: IATE MEPHI </div>
                <div className={s.website}> Web site: https://it-kamasutra.com </div>


            </div>

        </div>


    )

 }

 export default ProfileInfo