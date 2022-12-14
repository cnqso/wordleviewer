import React from 'react';
import './Stats.css';
import wJSON from '../../wordleScores.json';

const wordles = Object.keys(wJSON).length;

let avewinner = 0; //higher means will lower means mom
let willsent = 0;
let momsent = 0;
let willtimetotal = 0; //average time of day, maybe measures 0 to 2400
let momtimetotal = 0;
let willscoretotal = 0;
let momscoretotal = 0;
let previouswordle = (wJSON[0].wordle - 1);
let currentstreakstart = (wJSON[0].wordle - 1);
let gapstarttime = 0;
let longeststreak = 0; //measured in number sent
let longestgap = 0; //measured in time difference
let streakwordle = 0;
let gapwordle = 0;


function cfTimeToDate (CFTime) {
  // Create a date object from the Unix time
  let unixTime = (CFTime / 1000000000) + 978307200;
  let date = new Date(unixTime * 1000);
  return date;
}



for(let i = 0; i < wordles; i++) {
  let obj = wJSON[i];

  //this could be a good helper function
  if (obj.willscore != null) {
    willsent += 1;
    willscoretotal += obj.willscore;
    if (obj.willscore < obj.momscore) {
      avewinner += 1;
    }
  } else {
    avewinner -= 1;
  }
  if (obj.momscore != null) {
    momsent += 1
    momscoretotal += obj.momscore;
    if (obj.momscore < obj.willscore) {
      avewinner -= 1;
    }
  } else {
    avewinner += 1;
  }


  if (obj.wordle === (previouswordle + 1)) {
    if ((obj.wordle - currentstreakstart) > longeststreak) {
      longeststreak = (obj.wordle - currentstreakstart);
      streakwordle = currentstreakstart;
    }
  } else {
      currentstreakstart = obj.wordle;
      if (obj.wordle - previouswordle > longestgap) {
        longestgap = (obj.wordle - previouswordle);
        gapwordle = obj.wordle;
      }
  }


  willtimetotal += timeHourConversion(obj.willtime);
  momtimetotal += timeHourConversion(obj.momtime); 
  previouswordle = obj.wordle;
  gapstarttime = Math.min(obj.willtime, obj.momtime);

}



function timeHourConversion (CFTime) {
  let time = cfTimeToDate(CFTime);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  return ((hour + (minutes/60))/24); //Here I'm representing time as what percent into the day you've reached. 
  //You may ask: why on earth would you ever do that?
  //This is because you cannot easily average times between eachother in base 10
  //Will convert back afterwards. Measurements of time are relative, I don't want to hear it.
}


function timeStringConversion (time){  
  console.log(time);
  let hours = time*24;
  let minutes = Math.floor((hours-(Math.floor(hours)))*60).toString();
  minutes = minutes.padStart(2,"0");
  let ampm = "AM";
  if (hours >= 13) {
    hours -= 12;
    ampm = "PM";
  }
  return (Math.floor(hours) + ":" + minutes + ampm); 

}
console.log(willtimetotal, momtimetotal);
const willAverageTime = timeStringConversion(willtimetotal / willsent);
const momAverageTime = timeStringConversion(momtimetotal / momsent);
const willAverageScore = willscoretotal / willsent;
const momAverageScore = momscoretotal / momsent;

let winner = "Tie!";
if (avewinner > 0) {
  winner = "Will";
} else if (avewinner < 0) {
  winner = "Mom";
}


const Stats = () => {
  return (
    <div className = "about1">
        <main>
            <p className="left1" style={{color: "#d0ffcc"}}> Stats  </p>
            <p className="right1"></p>
            <p className="left1">Wordles completed:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Sent by Mom:</p>
            <p className="right1">{momsent}</p>
            <p className="left1">Sent by Will:</p>
            <p className="right1">{willsent}</p>
            <p className="left1">Longest streak:</p>
            <p className="right1">{longeststreak + " (" + streakwordle + " to " + (streakwordle + longeststreak) + ")"}</p>
            <p className="left1">Longest gap:</p>
            <p className="right1">{longestgap + " (" + (gapwordle - longestgap) + " to " + (gapwordle) + ")"}</p>
            <p className="left1">Mom average score:</p>
            <p className="right1">{Math.round(momAverageScore * 100) / 100}</p>
            <p className="left1">Will average score:</p>
            <p className="right1">{Math.round(willAverageScore * 100) / 100}</p>
            <p className="left1">Mom average time of day:</p>
            <p className="right1">{momAverageTime}</p>
            <p className="left1">Will average time of day:</p>
            <p className="right1">{willAverageTime}</p>
            <p className="left1">Average daily winner:</p>
            <p className="right1" style={{color: "#d0ffcc"}}>{winner}</p>
            <br></br><br></br><br></br><br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </main>
    </div>
  );
};

export default Stats;

