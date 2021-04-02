import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../assets/logo.svg';

export default class Navbar extends Component{
    render(){

        //creacion del navbar
        return (
            
            <div className="Navbar">
                
                <div className="container-fluid"> 
                    <Link to="Navbar__brand" href="/">
                        
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>

                        <span className="font-weight-light">Platzi </span>
                        <span className="font-weight-bold">Conf </span>
                    </Link>
                </div>

            </div>

        )
    }
}
