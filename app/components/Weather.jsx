var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherList = require('WeatherList');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  getDefaultProps: function() {
    return {
      city: '',
      temp: ''
    };
  },
  handleSetCity: function(city) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      })
    }, function (error) {
      that.setState({isLoading: false});
      alert(error);
    });
  }
  ,
  render: function() {
    var {isLoading, city, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <p className="text-center">Loading...</p>;
      } else if (temp && city) {
        return <WeatherList city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSetCity={this.handleSetCity}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
