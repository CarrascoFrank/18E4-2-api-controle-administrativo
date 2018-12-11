module.exports = function(application){
    application.get('/servicos', function(req, res){

        application.api.controllers.servicos.servicos(application, req, res);

    });

};