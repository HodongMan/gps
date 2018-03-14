import React, {PureComponent} from 'react';

export default class Signup extends PureComponent{


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
                                                    <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign up" />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                                function fsignup() {
                                    var username = validateName(form.loginname.value);
                                    var email = validateEmail(form.email.value);
                                    var password = validatePassword(form.password.value);
                                    var password_confirm = validatePassword_confirm(form.password_confirm.value);
                                                    }

                                function validateName(field) {
                                    if(field == " ")
                                        alert("이름을 입력하세요");
                                  }

                                function validateEmail(field) {
                                    if(field == " ")
                                        alert("이메일을 입력하세요");
                                    else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-].test(field))
                                        alert("올바른 이메일 주소가 아닙니다");
                                    }

                                function validatePassword(field) {
                                      if(field == " ")
                                          alert("비밀번호를 입력하세요");
                                      else if (field.lengh < 5)
                                          alert("비밀번호는 적어도 5글자 이상 입력하세요");
                                      else if(!/[a-z]/.test(field) || ![A-Z]/.test(field) || !/[0-9]/.test(field))
                                          alert("비밀번호는 영어 대소문자와 숫자만 입력 가능합니다.");
                                          }

                                function validatePassword_confirm(field) {
                                      if(form.password.value != form.password_confirm.value)
                                            alert("비밀번호가 서로 다릅니다.");
                                    }
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
