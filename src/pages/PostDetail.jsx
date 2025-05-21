import React, { useEffect ,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPost,deletePost } from '../services/api';

const PostDetail = () => {
     const {id}=useParams();
    const navigate=useNavigate();
    const [post,setPost]=useState(null);

    useEffect(()=>{
        getPost(id).then(res=> setPost(res.data))
    },[id]);

    const handleDelete=async()=>{
        await deletePost(id);
        navigate('/')
    };

    if(!post) return <p>Loading...</p>

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit/${post.id}`}  className=" btn btn-primary" >Edit</Link>
      <button className='btn btn-warning' onClick={handleDelete}>Delate</button>
    </div>
  )
}

export default PostDetail
