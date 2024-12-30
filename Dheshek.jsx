import './app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import logo from './logo.png';

function App() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="app-container">
      <header>
        <Router>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
              </li>
              <li className="navbar-item">
                <Link to="/" onClick={refreshPage} className="navbar-link">ABC</Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/aboutus" className="navbar-link">About Us</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contactus" className="navbar-link">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
            </Routes>
          </main>
        </Router>
      </header>
      <footer className="footer">
        © 2024 Laxshmi Electronics. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
