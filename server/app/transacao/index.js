var dbTransacao = require('../../config/databaseTransacao');

var transacao = {}

transacao.adiciona = function(req, res) {
    var transacao = req.body;
    delete transacao._id;
    dbTransacao.insert(transacao, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

transacao.busca = function(req, res) {
    console.log('Busca das transacoes da loja: ' + Number(req.params.idloja))
    dbTransacao.find({IDLOJA: Number(req.params.idloja) }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

transacao.lista = function(req, res) {
    console.log('Lista de transacoes.')
    dbTransacao.find({}).sort({IDLOJA: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

transacao.remove = function(req, res) {

    dbTransacao.remove({ _id: req.params.transacaoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

module.exports = transacao;