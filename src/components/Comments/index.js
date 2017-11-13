import React, {PureComponent} from 'react';

export default class Comments extends PureComponent{

    render(){
        return(
          <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="panel panel-white post panel-shadow">
                            <div className="post-heading">
                                <div className="pull-left image">
                                    <img src="/" className="img-circle avatar" alt="user profile image" />
                                </div>
                                <div className="pull-left meta">
                                    <div className="title h5">
                                        <a href="#"><b>Ryan Haywood</b></a>
                                        <p>made a post.</p>
                                    </div>
                                    <h6 className="text-muted time">1 minute ago</h6>
                                </div>
                            </div>
                            <div className="post-description">
                                <p>abcde</p>
                                <div className="stats">
                                    <a href="#" className="btn btn-default stat-item">
                                        <i className="fa fa-thumbs-up icon"></i>2
                                    </a>
                                    <a href="#" className="btn btn-default stat-item">
                                        <i className="fa fa-thumbs-down icon"></i>12
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
