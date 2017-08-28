import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => {
      return weather.main.temp;
    });

    const pressures = cityData.list.map((weather) => {
      return weather.main.pressure;
    });

    const humidities = cityData.list.map((weather) => {
      return weather.main.humidity;
    });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="black" /></td>
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
