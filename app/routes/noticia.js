module.exports = function(app){
    app.get('/notice', function(req, res){
        res.render('noticias/noticias'); 
    });
}    
    