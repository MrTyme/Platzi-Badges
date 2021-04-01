import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import BadgesNew from './pages/BadgeNew';
import Badges from './pages/Badges';



export default function App(){
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgesNew} />  
            </Switch>
        </BrowserRouter>
    
    );
}
