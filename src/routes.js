import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Navbar, Login, Signup,Search, Mypage, Editpage, Contents, Comments} from './components'
import {IndexContainer} from './containers';

//import 'bootstrap/dist/css/bootstrap.css';

class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Navbar}>
                    <IndexRoute component={IndexContainer} />
                    <Route path='login' component={Login} />
                    <Route path='Signup' component={Signup} />
                    <Route path='search' component={Search} />
                    <Route path='Mypage' component={Mypage} />
                    <Route path='Editpage' component={Editpage} />
                    <Route path='Contents' component={Contents} />
                    <Route path='Comments' component={Comments} />
                </Route>
            </Router>
        );
    }
}

export default routes;

/*
<Route path='list' component={TimeListContainer} />
*/
