

(function () {


var speakWord = "Hello";

var helloSpeaker = {
	speak: function speak(name) {
  console.log(speakWord + " " + name);
  }
}


})();
var sayHello = {};
sayHello.speakWord = "Hello";
var helloSpeaker = {
	speaky: function speak(name) {
  console.log(sayHello.speakWord + " " + name);
  }
}