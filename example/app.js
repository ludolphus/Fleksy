// Fleksy demo app
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var Fleksy = require('com.fleksy');
Ti.API.info("module is => " + Fleksy);

var textArea = Ti.UI.createTextArea({
  value: 'Longpress or double tap to show the Fleksy option',
  top: 60,
  width: 300,
  height : 70
});
win.add(textArea);

win.open();
