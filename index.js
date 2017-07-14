const express = require('express')
const johnnyFive = require('johnny-five');

const app = express()

const board = new johnnyFive.Board();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
   board.on("ready", function() {
        var led = new johnnyFive.Led(13);

        led.blink(1000);
  });
})
