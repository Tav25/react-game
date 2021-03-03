import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import './PlayerMarker'
import PlayerMarker from "./PlayerMarker";
import ScoreGames from "./ScoreGames";
import Line from "./Line";

import Button from "@material-ui/core/Button";
import Slider from '@material-ui/core/Slider';
//
import tapSound from './sound/navigation_hover-tap.wav';
import resetSound from './sound/notification_decorative-01.wav';
import celebrationSound from './sound/hero_decorative-celebration-02.wav';
import tieSound from './sound/hero_decorative-celebration-01.wav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true,
      score: [0, 0],
      testState: "zero",
      lineWin: 0,
      soundLevel: 0.5
    };

    this.playerMark = 0;
    this.isGameEnd = false;
    this.strokeCounter = 0;

    this.delay = require('delay');
  }

  ClickGrid = (event) => {
    if (!this.isGameEnd) {

      this.strokeCounter += 1

      this.soundInGame(tapSound);
      console.log("grid");
      let data = event.target.getAttribute("data");
      let squareArray = this.state.squares;
      if (this.state.squares[data] === null) {
        if (this.state.player) {
          this.playerMark = 1;
          this.setState({ player: false });
        } else {
          this.playerMark = 0;
          this.setState({ player: true });
        }

        squareArray[data] = this.playerMark;
        this.setState({ squares: squareArray });
        console.log(data, this.state.squares, this.state.playerMarkerDisplay);
        this.state.playerMarkerDisplay[data] = (
          <PlayerMarker name={this.state.player} />
        );

      } else {
        
        console.log(`не верный ход`);
        //<PlayerMarker name={this.state.player} />
      }

      this.isFinishGame(this.playerMark);


      //! test

    }
  };

  isFinishGame(playerMark) {
    console.log("isFinGame" + this.state.squares);
    const sq = this.state.squares

    if (sq[0] === playerMark & sq[1] === playerMark & sq[2] === playerMark) { this.isWin(playerMark, 1) }
    if (sq[3] === playerMark & sq[4] === playerMark & sq[5] === playerMark) { this.isWin(playerMark, 2) }
    if (sq[6] === playerMark & sq[7] === playerMark & sq[8] === playerMark) { this.isWin(playerMark, 3) }

    if (sq[0] === playerMark & sq[3] === playerMark & sq[6] === playerMark) { this.isWin(playerMark, 4) }
    if (sq[1] === playerMark & sq[4] === playerMark & sq[7] === playerMark) { this.isWin(playerMark, 5) }
    if (sq[2] === playerMark & sq[5] === playerMark & sq[8] === playerMark) { this.isWin(playerMark, 6) }

    if (sq[0] === playerMark & sq[4] === playerMark & sq[8] === playerMark) { this.isWin(playerMark, 7) }
    if (sq[6] === playerMark & sq[4] === playerMark & sq[2] === playerMark) { this.isWin(playerMark, 8) }

    if (this.strokeCounter === 9 & !this.isGameEnd) { this.isTie(0) }


  }

  isTie(playerMark, lineWin) {
    this.soundInGame(tieSound);
    (async () => {
      console.log('5555')
      await this.delay(2000);      // Executed 100 milliseconds later
      console.log('7777')
      this.resetGame()

    })();
  }

  isWin(playerMark, lineWin) {
    this.soundInGame(celebrationSound);
    this.state.lineWin = lineWin;
    this.scoreUp(this.state.player);
    this.isGameEnd = true;
    console.log("Win:" + playerMark);
    (async () => {
      console.log('5555')
      await this.delay(2000);      // Executed 100 milliseconds later
      console.log('7777')
      this.resetGame()

    })();
  }

  scoreUp(player) {
    if (player) {
      this.state.score[0] += 1;
    } else {
      this.state.score[1] += 1;
    }
  }

  resetGame() {
    console.log("reset");
    this.soundInGame(resetSound);
    this.setState({
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true,
      lineWin: 0
    });

    this.playerMark = 0;
    this.isGameEnd = false;
    this.state.lineWin = 0;
    this.strokeCounter = 0;
  }

  newGame = () => {
    console.log("reset");
    this.resetGame();
    this.setState({ score: [0, 0] });

  }

  soundInGame = (sound) => {
    const audio = new Audio(sound);
    console.log(this.state.soundLevel)
    audio.volume= this.state.soundLevel * 1 ;
    audio.play();
  }

  handleChange = (event, newValue) => {
    this.setState({ soundLevel:newValue});
    // console.log(newValue);
  };

  render() {
    return (
      <div>
        <div>
          <ScoreGames score={this.state.score} />
        </div>
        <div className="gameDesk">
          <div>
            <Line lineWin={this.state.lineWin} />
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="0">
            {this.state.playerMarkerDisplay[0]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="1">
            {this.state.playerMarkerDisplay[1]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="2">
            {this.state.playerMarkerDisplay[2]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="3">
            {this.state.playerMarkerDisplay[3]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="4">
            {this.state.playerMarkerDisplay[4]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="5">
            {this.state.playerMarkerDisplay[5]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="6">
            {this.state.playerMarkerDisplay[6]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="7">
            {this.state.playerMarkerDisplay[7]}
          </div>
          <div className="gameDesk-grid" onClick={this.ClickGrid} data="8">
            {this.state.playerMarkerDisplay[8]}
          </div>
        </div>
        <div>
          <Button variant="contained" onClick={this.newGame} color="primary">
            New Game
          </Button>
          <Slider value={this.state.soundLevel} onChange={this.handleChange} min={0}
        max={1} step={0.05} aria-labelledby="continuous-slider" />
        </div>
      </div>
    );
  }
}

export default App;
