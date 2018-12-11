module.exports.servicos = function(application, req, res){

    res.status(200).json([
        [1,"Alterações cadastrais ou declarações","3 dias"],
        [2,"Alração de matricula","7 dias"],
        [3,"Diploma, certificado, historico ou notas","14 dias"],
        [4,"Diversos","5 dias"]
    ]);

}

module.exports.servicos_1 = function(application, req, res){

    res.status(200).json([
        [1,"Alterações cadastrais ou declarações","3 dias"]
    ]);

}

