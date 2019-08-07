module.exports = function(app){
    app.get('/new-notice', function(req, res){
        res.render('admin/form_add_noticia'); 
    });

    app.post('/new-notice/save', function(req, res){
        let noticia = req.body;
        res.send('Noticia cadastrada');
    });
}
