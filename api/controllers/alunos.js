const alunos = [
{id: 1, nome: 'Frank Carrasco', curso: 'GEC'},
{id: 2, nome: 'Paulo Verol', curso: 'GEC'},
{id: 3, nome: 'Caleb Santos', curso: 'ADS'},
{id: 4, nome: 'Samuel Soares', curso: 'Infra'},
];

module.exports.alunos = function(application, req, res){
    res.status(200).json([alunos]);


}

module.exports.alunos_1 = function(application, req, res){

    const aluno = alunos.find(a => a.id === parseInt(req.params.id));

    if (!aluno){
        res.status(404).send('Não exisite aluno com este ID')
    }
    res.status(200).json([aluno]);
}