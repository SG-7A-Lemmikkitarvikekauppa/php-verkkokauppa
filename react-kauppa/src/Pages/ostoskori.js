import React, {useState} from 'react';





function Ostoskori() {
    const[tuotteet, setTuotteet] = useState([]);

    function lisaaTuote(tuote) {
        setTuotteet([...tuotteet, tuote]);
    }

    function poistaTuote(tuote) {
        const uudetTuotteet = tuotteet.filter((t) => t !== tuote);
        setTuotteet(uudetTuotteet);
    }

    function suoritaOstos() {
        // lähetä ostos API:lle
 
    }

    function laskeYhteishinta() {
        let yhteishinta = 0;
        tuotteet.forEach((tuote) => {
            yhteishinta += tuote.hinta * tuote.maara;
        });

        return yhteishinta;
    }

    return (
        <div>
            <h2>Ostoskori</h2>
            <ul>
                {tuotteet.map((tuote) => (
                    <li key={tuote.id}>
                        {tuote.nimi} ({tuote.maara}){' '}
                        <button onClick={() => poistaTuote(tuote)}>Poista</button>
                    </li>
                ))}
            </ul>
            <p>Yhteishinta: {laskeYhteishinta()}€</p>
            <button onClick={suoritaOstos}>Suorita ostos</button>
        </div>
    );
}

export default Ostoskori;