import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.profilePage.map(item => <Post img={item.img} message={item.message} />)
    // profilePage который находится в Profile.jsx

    let textareaAnchor = React.createRef()
    
    let addPost = () => {
        props.dispatch( {type:'ADD-POST'}  )
    }

    let onPostChange = () => {
        const value = textareaAnchor.current.value
        props.dispatch( {type: 'UPDATE-NEWPOST-TEXT', newText: value} )
        
    }

    return (

        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}> 
                <textarea ref={textareaAnchor} placeholder='your news...' rows="3" value={props.newPostText} onChange={onPostChange}></textarea>

                <div className={s.controlls}> <button onClick={addPost} className={s.btn} type="submit"> Send </button> </div>
            </div>


            <div className="posts">

                {postsElements}

            </div>

        </div>

    )

}

export default MyPosts