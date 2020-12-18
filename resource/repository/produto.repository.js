const connectionMySQL = require("../connection/mysql.connection");

const ProdutoRepository = {
    findAll: findAll,
    findOne: findOne,
    remove: remove,
    merge: merge,
    insert: insert,
}

function findAll(ProdutoFiltro) {
    let QUERY = `SELECT * FROM TB_PRODUTO `;
    let WHERE = `ORDER BY CODIGO DESC LIMIT ${ProdutoFiltro.limitePaginacao}`;
    if(ProdutoFiltro.limitePaginacao != undefined) {
        QUERY = QUERY.concat(WHERE);
    }
    connectionMySQL.query(QUERY, function (error, result, field) {
        if(error) {
            ProdutoFiltro.response.status(404).json({ "mensagem": "Não foi possível retornar os dados para a consuta realizada!", "error": error.sqlMessage });
        } else if((result != null || result != undefined) && result.length > 0) {
            ProdutoFiltro.response.status(200).json({ produtoList: result });
        } else if(result.length == 0) {
            ProdutoFiltro.response.status(404).json({ "mensagem": "Não existem dados cadastrados na tabela de Produtos!" });
        }
    });
};

function findOne(ProdutoFiltro) {
    let QUERY = `SELECT * FROM TB_PRODUTO WHERE CODIGO = ${ProdutoFiltro.request.params.codigo}`;
    connectionMySQL.query(QUERY, function (error, result, field) {
        if((result != null || result != undefined) && result.length > 0) {
            ProdutoFiltro.response.status(200).json({ produtoList: result });
        } else {
            ProdutoFiltro.response.status(404).json({ "mensagem": `Não foi possível encontrar o produto com codigo`});
        }
    });
};

function remove(ProdutoFiltro) {
    let QUERY = `DELETE FROM TB_PRODUTO WHERE CODIGO = ${ProdutoFiltro.request.params.codigo}`;
    connectionMySQL.query(QUERY, function(error, result, field) {
        if(!error) {
            ProdutoFiltro.response.status(200).json({ "mensagem": `Produto com código ${ProdutoFiltro.request.params.codigo} removido com sucesso!` });
        } else {
            ProdutoFiltro.response.status(404).json({ "mensagem": "Não foi possível remover o Produto!", "error": error.sqlMessage });
        }
    });
};

function merge(request, response) {
    let ProdutoModel = request.body;
    let QUERY = `UPDATE TB_PRODUTO SET 
        ID_CATEGORIA = ${ProdutoModel.idCategoria},
        NOME = '${ProdutoModel.nome}',
        DESCRICAO = '${ProdutoModel.descricao}',
        URL_IMAGEM = '${ProdutoModel.urlImagem}', 
        PRECO = ${ProdutoModel.preco}, 
        QUANTIDADE_ESTOQUE = ${ProdutoModel.quantidadeEstoque}
        WHERE CODIGO = ${request.params.codigo}`;
    connectionMySQL.query(QUERY, function (error, result, field) {
        if (!error) {
            response.status(200).json({ "mensagem": `Os dados do produto foram alterado com sucesso!` });
        } else {
            response.status(500).json({ "mensagem": "Não foi possível Alterar os dados do Produto!", "error": error.sqlMessage });
        }
    });
};

function insert(request, response) {
    let ProdutoModel = request.body;
    let QUERY = `INSERT INTO TB_PRODUTO(ID_CATEGORIA, NOME, DESCRICAO, URL_IMAGEM, PRECO, QUANTIDADE_ESTOQUE) VALUES('${ProdutoModel.idCategoria}', '${ProdutoModel.nome}', '${ProdutoModel.descricao}', '${ProdutoModel.urlImagem}', '${ProdutoModel.preco}', '${ProdutoModel.quantidadeEstoque}')`;
    connectionMySQL.query(QUERY, function (error, result, field) {
        if (!error) {
            response.status(200).json({ "mensagem": `O produto \"${ProdutoModel.nome}\" foi cadatrado com sucesso!` });
        } else {
            response.status(404).json({ "mensagem": "Não foi possível Cadastrar o Produto!", "error": error.sqlMessage });
        }
    });
};

module.exports = ProdutoRepository;