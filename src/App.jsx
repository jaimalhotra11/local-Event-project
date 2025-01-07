import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/card';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/card" element={<Card/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App;
