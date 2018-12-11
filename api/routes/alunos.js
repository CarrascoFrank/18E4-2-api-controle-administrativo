module.exports = function(application){
    application.get('/alunos', function(req, res){

        application.api.controllers.alunos.alunos(application, req, res);
        

    });

    application.get('/alunos/1', function(req, res){
        application.api.controllers.alunos.alunos_1(application, req, res);
    });

};