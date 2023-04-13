import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Etusivu from './Pages/Etusivu';
import Kampanjat from './Pages/Kampanjat';
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

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className='container'>
        <Routes>
          <Route path="Etusivu" element={<Etusivu />} />
          <Route path="KissatHoito" element={<KissatHoito />} />
          <Route path="KissatLelut" element={<Kissanlelut />} />
          <Route path="KissatRuoka" element={<KissanRuoka />} />
          <Route path="KoiratHoito" element={<KoiratHoito />} />
          <Route path="KoiratRuoka" element={<KoiranRuoka />} />
          <Route path="KoiratLelut" element={<KoiranLelut />} />
          <Route path="Kampanjat" element={<Kampanjat />} />
          <Route path="Ostoskori" element={<Ostoskori />} />
          <Route path="Ulkoilu" element={<Ulkoilu />} />
          <Route path="Yhteystiedot" element={<Yhteystiedot />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
