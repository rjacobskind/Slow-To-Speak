import recognition from './audio';
import App from './App';

var recognizing = true;

export const startButton = (event) => {
      recognizing = !recognizing;
      if (!recognizing){
        event.target.innerHTML = "Stop";
        recognition.start();
      } else {
        event.target.innerHTML = "Start!";
        recognition.stop();
      }
}

  recognition.onresult = (event) => {
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length;

  console.log(event.results[event.results.length - 1][0].transcript);
  console.log("length", length);

  if(length > 5){
    document.getElementById('message').innerHTML = "Slow Down";

    setTimeout(() => {
      document.getElementById('message').innerHTML = "You are speaking at a good rate"
    }, 2000);

  }

}

