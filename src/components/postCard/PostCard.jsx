import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h3 className='card-title'>{post.title}</h3>
        <p className='card-text'>{post.content}</p>
        <Link to={`/post/${post.id}`} className="btn btn-primary btn-sm">More Details</Link>
      </div>
    </div>
  )
}

export default PostCard
