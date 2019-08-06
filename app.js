var app = require('./config/server');

//traçando rota
var home = require('./app/routes/home')(app);
var newNotice = require('./app/routes/form_add_noticia')(app);
var rotasNoticias = require('./app/routes/noticia')(app);

app.listen(3000, function(){
    console.log('Servidor rodando com express');
});