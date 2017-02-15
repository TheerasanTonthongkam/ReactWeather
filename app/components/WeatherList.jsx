var React = require('react');

var WeatherList = ({city, temp}) => {
  return (
      <p className="text-center">{city} - {temp}</p>
  )
};

module.exports = WeatherList;
