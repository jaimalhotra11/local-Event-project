import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/card';
import Categories from './components/Categories';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
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
