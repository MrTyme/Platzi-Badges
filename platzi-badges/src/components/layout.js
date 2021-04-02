import React from 'react';


//navbar
import Navbar from '../components/navbar';


export default function layout(props) {
    
    //children
    //const children = props.children;

    return (
        <React.Fragment>
            <Navbar />
            
            {props.children}
        </React.Fragment>
    );
}



