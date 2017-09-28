import React, {PureComponent} from 'react';

export default class Navbar extends PureComponent{

    render(){
        return(
            <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Project </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> 위치 검색 </a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#"> 위치 정보 <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"> 회원 수정 </a>
                        </li>

                    </ul>

                </div>
            </nav>
            {this.props.children}
            </div>
        );
    }
}
