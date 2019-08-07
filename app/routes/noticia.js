module.exports = function(app){
    app.get('/notice', function(req, res){
        var conn = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel();

        noticiasModel.getNoticia(conn, function(erro, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });
}