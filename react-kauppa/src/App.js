import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Etusivu from './Pages/Etusivu';
import Yhteystiedot from './Pages/Yhteystiedot';
import NavigationBar from './Components/Navigationbar';
import Kissanlelut from './Pages/KissatLelut';
import KissatHoito from './Pages/kissatHoito';
import KissanRuoka from './Pages/KissatRuoka';
import KoiratHoito from './Pages/koiratHoito';
import KoiranRuoka from './Pages/KoiratRuoka';
import KoiranLelut from './Pages/KoiratLelut';
import Ostoskori from './Pages/ostoskori';
import Ulkoilu from './Pages/ulkoilu';
import Tarjouksetjasen from './Pages/Tarjouksetjasen';
import Tarjouksetkaikki from './Pages/Tarjouksetkaikki';
import Tarjouksetkissat from './Pages/Tarjouksetkissat';
import Tarjouksetkoirat from './Pages/Tarjouksetkoirat';
import Poistonurkka from './Pages/Poistonurkka';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Kissatmuut from './Pages/Kissatmuut';
import Koiratmuut from './Pages/Koiratmuut';
import Tuotekortti from './Components/Tuotekortti';
import Tuotteet from './Pages/tuotteet';
import Tuotelista from './Components/Tuotelista';
import Tuotteetkoirat from './Pages/tuotteetkoirat';

const URL = 'http://localhost:3000/';


function App() {
  return (
    <Router>
      <Header />
      <NavigationBar url={URL} />
      
      <div className='container'>
        <Routes>
          <Route path="Etusivu" element={<Etusivu />} />
          <Route path="KissatHoito" element={<KissatHoito />} />
          <Route path="KissatLelut" element={<Kissanlelut />} />
          <Route path="KissatRuoka" element={<KissanRuoka />} />
          <Route path="Kissatmuut" element={<Kissatmuut />} />
          <Route path="KoiratHoito" element={<KoiratHoito />} />
          <Route path="KoiratRuoka" element={<KoiranRuoka />} />
          <Route path="KoiratLelut" element={<KoiranLelut />} />
          <Route path="Ostoskori" element={<Ostoskori />} />
          <Route path="Ulkoilu" element={<Ulkoilu />} />
          <Route path="Koiratmuut" element={<Koiratmuut />} />
          <Route path="Tarjouksetkaikki" element={<Tarjouksetkaikki />} />
          <Route path="Tarjouksetkissat" element={<Tarjouksetkissat />} />
          <Route path="Tarjouksetkoirat" element={<Tarjouksetkoirat />} />
          <Route path="Tarjouksetjasen" element={<Tarjouksetjasen />} />
          <Route path="Poistonurkka" element={<Poistonurkka />} />
          <Route path="Yhteystiedot" element={<Yhteystiedot />} />
          <Route path="Tuotekortti" element={<Tuotekortti />} />
          <Route path="tuotteet/:tuoteId" element={<Tuotteet url={URL} />} />
          <Route path='tuotelista' element={<Tuotelista/>} />
          <Route path='tuotteetkoirat/:tuoteId' element={<Tuotteetkoirat url={URL}/>} />

          
        </Routes>
      </div>

      <Footer />

    </Router>

    

  )
}

export default App;
