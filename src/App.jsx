import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
const App = () => {
  return (
  <Router>
      <Navbar/>
<div className='container'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/post/:id' element={<PostDetail/>}/>
  <Route path='/create' element={<CreatePost/>}/>



  </Routes>
</div>
  </Router>
    

  )
}

export default App
