var dbContratante = require('../../config/databaseContratante');

var contratante = {}

contratante.adiciona = function(req, res) {
    var contratante = req.body;
    delete contratante._id;
    dbContratante.insert(contratante, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

contratante.busca = function(req, res) {
    dbContratante.findOne({_id: req.params.contratanteId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

contratante.lista = function(req, res) {
    dbContratante.find({}).sort({IDLOJA: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

contratante.remove = function(req, res) {

    dbContratante.remove({ _id: req.params.contratanteId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

module.exports = contratante;