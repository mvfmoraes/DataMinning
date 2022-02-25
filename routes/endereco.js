module.exports = app => {
    app.route('/enderecos').get(app.services.enderecos.getAll);
    app.route('/enderecos/:Cod_End').get(app.services.enderecos.get);
}