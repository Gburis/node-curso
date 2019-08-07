const { check, validationResult } = require('express-validator');
module.exports = function(app){
    app.get('/new-notice', function(req, res){
        res.render('admin/form_add_noticia'); 
    });

    app.post('/new-notice/save', [
        check('titulo').not().isEmpty().withMessage('titulo esta vazio')
        
    ], function(req, res){
        let noticia = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.redirect('/new-notice');
            return false;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, result){
            res.redirect('/notices');
        });
    });
}
