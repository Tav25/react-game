import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//      test
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      squares: Array(9).fill(null),
      playerMarkerDisplay: Array(9).fill(null),
      player: true
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
    }else{
      console.log(`не верный ход`)
    }

  }

  render() {
    return (
      <div className="gameDesk">
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="0">{this.state.squares[0]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="1">{this.state.squares[1]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="2">{this.state.squares[2]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="3">{this.state.squares[3]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="4">{this.state.squares[4]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="5">{this.state.squares[5]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="6">{this.state.squares[6]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="7">{this.state.squares[7]}</div>
        <div className="gameDesk-grid" onClick={this.ClickGrid} data="8">{this.state.squares[8]}</div>

      </div>
    )
  }
}

export default App;
