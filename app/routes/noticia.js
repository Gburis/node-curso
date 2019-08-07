module.exports = function(app){
    app.get('/notice', function(req, res){
        var conn = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticia(function(erro, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
}