import React from 'react';
import md5 from 'md5';


export default function Gravatar(props) {
    
    //exportacion del correo
    const email = props.email;

    //exportacion del hash
    const hash = md5(email);

    return(
        <img className={props.className} 
             src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} 
             alt="Avatar"/>        
    );
}
