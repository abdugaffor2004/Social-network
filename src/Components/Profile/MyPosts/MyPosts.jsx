import s from './MyPosts.module.css'
import Post from './Post/Post'
 
 const MyPosts = (props) =>{

    let postsElements = props.state.map( item =>  <Post img={item.img} message={item.message} />)
    // state который находится в Profile.jsx

    return(

        <div className={s.myPosts}>
            <h3>My posts</h3>

            <form action='#' className= {s.newPost}>
                <textarea placeholder='your news...'  rows="3"></textarea>
                <div className= {s.controlls}> <button className= {s.btn} type="submit"> Send </button> </div> 
            </form>


            <div className="posts">
                
                {postsElements}

            </div>
            
        </div>

    )

 }

 export default MyPosts