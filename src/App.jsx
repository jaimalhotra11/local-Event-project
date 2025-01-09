import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/card';
import Categories from './components/Categories';
import Home from './Home';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/categories" element={<Categories/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App;
