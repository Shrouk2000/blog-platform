import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostCard from '../components/postcard/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
