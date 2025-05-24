import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/"> 🏠 Home </Link>
        <Link to="/education"> 🎓 Education </Link>
        <Link to="/experience"> 💼 Experience </Link>
        <Link to="/projects"> 📂 Projects </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;