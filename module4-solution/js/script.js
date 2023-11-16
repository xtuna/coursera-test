(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        var firstLetter = currentName.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(currentName);
        } else {
            helloSpeaker.speak(currentName);
        }
    }
})();
