import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/card';
import Categories from './components/Categories';
import Home from './Home';
import Navbar from './components/navbar';
import Eventdetails from './pages/Eventdetails';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/event-details" element={<Eventdetails/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App;
