

(function () {


var speakWord = "Good Bye";

var byeSpeaker = {
speak: function speak(name) {
  console.log(speakWord + " " + name);
 }
}

})();
var sayBye = {};
sayBye.speakWord = "Good Bye";
var byeSpeaker = {
speaky: function speak(name) {
  console.log(sayBye.speakWord + " " + name)
 }
};
