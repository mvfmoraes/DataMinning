module.exports = app => {
    app.route('/produto').get(app.services.produto.getAll);
    app.route('/produto/:Cod_Prod').get(app.services.produto.get);
}