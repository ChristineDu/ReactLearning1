var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    debugger;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temperature: temp,
        isLoading: false
      });
    }, function(errorMessage){
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  },
  render: function() {
    var {isLoading, location, temperature} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className='text-center'>Fetching weather...</h3>;
      }else if (location && temperature){
        return <WeatherMessage loc={location} tmp={temperature}/>;
      }
    };

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
