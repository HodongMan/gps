import React, {PureComponent} from 'react';

export default class Contents extends PureComponent{

    render(){
        return(
            <div className="card" style="width: 20rem;">
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
      }
    }
