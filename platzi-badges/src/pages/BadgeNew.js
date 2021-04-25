import React, {Component} from 'react';

//importacion de stilos
import './styles/BadgeNew.css';


//importacion de assets
import header from '../assets/platziconf-logo.svg';
import gravatar from '../assets/character_game.jpg';
import PageLoading from '../components/PageLoading';

//importacion del badge
import Badge from '../components/Badge';

//componente de los formularios
import BadgeForm from '../components/BadgeForm';

//importando la api
import api from '../api';


export default class BadgeNew extends Component{

    //inicializacion del estado
    state = { 
        loading: false,
        error: null,
        form: {
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
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    //evento POST
    handleSubmit = async e => {
        e.preventDefault();
        
        this.setState({ loading: true, error: null });
        
       
        try {
            await api.badges.create(this.state.form);
            
            this.setState({ loading:false})
            
            this.props.history.push('/badges');

        } catch (e) {
            this.setState({ loading: false, error: e });   
        }
    }


    render(){

        //return del loader
        if (this.state.loading) {
            return <PageLoading />
        }

        
        return(
            <React.Fragment>   
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" 
                         src={header} 
                         alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRTS_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                email={this.state.form.email || 'EMAIL'}
                                Twitter={this.state.form.twitter || 'Twitter'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );

    }
}
