var app = require('./server/server');

var routeService = require('./api/routes/home');
routeService(app);

//  app.get('/', (req, res) => )

const porta = 3000;

app.listen(porta, function(){

    console.log("Server ON at http://localhost:"+porta);
})


/*
app.get();
app.post();
app.put();
app.delete();
*/
