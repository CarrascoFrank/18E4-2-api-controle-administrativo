module.exports.alunos = function(application, req, res){
    res.status(200).json([
        [1,"Frank Carrasco","GEC"],
        [2,"Paulo Verol","GEC"],
        [3,"Caleb Santos","ADS"],
        [4,"Samuel Soares","Infra"]
    ]);
}

module.exports.alunos_1 = function(application, req, res){
    res.status(200).json([
        [1,"Frank Carrasco","GEC"]
    ]);
}