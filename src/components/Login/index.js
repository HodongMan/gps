import React, {PureComponent} from 'react';
import cookie from 'react-cookie';
/*
static propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

componentWillMount() {
  const { cookies } = this.props;

  this.state = {
    name: cookies.get('name') || 'Ben'
  };
}

handleNameChange(name) {
  const { cookies } = this.props;

  cookies.set('name', name, { path: '/' });
  this.setState({ name });
}
*/

export default class Login extends PureComponent{

componentWillMount() {
  this.state = {
    loginname : cookie.load('loginname')};
}//cookie.load('')

  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);

    this.state = {
      isLogin : false,
      loginname : '',
      password : '',
    };
    /*
    this.state = {
      loginname : cookie.load('loginname')};
      */
    }

  onLogin(loginname, password) {
    if(!this.state.isLogin) {
      this.setState({
        loginname : this.props.loginname,
        password : this.props.password
      });
      cookie.save('loginname', loginname, { path: '/' });
    }
  }//cookie.save

  onLogout() {
    this.setState({
      loginname : ''
    });
    cookie.remove('loginname', { path: '/' });
  }//cookie.remove

  validateForm() {
    return this.state.password.length > 0 && this.state.password.length > 0;
  }

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
                                                        <input className="form-control" placeholder="Password" name="password" type="password" onClick={this.validateForm} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onLogin} value="Login " />
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
