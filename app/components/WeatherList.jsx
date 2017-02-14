var React = require('react');

var WeatherList = ({city, temp}) => {
  return (
      <p>{city} - {temp}</p>
  )
};

module.exports = WeatherList;
