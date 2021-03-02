import React from 'react';
import './Line.css';
import line18 from './Line18.png';
import line63 from './Line63.png';
import lineGoriz from './LineGoriz.png';
import lineVertical from './LineVertical.png';
// import playerMarker2 from './playerMarker2.png';

function Line(props) {
  console.log(props.lineWin)


  const line = {
    0: (""),
    1: (
      <div className="lineGoriz blink5" style={{ top: 70 }}>
        <img src={lineVertical} className="App-logo" alt="logo" />
      </div>
    ),
    2: (
      <div className="lineGoriz blink5" style={{ top: 225 }}>
        <img src={lineVertical} className="App-logo" alt="logo" />
      </div>
    ),
    3: (
      <div className="lineGoriz blink5" style={{ top: 380 }}>
        <img src={lineVertical} className="App-logo" alt="logo" />
      </div>
    ),
    4: (
      <div className="lineGoriz blink5" style={{ left: 70 }}>
        <img src={lineGoriz} className="App-logo" alt="logo" />
      </div>
    ),
    5: (
      <div className="lineGoriz blink5" style={{ left: 225 }}>
        <img src={lineGoriz} className="App-logo" alt="logo" />
      </div>
    ),
    6: (
      <div className="lineGoriz blink5" style={{ left: 380 }}>
        <img src={lineGoriz} className="App-logo" alt="logo" />
      </div>
    ),
    7: (
      <div className="line18 blink5">
        <img src={line18} className="App-logo" alt="logo" />
      </div>
    ),
    8: (
      <div className="line18 blink5">
        <img src={line63} className="App-logo" alt="logo" />
      </div>
    ),

  }

  return (
    line[props.lineWin]
  )

  // return (
  //   <div>
  //     <div className="line18 blink5">
  //       <img src={line18} className="App-logo" alt="logo" />
  //     </div>
  //     <div className="line18 blink5">
  //       <img src={line63} className="App-logo" alt="logo" />
  //     </div>
  //     <div className="lineGoriz blink5">
  //       <img src={lineGoriz} className="App-logo" alt="logo" />
  //     </div>
  //     <div className="lineGoriz blink5" style={{ top: 225 }}>
  //       <img src={lineVertical} className="App-logo" alt="logo" />
  //     </div>
  //   </div>
  // );
}




export default Line;
