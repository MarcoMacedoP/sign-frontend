//Esta es la barra de navegación de las páginas.
import React from 'react';
import {Link} from 'react-router-dom';
import './styles/nav-bar.css';
class Navbar extends React.Component{
    render (){
        return (
            <header className = "nav-bar">
                <Link to="/">SIGN</Link>
                <nav className="nav-bar__sections">
                    <ul>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/objetivos">Objetivos</Link>
                        </li>
                    </ul>
                    <Link to="/login">Iniciar sesión</Link>
                    <Link to="/signin">Registrarse</Link>
                </nav>
        </header>
        );
                   
    }
}
export default Navbar;
