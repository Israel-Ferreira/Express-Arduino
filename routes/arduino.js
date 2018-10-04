const interruptor = (led, status ) => {
    if(status === "on"){
        led.on();
    }else if(status === "off"){
        led.off()
    }else{
        led.blink(500);
    }
}



module.exports =  interruptor;


