import React, {PureComponent} from 'react';

export default class Login extends PureComponent{
    render() {
        const marginStyle = {
            "marginTop" : "40px"
        };

        return(
            <div className="container" style={marginStyle}>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <strong> login </strong>
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <fieldset>
                                        <div className="row">
                                            <div className="center-block">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-10  col-md-offset-1 ">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-user"></i>
                                                        </span>
                                                        <input className="form-control" placeholder="Username" name="loginname" type="text" autoFocus />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-lock"></i>
                                                        </span>
                                                        <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-lg btn-primary btn-block" value="Login " />
                                                </div>
                                                <div>
                                                      <h4><a href="./Signup" class="btn btn-primary">회원 가입</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="panel-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
