const { Router } = require('express');
const router = Router();

const five  = require('johnny-five');

const interruptor = require('./arduino');

const arduino = new five.Board({repl: false});
let led;

arduino.on("ready",() => {
    led = new five.Led(13);
})

router.get("/",(req,res,next) => {
    res.sendFile('index.html');
});


router.get("/led",(req,res,next) => {
    let status = req.query.statusLed;
    interruptor(led,status);
    res.status(200).send({status});
})


module.exports = router;