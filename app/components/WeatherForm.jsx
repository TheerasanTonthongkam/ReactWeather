var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
      e.preventDefault();
      var city = this.refs.city.value;

      if (city.length > 0) {
        this.refs.city.value = '';
        this.props.onSetCity(city);
      }
  },
  render: function() {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="city" placeholder="Enter City Name"/>
            <button type="submit">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
