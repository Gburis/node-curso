const mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão estabelecida');
    return mysql. createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    }); 
}

module.exports = function(){
    console.log('Carregou DB');
    return connMySQL;
}
