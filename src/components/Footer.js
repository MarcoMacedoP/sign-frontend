import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Footer.scss';

class Footer extends React.Component{
    render(){
        return (
            <footer className="Footer">
                <Link to="/" className="Footer__tittle Footer__link">SIGN</Link>

                <ul className="Footer__pages-list">
                    <li className="Footer-list-item">
                        <Link className="Footer__link" to="/">Inicio</Link>
                        </li>
                    <li className="Footer-list-item">
                        <Link className="Footer__link" to="/nosotros">Nosotros</Link>
                        </li>
                    <li className="Footer-list-item">
                        <Link className="Footer__link" to="/objetivos">Objetivos</Link>
                        </li>
                </ul>

                <Link className="Footer__link" to="/login">Inicia sesión</Link>
                <Link className="Footer__link" to="/welcome">Registrate</Link>
		    </footer>
        );
    }
}

export default Footer;