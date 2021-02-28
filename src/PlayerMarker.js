import React from 'react';
import './PlayerMarker.css';
import playerMarker1 from './playerMarker1.png';
import playerMarker2 from './playerMarker2.png';

function PlayerMarker(props) {
  if (props.name === true) {

    return (
      <div className="PlayerMarker">
        <img src={playerMarker1} className="App-logo" alt="logo" />
      </div>
    );
  }
  else {
    return (
      <div className="PlayerMarker">
        <img src={playerMarker2} className="App-logo" alt="logo" />
      </div>
    );
  }
}




export default PlayerMarker;
