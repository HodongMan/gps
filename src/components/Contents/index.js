import React, {PureComponent} from 'react';

export default class Contents extends PureComponent{


    render(){
        return(
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                              <h4>Content Title</h4>
                              <p></p>
                              <p><a href="#" className="btn btn-primary" role="button">등록</a>
                              <a href="#" className="btn btn-default" role="button">삭제</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    }
