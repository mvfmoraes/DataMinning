module.exports = app => {
    app.route('/funcionario').get(app.services.funcionario.getAll);
    app.route('/funcionario/:Cod_Func').get(app.services.funcionario.get);
}