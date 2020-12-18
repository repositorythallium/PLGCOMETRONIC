const express = require("express");
const bodyParser = require("body-parser");
const application = express();
const produtoRouter = require("./resource/router/produto.router");

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));

application.use("/api/", produtoRouter);

module.exports = application;