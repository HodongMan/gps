import React, {Component} from 'react';

import {Search, Mypage, Signup, Login} from '../components';


export default class IndexContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    onLogin(){

    }
    render(){

        return(
            <div>
              <Login />

            </div>
        );
    }
}
