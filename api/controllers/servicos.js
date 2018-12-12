const servicos = [
    {id: 1, servico: 'Alterações cadastrais ou declarações', dias: '3 dias'},
    {id: 2, servico: 'Alração de matricula', dias: '7 dias'},
    {id: 3, servico: 'Diploma, certificado, historico ou notas', dias: '14 dias'},
    {id: 4, servico: 'Diversos', dias: '5 dias'},
    ];


module.exports.servicos = function(application, req, res){

    res.status(200).json([servicos]);

}

module.exports.servicos_1 = function(application, req, res){

    const servico = servicos.find(a => a.id === parseInt(req.params.id));

    if (!servico){
        res.status(404).send('Serviço não existe')
    }
    res.status(200).json([servico]);

}

