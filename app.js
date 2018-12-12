const porta = 3000;
var app = require('./server/server');

// var routeService = require('./api/routes/servicos');
// routeService(app);

app.listen(porta, function(){

    console.log("Server ON at http://localhost:"+porta);
})


/*
app.get();
app.post();
app.put();
app.delete();
*/
