const express = require("express");
const application = require("../../application");
const applicationRouter = express.Router();

const OrdemPagamentoService = require("../service/ordempagamento.service");

applicationRouter.get("/ordempagamento", function(request, response) {
    OrdemPagamentoService.realizarPagamentoCartaoCredito(request, response);
});

module.exports = applicationRouter;