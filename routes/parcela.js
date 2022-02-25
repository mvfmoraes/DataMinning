module.exports = app => {
    app.route('/parcela').get(app.services.parcela.getAll);
    app.route('/parcela/:Num_Par').get(app.services.parcela.get);
}