var Datastore = require('nedb')
    ,dbName = 'contratante.db'
    ,dbContratante;

if(!dbContratante) {
    dbContratante = new Datastore({
        filename: dbName, 
        autoload: true 
    });
    console.log('Banco ' + dbName + ' pronto para uso')
}

module.exports = dbContratante;