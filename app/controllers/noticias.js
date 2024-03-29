module.exports.view_notice = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(erro, result){
        res.render('noticias/noticias', {noticias: result});
    });
}

module.exports.view_notices = function(application, req, res){
    var conn = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(erro, result){
        res.render('noticias/noticia', {noticias: result});
    });
}