import React from 'react'
import postImg from '../../assets/images/contemplative-reptile.jpg'

const PostItem = ({post, remove}) => {
  return (
    <div className='post-item'>
      <div className='post-item-header'>
        <img src={postImg} alt="img" width='100'/>
      </div>
      <div className='post-item-content'>
        <h4>{post.id}. {post.title}</h4>
        <p>{post.body}</p>
      </div>
      <div className='post-item-action'>
        <button onClick={() => remove(post.id)}>remove</button>
      </div>
    </div>
  )
}

export default PostItem