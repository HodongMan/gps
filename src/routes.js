import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Navbar, Login, Signup,Search, Mypage, Editpage} from './components'
import {IndexContainer} from './containers';

//import 'bootstrap/dist/css/bootstrap.css';

class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={Navbar}>
                    <IndexRoute component={IndexContainer} />
                    <Route path='login' component={Login} />
                    <Route path='register' component={Signup} />
                    <Route path='search' component={Search} />
                    <Route path='Mypage' component={Mypage} />
                    <Route path='Editpage' component={Editpage} />
                </Route>
            </Router>
        );
    }
}

export default routes;

/*
<Route path='list' component={TimeListContainer} />
*/
