import recognition from './audio';
import App from './App';

var recognizing = true;
let count = 0; //to be used to grab every nth result to analyze
let totalLength = 0;

export const startButton = (event) => {
      recognizing = !recognizing;
      if (!recognizing){
        event.target.innerHTML = "Stop";
        document.getElementById('message').innerHTML = "Speak!";
        document.getElementById('circle').style.display = "inline-block";
        recognition.start();

      } else {
        event.target.innerHTML = "Start!";
        document.getElementById('message').innerHTML = "";
        document.getElementById('circle').style.display = "none";
        recognition.stop();
      }
}

recognition.onresult = (event) => {
  //isFinal is a boolean that lets us known whether the given result is the final version or not
  let isFinal = event.results[event.results.length -1].isFinal;

  //length is the # of words found in a given result
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length - 1;

 // console.log(event.results[event.results.length - 1][0].transcript);

//this 'if' statement takes out outliers and final results (which are repeats of words already spoken)
  if (!isFinal && length < 13) {
    count === 5 ? count = 1 : count++;
    count === 1 ? totalLength = 0 : totalLength;
    if (count <= 5){
      totalLength += length;
    }
  }

if(count === 5) { console.log(totalLength); }

  function generateMessage(message){
      document.getElementById('message').innerHTML = message;
  }

  if (count === 5 && !isFinal) {
    if ((totalLength/5) > 4.5) generateMessage("Slow Down");

    else generateMessage("You are so well-spoken!");
  }
}
