import React, {Component} from 'react';

//importacion de stilos
import './styles/BadgeNew.css';

//importacion del navbar
import Navbar from '../components/navbar';

//importacion de assets
import header from '../assets/badge-header.svg';
import gravatar from '../assets/character_game.jpg';

//importacion del badge
import Badge from '../components/Badge';

//componente de los formularios
import BadgeForm from '../components/BadgeForm';

export default class BadgeNew extends Component{
    render(){
        
        return(
            <div>
                <Navbar/> 
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Daniel" 
                                lastName="Cordova"
                                Twitter="DcordovaDv"
                                jobTitle="Asesor de Bienes Raices"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>

            </div>
        );

    }
}
