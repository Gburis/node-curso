module.exports = function(app){
    app.get('/new-notice', function(req, res){
        res.render('admin/form_add_noticia'); 
    });
}