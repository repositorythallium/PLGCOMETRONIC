const { json } = require("express");
const express = require("express");
const application = require("../../application");
const applicationRouter = express.Router();

const ProdutoService = require("../service/produto.service");

/**
 * ROTA INFORMATIVA
 */
applicationRouter.get("/", function (request, response) {
    response.json({ "nome-sistema": "Plataforma de Lançamento - Gerenciador de Comércio Eletrônico" });
});

/**
 * FINDALL
 * Responsavel por recuperar todos os dados do banco na tabela Produto
 */
applicationRouter.get("/produto", function (request, response) {
    ProdutoService.findAll(request, response);
});

/**
 * FINDONE (CODIGO)
 * Responsavel por recuperar dados do banco pelo codigo
 */
applicationRouter.get("/produto/:codigo", function (request, response) {
    ProdutoService.findOne(request, response);
});

/**
 * REMOVE (CODIGO)
 * Responsavel por remover os dados do banco na tabela Produto de acordo com o codigo passado por parametro
 */
applicationRouter.delete("/produto/:codigo", function (request, response) {
    ProdutoService.remove(request, response);
});

/**
 * MERGE
 */
applicationRouter.put("/produto/:codigo", function(request, response) {
    ProdutoService.merge(request, response);
});

/**
 * INSERT
 */
applicationRouter.post("/produto/", function(request, response) {
    ProdutoService.insert(request, response);
});

module.exports = applicationRouter;