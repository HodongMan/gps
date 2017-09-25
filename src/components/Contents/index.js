import React, {PureComponent} from 'react';

export default class Contents extends PureComponent{


    render(){
        const widthStyle = {
            "width" : "20rem",
        };
        return(
            <div className="card" style={widthStyle}>
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
