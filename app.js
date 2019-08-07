var app = require('./config/server');

//traçando rota
// var home = require('./app/routes/home')(app);

app.listen(3000, function(){
    console.log('Servidor rodando com express');
});