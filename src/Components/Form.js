import React  from 'react';

const Forms = (props) =>{
    return(
      <div className="form">
        <form onSubmit={ props.getWeather }>
          <input className="inputFile" type="text" id="exampleFile" name="city" placeholder="Enter the name of the city" />
          <br />
          <br />
          <input className="inputFile" type="text" name="country" placeholder="Enter the name of the country"/>
          <br />
          <br />
          <button className="button">Get Weather</button>
        </form>
        </div>
    );
  }

export default Forms
