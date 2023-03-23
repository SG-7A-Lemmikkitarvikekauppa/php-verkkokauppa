import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import axios from 'axios';

export default function Navbar({ URL }) {
    
 /*   const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(URL + 'rpducts/getcategories.php')
            .then((response) => {
                const json = response.data;
                setCategories(json);
            }).catch(error => {
                alert(error.response === undefined ? error : response.data.error);
            })
    }, [])

*/

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Purrfect Pets</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pages/Products">Tuotteet</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


/*
<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Purrfect Pets</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a className='nav-link dropdown-toggle' href='#' id="dropdown01"
                            data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
                            <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        {<Link
                                            className='dropdown-item'
                                            to={'/products/' + category.id}>{category.name}
                                        </Link>}
                                    </li>
                                ))}
                            </ul>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
*/
