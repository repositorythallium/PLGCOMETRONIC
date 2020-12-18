const connectionMySQL = require("../connection/mysql.connection");

const CategoriaProdutoRepository = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
};

module.exports = CategoriaProdutoRepository;