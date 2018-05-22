import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google.map'
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    // find coord object then grab the lon and lat property and sign it
    const {lon, lat} = cityData.city.coord

    return (
      <tr key={ name }>
        <td>{ <GoogleMap lon={ lon } lat={ lat }/> }</td>
        <td><Chart data={ temps } color="orange" units="C" /></td>
        <td><Chart data={ pressure } color="Green" units="hPa" /></td>
        <td><Chart data={ humidities } color="Blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            // each data will passed into renderWeather function
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    )
  }
}

// es6 syntax
function mapStateToProps({ weather }) {
  return { weather }
}
/*
function mapStateToProps(state) {
  return { weather: state.weather}
}
*/

export default connect(mapStateToProps)(WeatherList)
