import React, {Component} from 'react';


export default class BadgesList extends Component{
    
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.badge.map( (badge) =>{ 
                    return(
                        <li key={badge.id}>
                            <p>{badge.firstName} {badge.lastName}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
}


