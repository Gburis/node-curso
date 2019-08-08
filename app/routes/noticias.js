
module.exports = function(application){
    application.get('/notices', function(req, res){
        application.app.controllers.noticias.view_notice(application, req, res);
    });

    application.get('/notice', function(req, res){
        application.app.controllers.noticias.view_notices(application, req, res);
    });
}    
    