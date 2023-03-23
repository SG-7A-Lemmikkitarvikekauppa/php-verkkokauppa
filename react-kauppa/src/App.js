
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './pages/Products';
// import axios from 'axios';

const URL = 'http://localhost/react-kauppa/';



function App() {
  return (
    <>
    <Header />
    <Navbar url={URL}/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
