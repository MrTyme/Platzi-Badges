import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import BadgesNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import BadgeEdit from './pages/BadgeEdit';
import Layout from './components/layout';
import NotFound from './pages/NotFound';


export default function App(){
    
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route exact path="/badges/:badgesId/edit" component={BadgeEdit}/>
                    <Route component={ NotFound }/>
                </Switch>
            </Layout>
        </BrowserRouter>
    
     );
}
