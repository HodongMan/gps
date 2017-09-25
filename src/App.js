import React, { Component } from 'react';
import {Navbar} from './components';
import {Login} from './components';
import {Signup} from './components';
import {Search} from './components';
import {Contents, Comments} from './components';
import {Mypage} from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                <Signup />
                <Search />
                <Contents />
                <Comments />
                <Mypage />
            </div>
        );
    }
}

export default App;
