import React from 'react'


 function Tuotekortti({tuotekortti}) {

 console.log({tuotekortti});

  return (
    <div className="product-item">
      <img src= {tuotekortti.tuotekuva} alt="tuotteen kuva" />
      <h3> {tuotekortti.nimi}  </h3>
      <p> {tuotekortti.kuvaus} </p>
      <p> {tuotekortti.hinta},00 €</p>
      <button>Lisää ostoskoriin</button>
    </div>
  )
}

export default Tuotekortti;