import React from 'react';
import './Stats.css';
import wJSON from '../../wordleScores.json';

const wordles = Object.keys(wJSON).length;

const Stats = () => {
  return (
    <div className = "about1">
        <main>
            <p> Stats  </p>
            <p className="right1">
                Woooo
            </p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
            <p>Wordles sent:</p>
            <p className="right1">{wordles}</p>
        </main>
    </div>
  );
};

export default Stats;