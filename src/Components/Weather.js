import React from 'react';

const Weather = (props) => {
    return(
      <div className="weather">

        { props.city &&  props.country &&<p><b>Location  :  { props.city } ,  { props.country }</b></p> }
        { props.temperature && <p><b>Temperature : { props.temperature }</b></p> }
        { props.humidity && <p><b>Humidity :  { props.humidity }</b></p> }
        { props.description && <p><b>Conditions :  { props.humidity } </b></p> }
        { props.error && alert(props.error) }
      </div>
    );
  }

export default Weather;
