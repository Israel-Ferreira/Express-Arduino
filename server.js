const express = require('express');
const bodyParser = require('body-parser');

const { acenderLed,desligarLed } = require('./arduino');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile('index.html');
})

app.get('/led',(req,res) => {
    let podeAcender = req.body.statusLed;
    if(podeAcender){
        acenderLed()
    }else{
        desligarLed();
    }

    res.status(200).json({res: podeAcender});
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`Servidor rodando na porta ${PORT}`));