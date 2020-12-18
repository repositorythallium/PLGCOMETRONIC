const connectionMySQL = require("../connection/mysql.connection");

const EnderecoRepository = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
};

module.exports = EnderecoRepository;