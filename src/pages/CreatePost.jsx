import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {createPost} from '../services/api';

const CreatePost = () => {
  const [title , setTitle]=useState('');
  const [content , setContent]=useState('');
const navigate=useNavigate();

const handleSubmit= async(e)=>{
e.preventDefault();
  await createPost({title,content});
   navigate('/')
};

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input className='form-control' value={title} onChange={e=> setTitle(e.target.value)} required/> 
        </div>

         <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea className='form-control'rows="5" value={content}  onChange={e=> setContent(e.target.value)} required/> 
        </div>

        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;
