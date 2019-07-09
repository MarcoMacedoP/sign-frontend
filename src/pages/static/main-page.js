import React from 'react';
import {Link} from 'react-router-dom';
import './styles/main-page.scss';

const MainPage = ()=>{

    return(
        <React.Fragment>
           <picture className="main-page__img"></picture>
           <main className="main-page__info-container">
                <h1 className="headline-one">Cambia la manera<br/>en que trabajas.</h1>
                <h2 className="headline-five">SIGN es la manera más eficaz de <br/> mejorar la calidad de tu trabajo.</h2>
                <Link className="button" to="/welcome">Únete ahora</Link>
	        </main>
        </React.Fragment>
    );

}
export default MainPage;