import React, { Component } from 'react';
import axios from 'axios';
import Conditions from './Conditions';
import Temperature from './Temperature';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: '',
      temperature: '',
      temperatureMin: '',
      temperatureMax: '',
      pressure: '',
      condition: '',
      conditionID: '',
      city: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    if (event.key === 'Enter') {
      const res = await axios.get(`/api/${this.state.zipcode}`);
      console.log(res.data);
      let conditionID =
        res.data.weather[0].id === 800 ? 900 : res.data.weather[0].id;

      this.setState({
        zipcode: '',
        temperature: res.data.main.temp,
        temperatureMin: res.data.main.temp_min,
        temperatureMax: res.data.main.temp_max,
        condition: res.data.weather[0].description,
        conditionID: conditionID,
        pressure: res.data.main.pressure,
        city: res.data.name,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="searchbar">
          <div id="logo">Weather Widget</div>
          <input
            name="zipcode"
            type="text"
            placeholder="...Search by US zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
          />
        </div>

        {this.state.city.length ? (
          <React.Fragment>
            <div id="city">{this.state.city}</div>
            <div id="details">
              <div id="group">
                <Conditions state={this.state} />
                <Temperature state={this.state} />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Main;
