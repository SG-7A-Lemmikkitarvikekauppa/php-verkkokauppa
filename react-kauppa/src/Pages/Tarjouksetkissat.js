import React from 'react'
import './Kampanjat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import shampoo from '../images/shampoo.png';
import kissaruoka from '../images/kissaruoka.jpg';
import kissapuu from '../images/kissapuu.jpg';
import laser from '../images/kissalaser.jpg';


 function Tarjouksetkissat() {
  return (
    <div id='tarjoukset'>
     <section>
          <h2>Tarjoukset kissoille</h2>
          
        </section>
        <section>
          
          <div className="product-grid">
  
  
    <div className="product-item">
    <div className="product-item">
  <img src={shampoo} alt="tuotteen kuva" />
    <span className="sale-badge">ALE</span>
    <span className="discount-badge40">-40%</span>
    <h3>Shampoo</h3>
    <p> Purrfect shampoo - Hellävarainen ja kosteuttava shampoo kissalle.</p>
    <p className='hinta'>Nyt vain 5,95€</p>
  <button>Lisää ostoskoriin</button>
</div>
    </div>
    <div className="product-item">
      <img src={kissaruoka} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Kissan kuivaruoka 2 KG</h3>
      <p> Miau & Nam - Kissanpennuille tarkoitettu kuivaruoka.Sisältää hyvin sulavaa kanaa, vihanneksia, hedelmiä ja lohiöljyä.</p>
      <p className='hinta'>Nyt vain 6,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    <div className="product-item">
      <img src={kissapuu} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge40">-40%</span>
      <h3>Raapimapuu</h3>
      <p>Basic Cat - Raapimapuussa, jossa runsas valikoima oleskelu- ja vahtimistasoja, kaksi kynsiä kutsuvaa tolppaa ja mm. irrotettava tyyny.</p>
      <p className='hinta'>Nyt vain 19,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className="product-item">
      <img src={laser} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Laserlelu</h3>
      <p> Basic Cat - Laserlelu vauhdikkaille kissoille.</p>
      <p className='hinta'>Nyt vain 5,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
  </div>
  
        </section>
    </div>
  )
}

export default Tarjouksetkissat;