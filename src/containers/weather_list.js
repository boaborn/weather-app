import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    return (
      <tr className="col-xs-12" key={ name }>
        <td className="col-xs-2">{ name }</td>
        <td className="col-xs-3"><Chart data={ temps } color="orange" units="C" /></td>
        <td className="col-xs-3"><Chart data={ pressure } color="Green" units="hPa" /></td>
        <td className="col-xs-3"><Chart data={ humidities } color="Blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr className="col-xs-12">
            <th className="col-xs-2">City</th>
            <th className="col-xs-3">Temperature (C)</th>
            <th className="col-xs-3">Pressure (hPa)</th>
            <th className="col-xs-3">Humidity (%)</th>
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
