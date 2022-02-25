module.exports = app => {
    app.route('/cliente').get(app.services.cliente.getAll);
    app.route('/cliente/:Cod_Cid').get(app.services.cliente.get);
}