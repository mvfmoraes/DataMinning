module.exports = app => {
    app.route('/tipoCli').get(app.services.tipoCli.getAll);
    app.route('/tipoCli/:Cod_TipoCli').get(app.services.tipoCli.get);
}