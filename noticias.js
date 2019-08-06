var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/moda'){
        res.end("moda");
    }else if(categoria == '/game'){
        res.end("Jogos Ps4");
    }else{
        res.end("Portal de noticiaas");
    }
});

server.listen(3000);