import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
const App = () => {
  return (
  <Router>
      <Navbar/>

  </Router>
    

  )
}

export default App
