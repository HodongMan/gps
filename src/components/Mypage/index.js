import React, {PureComponent} from 'react';
import './start.css' ;

export default class Mypage extends PureComponent{

      render() {
          return(
              <div className="card-group">
                  <div className="card">
                      <img className="card-img-top" src="..." alt="Card image cap" id="imgSize" />
                      <div className="card-block">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text"></p>
                      </div>
                      <div className="card-footer">
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                  </div>
                  <div className="card">
                      <img className="card-img-top" src="..." alt="Card image cap" />
                      <div className="card-block">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text"></p>
                      </div>
                      <div className="card-footer">
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                  </div>
                  <div className="card">
                      <img className="card-img-top" src="..." alt="Card image cap" />
                      <div className="card-block">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text"></p>
                      </div>
                      <div className="card-footer">
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                  </div>
            </div>
          );

      }
}
