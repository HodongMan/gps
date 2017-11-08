import React, {PureComponent, PropTypes} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Search extends PureComponent{
    render(){
        return(
          <div>
              <Map google={this.props.google} zoom={8}>
                <Marker onClick={this.onMarkerClick}
                        name={'current position'}
                        position={{lat: 35.189522 , lng: 129.071503 }} >
                </Marker>

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                      <h1>{5}</h1>
                    </div>
                </InfoWindow>
              </Map>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div id="imaginary_container">
                            <div className="input-group stylish-input-group">
                                <input type="text" className="form-control"  placeholder="Search" />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA3ReFs7ndLhblZolws5YXcmuXhUMXhrHI")
})(Search)
