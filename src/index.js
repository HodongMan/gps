import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(<Routes />, <CookiesProvider />,
                 document.getElementById('root'))
registerServiceWorker();
