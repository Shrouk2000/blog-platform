import React, { useState } from 'react'

const CreatePost = () => {
  const [title , setTitle]=useState('');
  const [content , setContent]=useState('');


  return (
    <div>
      <h2>Create New Post</h2>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input className='form-control' value={title} required/> 
        </div>

         <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea className='form-control'rows="5" value={content} required/> 
        </div>

        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
