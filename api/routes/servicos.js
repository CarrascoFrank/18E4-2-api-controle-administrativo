module.exports = function(application){
    application.get('/servicos', function(req, res){

        application.api.controllers.servicos.servicos(application, req, res);

    });

    application.get('/servicos/1', function(req, res){
        application.api.controllers.servicos.servicos_1(application, req, res);
    });

};