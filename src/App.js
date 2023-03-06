import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout />} >
        <Route index element ={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='about' element={<About />} />
        </Route>

      </Routes>

    </Router>


  );
}

export default App;
