import React from 'react';

const Temperature = props => {
  return (
    <div id="temperature">
      <div id="Main">{props.state.temperature}°F</div>
      <div>
        Min: {props.state.temperatureMin}°F Max: {props.state.temperatureMax}°F
      </div>
      {/* <span id="pressure">{props.state.pressure} hpa</span> */}
    </div>
  );
};

export default Temperature;
