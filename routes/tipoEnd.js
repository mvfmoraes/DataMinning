module.exports = app => {
    app.route('/tipoEnd').get(app.services.tipoEnd.getAll);
    app.route('/tipoEnd/:Cod_TipoEnd').get(app.services.tipoEnd.get);

}