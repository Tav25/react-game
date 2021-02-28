import React from 'react';
import ReactDOM from 'react-dom';
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

    }
  }

  render(){
    return(
      <div className = "gameDesk">
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
        <div className = "gameDesk-grid">1</div>
      </div>
    )
  }
}

export default App;
