import React from 'react'
import logo from './kissaherkku.jpg';

 function Tuotekortti({tuotelista}) {

 console.log({tuotelista});

  return (
    <div className="product-item">
      <img src= {logo} alt="tuotteen kuva" />
      <h3> {tuotelista.id} {tuotelista.rtyyppi}  </h3>
      <p>Täysipainoinen, runsaasti kanaa sisältävä täysravinto kookkaaksi kasvaville pennuille. Turvaa tasapainoista kasvua ja sisältää mm. kehityksen kannalta tärkeää omega-3-rasvahappoa.</p>
      <button>Lisää ostoskoriin</button>
    </div>
  )
}

export default Tuotekortti;