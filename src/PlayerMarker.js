import React from 'react';
import './PlayerMarker.css';
import playerMarker1 from './images/playerMarker1.png';
import playerMarker2 from './images/playerMarker2.png';

function PlayerMarker(props) {
  if (props.name === 1) {

    return (
      <div className="PlayerMarker blink6">
        <img src={playerMarker1} className="App-logo" alt="logo" />
      </div>
    );
  }
  else {
    return (
      <div className="PlayerMarker blink6">
        <img src={playerMarker2} className="App-logo" alt="logo" />
      </div>
    );
  }
}




export default PlayerMarker;
