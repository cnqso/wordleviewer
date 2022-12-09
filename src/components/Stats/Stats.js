import React from 'react';
import './Stats.css';
import wJSON from '../../wordleScores.json';

const wordles = Object.keys(wJSON).length;

const Stats = () => {
  return (
    <div className = "about1">
        <main>
            <p className="left1"> Stats  </p>
            <p className="right1">Woooo</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Wordles sent:</p>
            <p className="right1">{wordles}</p>
        </main>
    </div>
  );
};

export default Stats;