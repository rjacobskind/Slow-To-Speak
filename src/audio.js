
var recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

console.log("ready to listen to some words")

export default recognition;

