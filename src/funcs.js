import recognition from './audio';
//import App from './App';

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
  if(!isFinal) { return; }

  //length is the # of words found in a given result
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length - 1;
  let message;
  if(length < 30) { message = "You are so well spoken!"; }
  else { message = "Slow down!"; }
  document.getElementById('message').innerHTML = message;
}
