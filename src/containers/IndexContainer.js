import React, {Component} from 'react';

import {Search, Mypage} from '../components';


export default class IndexContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){

        return(
            <div>
                <Search />
                <Mypage />
            </div>
        );
    }
}
