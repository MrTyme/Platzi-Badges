import React, {Component} from 'react';


export default class BadgeForm extends Component{
    

    //evento
    //handleChange(e){
        //console.log({
        //    name: e.target.name,
        //    value: e.target.value,
        //});
        

        //creacion del estado
   //     this.setState({
   //         [e.target.name]: e.target.value,
   //     });
   // }

    
    //evento del save
    //handleClick(){
    //    console.log('Button was Clicked');
    //}

    
    handleSubmit(e){
        e.preventDefault();
    }




    render(){
        return(
            <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name </label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            value={this.props.formValues.firstName} />
                    </div>


                    <div className="form-group">
                        <label>Last Name </label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.formValues.lastName}/>
                    </div>
            

                    <div className="form-group">
                        <label>Email </label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.formValues.email}/>
                    </div>


                    <div className="form-group">
                        <label>Job Title </label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.formValues.jobTitle}/>
                    </div>
            

                    <div className="form-group">
                        <label>Twitter </label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            value={this.props.formValues.twitter}/>
                    </div>

                    <button 
                        onClick={this.handleClick} 
                        className="btn btn-primary"> Save 
                    </button>
                    
                    {this.props.error && 
                        <p className="text-danger">
                            {this.props.error.message}
                        </p>
                    }
                </form>
            </div>
        );
    }
}
