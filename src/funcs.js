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

export const onstart = recognition.onstart = () => {
    //Listening (capturing voice from audio input) started.
    //This is a good place to give the user visual feedback about that (i.e. flash a red light, etc.)
};

export const onresult = recognition.onresult = (event) => {
  let length = event.results[event.results.length - 1][0].transcript.split(' ').length;

  //let phrase = event.results[0][0].replace('-', ' ');
  //let length = phrase.split(' ').length;
  console.log(event.results[event.results.length - 1][0].transcript);
  console.log("length", length);

  if(length > 5){
   setTimeout(App.getElementById('message').innerHTML = "Slow Down");
  }

}

export const onend = recognition.onend = () => {
    //Again – give the user feedback that you are not listening anymore. If you wish to achieve continuous recognition – you can write a script to start the recognizer again here.
};
