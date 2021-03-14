import React, {Component} from 'react';


//importacion de assets para el archivo
import ConfLogo from '../assets/badge-header.svg';


export default class Badge extends Component{ 
    render(){
        return (
            <div>
                <div>
                    <img src={ConfLogo} alt="Conf Logo" />
                </div>

                <div>
                    <img src="" alt="Avatar" />
                    <h1>Daniel <br/>Cordova </h1>
                </div>

                <div>
                    <p>Asesor Inmobiliario </p>
                    <p>@DCordova </p>
                </div>
            
                <div>
                    #platziconf
                </div>
            </div>
        );
    }
}
