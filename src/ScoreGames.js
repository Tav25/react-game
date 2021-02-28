import React from 'react';
import './ScoreGames.css';


function ScoreGames(props) {




  return (
    <div className="score">

      <span className="player1">{props.score[0]}</span>:<span className="player2">{props.score[1]}</span>
    </div>
  );
}





export default ScoreGames;
