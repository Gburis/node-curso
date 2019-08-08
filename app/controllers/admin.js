module.exports.add_notice = function(application, req, res){
    res.render('admin/form_add_noticia',{ validacao : {}, noticia : {} }); 
}

module.exports.save_notice = function(application, req, res, validationResult){
    let noticia = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render('admin/form_add_noticia', { validacao: errors.array(), noticia: noticia });
          }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, result){
            res.redirect('/notices');
        });
}