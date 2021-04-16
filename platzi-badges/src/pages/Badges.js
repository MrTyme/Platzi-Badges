import React, {Component} from 'react';

//styles
import './styles/Badges.css';
import confLogo from '../assets/badge-header.svg';

//componentes
import BadgesList from '../components/BadgesList';
import {Link} from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

//import a la API
import api from '../api';

export default class Badges extends Component{

    //estado para la info de los usuarios
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    //llamado a la API
    componentDidMount(){
        this.fetchData();
    }


    //llamada al fetch
    fetchData = async () => {
        this.setState({ loading:true, error:null });
    
        try {
            //recepcion de los datos
            const data = await api.badges.list();

            //guardar los datos en el estado
            this.setState({ loading:false, data:data });

        } catch (e) {
            this.setState({ loading:false, error:e });          
        }
    }

    
    render(){
        
        if (this.state.loading === true) {
            return <PageLoading />
        }

        if (this.state.error === true) {
            return <PageError error={this.state.error.message} />
        }

        return(
            <React.Fragment>                                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" 
                                 src={confLogo} 
                                 alt="Conf Logo"/> 
                        </div>
                    </div>
                </div>


                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary"> 
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">

                            <BadgesList badges={this.state.data} />            
                        </div> 
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

