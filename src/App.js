import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import './PlayerMarker'
import PlayerMarker from './PlayerMarker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true,
      testState: "zero"
    }
  }

  ClickGrid = event => {
    console.log("grid")
    let data = event.target.getAttribute("data")
    let squareArray = this.state.squares
    let playerMark
    if (this.state.player) {
      playerMark = 1;
      this.setState({ player: false }
      )
    } else {
      playerMark = 0;
      this.setState({ player: true })
    }

    if (this.state.squares[data] === null){
    squareArray[data] = playerMark
    this.setState({ squares: squareArray })
    console.log(data, this.state.squares, this.state.playerMarkerDisplay)
    this.state.playerMarkerDisplay[data] = <PlayerMarker name={this.state.player} />
    }else{
      console.log(`не верный ход`)
      //<PlayerMarker name={this.state.player} />
    }

  }

  render() {
    return (
      <div className="gameDesk">
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="0">{this.state.playerMarkerDisplay[0]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="1">{this.state.playerMarkerDisplay[1]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="2">{this.state.playerMarkerDisplay[2]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="3">{this.state.playerMarkerDisplay[3]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="4">{this.state.playerMarkerDisplay[4]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="5">{this.state.playerMarkerDisplay[5]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="6">{this.state.playerMarkerDisplay[6]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="7">{this.state.playerMarkerDisplay[7]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="8">{this.state.playerMarkerDisplay[8]}</div>

      </div>
    )
  }
}

export default App;
