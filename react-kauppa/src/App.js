import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
          <Route path="Ostoskori" element={<Ostoskori />} />
          <Route path="Ulkoilu" element={<Ulkoilu />} />
          <Route path="Tarjouksetkaikki" element={<Tarjouksetkaikki />} />
          <Route path="Tarjouksetkissat" element={<Tarjouksetkissat />} />
          <Route path="Tarjouksetkoirat" element={<Tarjouksetkoirat />} />
          <Route path="Tarjouksetjasen" element={<Tarjouksetjasen />} />
          <Route path="Poistonurkka" element={<Poistonurkka />} />
          <Route path="Yhteystiedot" element={<Yhteystiedot />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
