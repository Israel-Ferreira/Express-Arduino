const five =  require('johnny-five');

class ArduinoController {
    constructor(){
        this.readyArduino();
    }

    readyArduino(){
        this.arduino = new five.Board();
        this.arduino.on("ready",() => {
            this.led =  new five.Led(13);
        })
    }


    acenderLed(){
        if(this.arduino.isReady()){
            this.led.on();
        }
    }

    desligarLed(){
        if(this.arduino.isReady()){
            this.led.off();
        }
    }
}


module.exports = new ArduinoController();


