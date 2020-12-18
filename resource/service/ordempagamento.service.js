const OrdemPagamentoRepository = require("../repository/ordempagamento.repository");

const OrdemPagamentoService = {
    // findAll: findAll,
    // findOne: findOne,
    // remove: remove,
    // merge: merge,
    // insert: insert,
    realizarPagamentoCartaoCredito: realizarPagamentoCartaoCredito,
};

function realizarPagamentoCartaoCredito(request, response) {
    OrdemPagamentoRepository.realizarPagamentoCartaoCredito(request, response);
};

module.exports = OrdemPagamentoService;