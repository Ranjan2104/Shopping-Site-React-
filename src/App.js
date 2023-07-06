import './App.css';
import Home from './Pages/Home'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/products' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
