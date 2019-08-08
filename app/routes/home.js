module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.home.view_home(application, req, res);
    });
}
