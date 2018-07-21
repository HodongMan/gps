import React, {PureComponent} from 'react';

export default class Editpage extends PureComponent{
/*    constructor(props) {
      super(props);

      this.state = {
        isEdit : false,
        loginname : '',
        email : '',
        password : '',
        password_confirm : ''
      };

    //  this.handleToggle = this.handleToggle.bind(this);
    //  this.handleChange = this.handleChange.bind(this);
    //  this.handleEdit = this.handleEdit.bind(this);
    //  this.handleRemove = this.handleRemove.bind(this);
    }

    handleToggle() {
      if(!this.state.isEdit) {
        this.setState({
          loginname : this.props.loginname,
          email : this.props.email,
          password : this.props.password,
          password_confirm : this.props.password_confirm
        })
      }

      this.setState({
        isEdit : !this.state.isEdit
      });
    }

    handleEdit(loginname, email, password, password_confirm) {
      this.setState({
          [this.state.id] : {
            loginname : this.props.loginname,
            email : this.props.email,
            password : this.props.password,
            password_confirm : this.props.password_confirm
          }
      })
    }

    handleRemove(loginname, email, password, password_confirm) {
      if(this.state.id < 0) {
        return;
      }
      this.setState({
        [this.state.id] : {
          loginname : this.props.loginname,
          email : this.props.email,
          password : this.props.password,
          password_confirm : this.props.password_confirm
        }
      })
  } */
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
                                <strong> Sign up </strong>
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
                                                            <i className="glyphicon glyphicon-user"></i>
                                                        </span>
                                                        <input className="form-control" placeholder="Email" name="email" type="email" autoFocus />
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
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="glyphicon glyphicon-lock"></i>
                                                        </span>
                                                        <input className="form-control" placeholder="Password Confirm" name="password_confirm" type="password" value="" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.handleEdit} value="회원 수정" />
                                                    <input type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.handleRemove} value="회원 탈퇴" />
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
