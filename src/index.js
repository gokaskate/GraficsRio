const express = require('express');
const path = require('path');

//Iniciar
const app = express();

//Ajustes De Servidor
app.set('port', process.env.port || 4000);

//Middelewaress
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));


//Start
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});