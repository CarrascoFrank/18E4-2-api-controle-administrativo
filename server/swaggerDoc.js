const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger.json');


const options = {
    swaggerDefiniton:{
        info: {
            title: 'API controle administrativo',
            version: '1.0.0',
            description: ''
        },
        basePath: '/',
    },
    apis: ['servicos.js'],
};

const specs = swaggerJsdoc(options);

module.exports = function(application){
    application.use('/api-docs',swaggerUi.serve, swaggerUi.setup(options));
}