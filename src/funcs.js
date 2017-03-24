import recognition from './audio';

let recognizing = true,
starter,
style;

export const startButton = (event) => {
      recognizing = !recognizing;
      if (!recognizing){
        event.target.innerHTML = "Stop";
        starter = "Speak!";
        style = "inline-block";
        recognition.start();

      } else {
        event.target.innerHTML = "Start!";
        starter = "";
        style = "none";
        recognition.stop();
      }
    document.getElementById('message').innerHTML = starter;
    document.getElementById('circle').style.display = style;
}

recognition.onresult = (event) => {
  //isFinal is a boolean that lets us know whether the given result is the final version or not
  let isFinal = event.results[event.results.length -1].isFinal;
  console.log(event.results[event.results.length - 1][0].transcript);
  if(!isFinal) { return; }

  //length is the # of words found in a given result
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length - 1;
  let message;
  if (length < 20) { message = "You are so well spoken!"; }
  else { message = "Slow down!"; }
  document.getElementById('message').innerHTML = message;
}
