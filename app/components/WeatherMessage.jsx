var React = require('react');


var WeatherMessage = ({tmp, loc}) => {
  return (
    <h3 className='text-center'>It's {tmp} in {loc}</h3>
  );
}

module.exports = WeatherMessage;
