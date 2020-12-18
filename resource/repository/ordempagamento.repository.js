const connectionMySQL = require("../connection/mysql.connection");

const OrdemPagamentoRepository = {
    // findAll: findAll,
    // findOne: findOne,
    // remove: remove,
    // merge: merge,
    // insert: insert,
    realizarPagamentoCartaoCredito: realizarPagamentoCartaoCredito,
};

function realizarPagamentoCartaoCredito(request, response) {
    setTimeout( () => {
        response.status(200).json( { "mensagem": "Pagamento realizado com sucesso!" } );
    }, 4000);
};

module.exports = OrdemPagamentoRepository;