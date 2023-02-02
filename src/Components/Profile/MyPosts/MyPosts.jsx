import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.state.map(item => <Post img={item.img} message={item.message} />)
    // state который находится в Profile.jsx

    let textareaAnchor = React.createRef()
    let addPostUI = () => {
        const value = textareaAnchor.current.value
        props.addPostBLL(value)
        textareaAnchor.current.value = ""
    }

    return (

        <div className={s.myPosts}>
            <h3>My posts</h3>

            <div className={s.newPost}>
                <textarea ref={textareaAnchor} placeholder='your news...' rows="3"></textarea>

                <div className={s.controlls}> <button onClick={addPostUI} className={s.btn} type="submit"> Send </button> </div>
            </div>


            <div className="posts">

                {postsElements}

            </div>

        </div>

    )

}

export default MyPosts