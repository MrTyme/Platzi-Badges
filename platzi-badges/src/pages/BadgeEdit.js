import React, {Component} from 'react';


//importacion de stilos
import './styles/BadgeEdit.css';

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


export default class BadgeEdit extends Component{

    constructor(props){
        super(props);
        
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = { 
            loading: true,
            error: null,
            form: {
                firstName:'',
                lastName:'',
                email:'',
                jobTitle:'',
                twitter:''
            }, 
        };

    }

    //inicializacion del estado
    
    

    
    //peticion PUT al servidor
    componentDidMount(){
        this.fetchData();

        setInterval(this.fetchData, 5000);
    }
    
    //carga de la peticion
    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try {
            console.log(this.props.match.params.badgeId)
            const data = await api.badges.read(this.props.match.params.badgeId);

            this.setState({ loading: false, form: data });

        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
    


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

    //evento PUT
    handleSubmit = async e => {
        e.preventDefault();
        
        this.setState({ loading: true, error: null });
        
       
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            
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
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" 
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
                            <h1>Edit Attendant </h1>
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
