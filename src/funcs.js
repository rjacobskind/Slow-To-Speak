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
  let isFinal = event.results[event.results.length -1].isFinal;
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length - 1;
  count === 5 ? count = 1 : count++;
  count === 1 ? totalLength = 0 : totalLength;


  // console.log("COUNT", count);
  // console.log(event.results[event.results.length - 1][0].transcript);
  // console.log("length", length);

if (count <= 5){
  totalLength += length;
}

if(count === 5) { console.log(totalLength); }

  function generateMessage(message){
      document.getElementById('message').innerHTML = message;
      // setTimeout(() => {
      //   document.getElementById('message').innerHTML = "You are so well-spoken!";
      // }, 2500);
  }

  if (count === 5 && !isFinal) {
    if ((totalLength/5) <= 1){
      generateMessage("Pick it up, slow poke!");
    }

    if ((totalLength/5) > 5){
      generateMessage("Slow Down");
    }
  }

  else {
    document.getElementById('message').innerHTML = "You are so well-spoken!";
  }

}

