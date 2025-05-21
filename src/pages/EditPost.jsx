import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {updatePost, getPost} from '../services/api';

const EditPost = () => {
const {id}=useParams();
const navigate=useNavigate();
const [title,setTitle]=useState('');
const [content,setContent]=useState('');

useEffect(()=>{
    getPost(id).then(res=>{
        setTitle(res.data.title);
        setContent(res.data.content)
    });
},[id])

const handleSubmit=async(e)=>{
    e.preventDefault();
await updatePost(id,{title,content});
navigate(`/post/${id}`);
}
  return (
    <div>
      <h2>Edit Post</h2>
      <form  onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input className='form-control' value={title} onChange={e=> setTitle(e.target.value)} required/> 
        </div>

         <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea className='form-control'rows="5" value={content}  onChange={e=> setContent(e.target.value)} required/> 
        </div>

        <button className='btn btn-primary' type='submit'>Update</button>
      </form>
    </div>
  )
}

export default EditPost;
