const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const application = express();

const produtoRouter = require("./resource/router/produto.router");
const ordemPagamentoRouter = require("./resource/router/ordempagamento.router");

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));
application.use(cors());

application.use("/api/", produtoRouter);

application.use("/api", ordemPagamentoRouter);

module.exports = application;
