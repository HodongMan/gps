import React, {PureComponent} from 'react';

export default class Login extends PureComponent{

    render() {
        return(
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                    <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" placeholder='Remember Me'/>
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        );
    }
}
