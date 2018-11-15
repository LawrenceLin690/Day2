import React from 'react';

const Conditions = props => {
  let cap = function(str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i - 1] === ' ') {
        string += str[i].toUpperCase();
      } else {
        string += str[i];
      }
    }
    return string;
  };

  let showCondition = cap(props.state.condition);
  let id = props.state.conditionID;
  console.log(id);
  let images = {
    2: 'https://www.freeiconspng.com/uploads/thunderstorm-icon-0.png',
    3: 'https://www.freeiconspng.com/uploads/weather-icon-png-17.png',
    5: 'https://www.freeiconspng.com/uploads/weather-icon-png-17.png',
    6: 'https://www.freeiconspng.com/uploads/weather-icon-png-10.png',
    7: 'https://www.freeiconspng.com/uploads/cloud-icon-0.png',
    8: 'https://www.freeiconspng.com/uploads/cloud-icon-0.png',
    9: 'https://www.freeiconspng.com/uploads/weather-icon-png-22.png',
  };

  return (
    <div id="conditions">
      <div id="condition">{showCondition}</div>
      <img src={images[id.toString()[0]]} />
    </div>
  );
};

export default Conditions;
