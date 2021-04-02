import React, {Component} from 'react';

//importacion de stilos
import './styles/BadgeNew.css';


//importacion de assets
import header from '../assets/badge-header.svg';
import gravatar from '../assets/character_game.jpg';

//importacion del badge
import Badge from '../components/Badge';

//componente de los formularios
import BadgeForm from '../components/BadgeForm';

export default class BadgeNew extends Component{

    //inicializacion del estado
    state = { form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''
    } };
    
    handleChange = (e) => {
        //dentro del this.setState llamar al objeto
        //del state

        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    render(){
        
        return(
            <React.Fragment>   
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                Twitter={this.state.form.twitter} 
                                jobTitle={this.state.form.jobTitle} 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );

    }
}
