const { response } = require("express");
const ProdutoRepository = require("../repository/produto.repository");

const ProdutoService = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
};

function findAll(request, response) {
    ProdutoRepository.findAll(configurarProdutoFiltro(request, response));
};

function findOne(request, response) {
    ProdutoRepository.findOne(configurarProdutoFiltro(request, response));
};

function remove(request, response) {
    ProdutoRepository.remove(configurarProdutoFiltro(request, response));
};

function merge(request, response) {
    ProdutoRepository.merge(request, response);
};

function insert(request, response) {
    ProdutoRepository.insert(request, response);
};

function configurarProdutoFiltro(request, response) {
    let ProdutoFiltro = {
        request: request,
        response: response,
        limitePaginacao: request.query.limit,
    }
    return ProdutoFiltro;
};

module.exports = ProdutoService;