import React, { Component } from 'react';
import './App.css';
import Titles from './Components/Titles';
import Forms from './Components/Form';
import Weather from './Components/Weather';


const API_KEY = "8fcb14e71b853b15915b5342408b5783";
class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e)=>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_calls= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&appid=${API_KEY}&units=metric`);
    const data = await api_calls.json();
    if( city && country ){
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
      });
    }else{
      this.setState({
        error:"Please Enter city and country",
      });
    }
    }
  render() {
    return (
      <div className="container">
      <div className="grid-templates">
        <Titles />
        <div className="grid-2">
        <Forms getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />
         </div>
        </div>
      </div>
    );
  }
}

export default App;
