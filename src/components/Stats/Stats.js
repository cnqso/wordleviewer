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



/* for each
if willscore != null { willsent ++    } else {avewinner --}
if momscore != null {momsent ++} else {avewinner ++}
willtimetotal += willtime.time() or something  
momtimetotal += momtime.time()
willscoretotal += willscore
momscoretotal += momscore
longest gap ++
*/
function timeHourConversion (CFTime) {
  let time = cfTimeToDate(CFTime);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  console.log((hour*100 + minutes)/2400);
  return ((hour*100 + minutes)/2400); //Here I'm representing time as what percent into the day you've reached. 
  //Will convert back afterwards. Measurements of time are relative, I don't want to hear it.
}


function timeStringConversion (time){  
  console.log(time);
  let newTime = time*2400;
  let ampm = "AM";
  if (newTime > 1200) {
    newTime -= 1200;
    ampm = "PM";
  }
  const dig1 = Math.floor(newTime/100);
  const dig2 = Math.round(newTime%100);
  return (dig1 + ":" + dig2 + ampm); 

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
            <p className="left1"> Stats  </p>
            <p className="right1"></p>
            <p className="left1">Wordles completed:</p>
            <p className="right1">{wordles}</p>
            <p className="left1">Sent by Mom:</p>
            <p className="right1">{momsent}</p>
            <p className="left1">Sent by Will:</p>
            <p className="right1">{willsent}</p>
            <p className="left1">Longest streak:</p>
            <p className="right1">{longeststreak + ", from " + streakwordle + " to " + ((streakwordle + longeststreak))}</p>
            <p className="left1">Longest gap:</p>
            <p className="right1">{longestgap + ", from " + (gapwordle - longestgap) + " to " + (gapwordle)}</p>
            <p className="left1">Mom average score:</p>
            <p className="right1">{Math.round(momAverageScore * 100) / 100}</p>
            <p className="left1">Will average score:</p>
            <p className="right1">{Math.round(willAverageScore * 100) / 100}</p>
            <p className="left1">Mom average time of day:</p>
            <p className="right1">{momAverageTime}</p>
            <p className="left1">Will average time of day:</p>
            <p className="right1">{willAverageTime}</p>
            <p className="left1">Average daily winner:</p>
            <p className="right1">{winner}</p>
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

