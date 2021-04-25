import React, {Component} from 'react';


//importacion de assets
import ConfLogo from '../assets/badge-header.svg';
import Gravatar from './gravatar';

//importacion de estilos
import './styles/Badge.css';


export default class Badge extends Component{ 
    render(){
        return (

            <div className="Badge">

                <div className="Badge__header">
                    <img src={ConfLogo} alt="Conf Logo" />
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                        className="badge__avatar" 
                        email={this.props.email}
                        alt="Avatar" />
                    
                    <h1>{ this.props.firstName } <br/>
                        { this.props.lastName } </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle} </h3>
                    <div>@{this.props.Twitter}</div>
                </div>
            
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }
}
