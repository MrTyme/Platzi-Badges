import React, {Component} from 'react';


export default class BadgeForm extends Component{
    
    //inicializacion del estado
    state={
        firstName:' ',
        LastName:' ',
        email:' ',
        jobTitle:' ',
        twitter:' '
    };


    //evento
    handleChange(e){
        //console.log({
        //    name: e.target.name,
        //    value: e.target.value,
        //});
        

        //creacion del estado
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    
    //evento del save
    handleClick(){
        console.log('Button was Clicked');
    }

    
    handleSubmit(e){
        e.preventDefault();
    }




    render(){
        return(
            <div>
                <h1>New Attendant </h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name </label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" type="text" name="firstName" value={this.state.firstName} />
                    </div>


                    <div className="form-group">
                        <label>Last Name </label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" type="text" name="LastName" value={this.state.LastName}/>
                    </div>
            

                    <div className="form-group">
                        <label>Email </label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" type="email" name="email" value={this.state.email}/>
                    </div>


                    <div className="form-group">
                        <label>Job Title </label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
                    </div>
            

                    <div className="form-group">
                        <label>Twitter </label>
                        <input onChange={this.handleChange.bind(this)} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save </button>

                </form>
            </div>
        );
    }
}
