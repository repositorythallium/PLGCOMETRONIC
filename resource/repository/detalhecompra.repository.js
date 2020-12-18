const connectionMySQL = require("../connection/mysql.connection");

const DetalheCompraRepository = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
};

module.exports = DetalheCompraRepository;