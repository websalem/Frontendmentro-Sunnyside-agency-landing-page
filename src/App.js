import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './assets/scss/style.scss';
import { Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
