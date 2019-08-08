function NoticiasDAO(connection){
    this._connection = connection;
}
NoticiasDAO.prototype.Index = function(callback){
    this._connection.query('select * from noticias order by id_noticia desc limit 5', callback);
}

NoticiasDAO.prototype.getNoticias =function(callback){
    this._connection.query('select * from noticias order by id_noticia desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
    console.log(id.id);
    this._connection.query('select * from noticias where id_noticia = '+ id.id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){

    return NoticiasDAO;
}