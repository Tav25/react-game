import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
// import './PlayerMarker'
import PlayerMarker from './PlayerMarker';
import ScoreGames from './ScoreGames';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true,
      score: [0, 0],
      testState: "zero"
    };

  }

  ClickGrid = event => {
    this.soundInGame("clickSq");
    console.log("grid")
    let data = event.target.getAttribute("data")
    let squareArray = this.state.squares
    let playerMark
    if (this.state.squares[data] === null) {
      if (this.state.player) {
        playerMark = 1;
        this.setState({ player: false }
        )
      } else {
        playerMark = 0;
        this.setState({ player: true })
      }

      squareArray[data] = playerMark
      this.setState({ squares: squareArray })
      console.log(data, this.state.squares, this.state.playerMarkerDisplay)
      this.state.playerMarkerDisplay[data] = <PlayerMarker name={this.state.player} />
      this.scoreUp(this.state.player)
    } else {
      this.resetGame()
      console.log(`не верный ход`)
      //<PlayerMarker name={this.state.player} />
    }


  }

  scoreUp(player) {
    if (player) { this.state.score[0] += 1 }
    else { this.state.score[1] += 1 }
  }

  resetGame() {
    console.log("reset")
    this.soundInGame("reset");
    this.setState({
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true,
      score: [0, 0],
      testState: "zero"
    })
  }

  soundInGame(action = "reset") {
    const sounds = {
      reset: "https://www.fesliyanstudios.com/play-mp3/5254",
      clickSq: "https://www.fesliyanstudios.com/play-mp3/2903"
      //https://www.fesliyanstudios.com/royalty-free-sound-effects-download/spells-and-power-ups-217
    }
    const audio = new Audio(sounds[action]);
    audio.play();
  }


  render() {
    return (
      <div>
        <div><ScoreGames score={this.state.score} /></div>
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
        <div><Button variant="contained" color="primary">New Game</Button></div>        
      </div>
    )
  }
}

export default App;
