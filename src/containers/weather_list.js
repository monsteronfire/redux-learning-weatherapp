import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SparkLines, SparklinesLine } from 'react-sparklines';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => {
      return weather.main.temp;
    });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
        </td>
      </tr>
    );
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
            {this.props.weather.map(this.renderWeather)}
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
