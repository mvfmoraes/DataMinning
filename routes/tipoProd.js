module.exports = app => {
    app.route('/tipoProd').get(app.services.tipoProd.getAll);
    app.route('/tipoProd/:Cod_TipoProd').get(app.services.tipoProd.get);

}