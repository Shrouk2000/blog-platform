import axios from "axios";

const API=axios.create({baseURL:'http://localhost:3000'});
export const getPosts=()=> API.get('/posts');
export const getPost=(id)=> API.get(`/posts/${id}`);

export const createPost=(post)=> API.post('/posts',post);
export const deletePost=(id)=>API.delete(`/posts/${id}`)