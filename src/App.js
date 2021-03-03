import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import PlayerMarker from "./PlayerMarker";
import ScoreGames from "./ScoreGames";
import Line from "./Line";

import Button from "@material-ui/core/Button";
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';

import tapSound from './sound/navigation_hover-tap.wav';
import resetSound from './sound/notification_decorative-01.wav';
import celebrationSound from './sound/hero_decorative-celebration-02.wav';
import tieSound from './sound/hero_decorative-celebration-01.wav';
import loopSound from './sound/Melody 02.wav';
import errorSound from './sound/alert_error-03.wav';

import { Howl, Howler } from 'howler';
import { VolumeDown } from "@material-ui/icons";

import KeyboardEventHandler from 'react-keyboard-event-handler';




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
      soundLevel: 0.8,
      isLoopPlaySound: false,
      soundOn: true,
      isShowMessage: false,
      numKey: 0,
    };

    this.playerMark = 0;
    this.isGameEnd = false;
    this.strokeCounter = 0;

    this.delay = require('delay');

    this.buttonMusic = {
      buttonText: "play music",
      buttonIcon: (<PlayArrowRoundedIcon />)
    };

  }

  ClickGrid = (event) => {
    console.log("grid");
    let data = event.target.getAttribute("data");
    this.mainGame(data)

  }

  ClickNum = (key) => {
    
    this.setState({ numKey: key });
    let data = this.state.numKey;
    if( key>=1 ){
      console.log("adklaskd")
      const numericalCorrection = {
        7:0,
        8:1,
        9:2,
        4:3,
        5:4,
        6:5,
        1:6,
        2:7,
        3:8
      }
      this.mainGame(numericalCorrection[key])
      this.forceUpdate()
    }

  }


  mainGame(data) {
    if (!this.isGameEnd) {
      this.soundInGame(tapSound);
      let squareArray = this.state.squares;
      if (this.state.squares[data] === null) {
        this.strokeCounter += 1
        if (this.state.player) {
          this.playerMark = 1;
          this.setState({ player: false });
        } else {
          this.playerMark = 0;
          this.setState({ player: true });
        }

        squareArray[data] = this.playerMark;
        this.setState({ squares: squareArray });
        console.log(data, this.state.squares);
        this.state.playerMarkerDisplay[data] = (
          <PlayerMarker name={this.playerMark} />
        );

        this.forceUpdate()

      } else {

        console.log(`не верный ход`);
        this.soundInGame(errorSound);
        (async () => {
          this.setState({ isShowMessage: true });
          await this.delay(1000);
          this.setState({ isShowMessage: false });

        })();


      }
      this.isFinishGame(this.playerMark);
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
      await this.delay(2000);      
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
      await this.delay(2000);      
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


  automatic = () => {
    console.log("reset");
    this.newGame();
    const arrayAuto = [0,1,2,3,4,5,7,6,8];

    const spead = 200;
    (async () => {
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[0])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[1])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[2])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[3])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[4])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[5])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[6])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[7])
      await this.forceUpdate()
      await this.delay(spead);      
      await this.mainGame(arrayAuto[8])
      await this.forceUpdate()
    })();

  }

  soundInGame = (sound, loopS = false) => {
    const audio = new Howl({
      src: [sound],
      loop: loopS,
      volume: this.state.soundLevel,
    });
    audio.play();
  }


  soundLoopGame = () => {
    let id1;
    const audio02 = new Howl({
      src: [loopSound],
      loop: true,
      volume: this.state.soundLevel,
    });
    if (!this.state.isLoopPlaySound) {
      id1 = audio02.play();

      this.setState({ isLoopPlaySound: true })
      this.buttonMusic = {
        buttonText: "stop music",
        buttonIcon: (<StopRoundedIcon />)
      };
    } else {
      this.setState({ isLoopPlaySound: false })
      Howler.stop();
      this.buttonMusic = {
        buttonText: "play music",
        buttonIcon: (<PlayArrowRoundedIcon />)
      };
    }
  }



  handleChange = (event, newValue) => {
    Howler.volume(this.state.soundLevel);
    this.setState({ soundLevel: newValue });
    if (this.state.soundLevel > 0) {
      this.setState({ soundOn: true });
    }
    if (this.state.soundLevel === 0) {
      this.setState({ soundOn: false });

      if (this.state.isLoopPlaySound) {
        this.soundLoopGame()
      }
    }

  };

  soundOnChecked = () => {
    if (this.state.soundOn) {
      this.setState({
        soundOn: false,
        soundLevel: 0
      });
      if (this.state.isLoopPlaySound) {
        this.soundLoopGame()
      }

    }
    else {
      this.setState({
        soundOn: true,
        soundLevel: 0.5
      });
    }
  }

  render() {
    return (
      <div>
        <div>
        <KeyboardEventHandler handleKeys={['numeric']} onKeyEvent={(key, e) => {
            console.log(key)
            this.ClickNum(key)
          }} />
        </div>
        
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

        <div><Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.isShowMessage}
          message="Wrong move. This cell is occupied."

        />
          
        </div>


        <div className="settings">
          <Button variant="outlined" onClick={this.newGame} color="primary" className="newGameClass">
            New Game
          </Button>

          <Button variant="outlined" onClick={this. automatic} color="primary" className="newGameClass" style={{ marginTop: 5 }}>
            Auto play
          </Button>


          <div>
            <div className="soundSettings">
              <Button
                variant="outlined"
                color="secondary"
                // size="large"
                // className={classes.button}
                startIcon={this.buttonMusic.buttonIcon}
                onClick={this.soundLoopGame}
              >{this.buttonMusic.buttonText}</Button>


              <VolumeUp color="secondary" />
              <Slider style={{ width: 125 }} value={this.state.soundLevel} onChange={this.handleChange} min={0}
                max={1} step={0.05} aria-labelledby="continuous-slider" color="secondary" />
              <VolumeDown color="secondary" />

              <FormControlLabel
                control={<Switch checked={this.state.soundOn} onChange={this.soundOnChecked} />}
                label="sound"
              />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
