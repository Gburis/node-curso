module.exports.view_home = function(application, req, res){
    var conn = application.config.dbConnection();
    var noticeModel =  new application.app.models.NoticiasDAO(conn);

    noticeModel.Index(function(error, result){
        res.render('home/index',{noticia: result});    
    });
    
}