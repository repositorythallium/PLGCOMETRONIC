const connectionMySQL = require("../connection/mysql.connection");

const UsuarioRepository = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
};

module.exports = UsuarioRepository;