import React from 'react'
import logo from './kissaherkku.jpg';

export default function Tuotekortti() {
  return (
    <div className="product-item">
      <img src= {logo} alt="tuotteen kuva" />
      <h3>Koiran kuivaruoka 5KG</h3>
      <p>Täysipainoinen, runsaasti kanaa sisältävä täysravinto kookkaaksi kasvaville pennuille. Turvaa tasapainoista kasvua ja sisältää mm. kehityksen kannalta tärkeää omega-3-rasvahappoa.</p>
      <button>Lisää ostoskoriin</button>
    </div>
  )
}
