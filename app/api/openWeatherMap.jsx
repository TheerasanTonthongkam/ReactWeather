var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=af805f1f244b7e2d93342956162ed2d4';

// 0ce62e88b17e2c10b5b28910927d92dc

module.exports = {
  getTemp: function (location) {
    var endocedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${endocedLocation}`;
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return (res.data.main.temp);
      }
    }, function (err) {
      throw new Error(err.data.message);
    });
  }
}
