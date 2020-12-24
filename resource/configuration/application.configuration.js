const application = require("../../application");

application.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

application.listen(process.env.PORT || "9090", () => {
    // console.log("Servidor executando na porta 3000");
});
