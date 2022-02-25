module.exports = app => {
    app.route('/historico').get(app.services.historico.getAll);
    app.route('/historico/:num_lanc').get(app.services.historico.get);
}