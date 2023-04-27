import './Kampanjat.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './korianruoka.png';
import pallo from '../images/pallokoira.jpg';
import shampoo from './shampoo.png';
import kissaruoka from './kissaruoka.jpg';
import kissapuu from './kissapuu.jpg';
import valjaat from './koiravaljaat.jpg';
import laser from '../images/kissalaser.jpg';
import luu from '../images/koiraluu.jpg';

function Tarjouksetkaikki() {
  return (
    <div id='tarjoukset'>
     <section>
          <h2>Kaikki tarjoukset</h2>
          
        </section>
        <section>
          
          <div className="product-grid">
  
    <div className="product-item">
      <img src= {pallo} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Pentupallo</h3>
      <p>Pentupallo - Kelluva pallo koiran polskutteluleikkeihin. Pehmeää TPR-kumia.</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
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
      <p> Miau & Nam - Kissanpennuille tarkoitettu kuivaruoka.Sisältää hyvin sulavaa kanaa, vihanneksia, hedelmiä ja lohiöljyä ja.</p>
      <p className='hinta'>Nyt vain 6,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    <div className="product-item">
      <img src={valjaat} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Koiran valjaat</h3>
      <p>Basic Dog - Valjaat pieni kokoisille koirille ja koiranpennuille.  </p>
      <p className='hinta'>Nyt vain 9,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className='product-item'>
      <img src= {logo} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge50">-50%</span>
      <h3>Koiran kuivaruoka 3KG</h3>
      <p>HAU HAU - Koiran kuivaruoka pennulle 3 KG</p>
      <p className='hinta'>Nyt vain 5,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    <div className="product-item">
      <img src={luu} alt="tuotteen kuva" />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Puruluu</h3>
      <p> HAU & NAM - Puruluu on isoille koirille. Valmistettu laadukkaasta, yhtenäisestä naudannahasta käsin rullaamalla ja koneella puristamalla</p>
      <p className='hinta'>Nyt vain 4,95€</p>
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

export default Tarjouksetkaikki;