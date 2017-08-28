import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render(){
    return (
      <div className='weather-list'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
