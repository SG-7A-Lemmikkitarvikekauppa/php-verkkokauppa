import React from 'react'

 function Kissalelu({tuotelista}) {

 console.log({tuotelista});

  return (
    <div className="product-item">
      <img src= {tuotelista.tuotekuva} alt="tuotteen kuva" />
      <h3> {tuotelista.nimi}  </h3>
      <p> {tuotelista.kuvaus} </p>
      <p> {tuotelista.hinta} juuu00 €</p>
      <button>Lisää ostoskoriin</button>
    </div>
  )
}

export default Kissalelu;