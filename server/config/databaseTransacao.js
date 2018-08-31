var Datastore = require('nedb')
    ,dbName = 'transacao.db'
    ,dbTransacao;

if(!dbTransacao) {
    dbTransacao = new Datastore({
        filename: dbName, 
        autoload: true 
    });
    console.log('Banco ' + dbName + ' pronto para uso')
}

module.exports = dbTransacao;