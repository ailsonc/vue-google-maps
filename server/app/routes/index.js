var contratante = require('../contratante'),
    transacao = require('../transacao'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/gis/contratantes')
        .post(contratante.adiciona)
        .get(contratante.lista);

    app.route('/gis/transacoes')
        .post(transacao.adiciona)
        .get(transacao.lista);  
        
    app.route('/gis/transacoes/:idloja')
        .get(transacao.busca)
    
};