import './Kampanjat.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Tarjouksetjasen() {
  return (
    <div id='tarjoukset'>
     <section>
          <h2>Jäsen tarjoukset</h2>
          
        </section>
        <section>
          
          <div className="product-grid">
  
    <div className="product-item">
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Pentupallo</h3>
      <p>Pentupallo - Kelluva pallo koiran polskutteluleikkeihin. Pehmeää TPR-kumia.</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
   
    

    <div className="product-item">
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Koiran valjaat</h3>
      <p>Basic Dog - Valjaat pieni kokoisille koirille ja koiranpennuille.  </p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>
    
    <div className='product-item'>
      <img  />
      <span className="sale-badge">ALE</span>
      <span className="discount-badge50">-50%</span>
      <h3>Koiran kuivaruoka 3KG</h3>
      <p>HAU HAU - Koiran kuivaruoka pennulle 3 KG</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    <div className="product-item">
      <img/>
      <span className="sale-badge">ALE</span>
      <span className="discount-badge">-20%</span>
      <h3>Puruluu</h3>
      <p> HAU & NAM - Puruluu on isoille koirille. Valmistettu laadukkaasta, yhtenäisestä naudannahasta käsin rullaamalla ja koneella puristamalla</p>
      <p className='hinta'>Nyt vain 4,95€</p>
      <button>Lisää ostoskoriin</button>
    </div>

    
  </div>
  
        </section>
    </div>
  )
}

export default Tarjouksetjasen;