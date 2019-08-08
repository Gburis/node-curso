const { check, validationResult } = require('express-validator');

module.exports = function(application){
    application.get('/new-notice', function(req, res){
        application.app.controllers.admin.add_notice(application, req, res);        
    });

    application.post('/new-notice/save', [
        check('titulo').not().isEmpty().withMessage('titulo esta vazio'),
        check('resumo').not().isEmpty().withMessage('resumo esta vazio'),
        check('autor').not().isEmpty().withMessage('autor esta vazio'),
        check('data_noticia').not().isEmpty().withMessage('a data esta vazia'),
        check('noticia').not().isEmpty().withMessage('não é possivel publicar uma noticia sem noticia !!!!')

    ], function(req, res){
        
        application.app.controllers.admin.save_notice (application, req, res, validationResult);        
    });
}
