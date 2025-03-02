import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/card.jsx";
import Categories from "./components/Categories.jsx";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Eventdetails from "./pages/Eventdetails.jsx";
import Erros404 from "./pages/Erros404.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Eventslists from "./pages/Eventslists.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./pages/Faq-page/Faq.jsx";
import Hostdashboard from "./pages/Dashboards/Hostdashboard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItenaryDashboard from "./pages/ItenaryDashboard.jsx";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/event-details" element={<Eventdetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events-list" element={<Eventslists />} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/host-dashboard" element={<Hostdashboard />} />
          <Route path="/itenary-dashboard" element={<ItenaryDashboard />} />
          
          <Route path="*" element={<Erros404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
