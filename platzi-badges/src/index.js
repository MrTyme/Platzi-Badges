import React from 'react';
import ReactDOM from 'react-dom';

//importacion de Frameworks de estilos
import 'bootstrap/dist/css/bootstrap.min.css';

//importando estilos
import './global.css';

//componente
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

import App from './App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
