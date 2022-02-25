module.exports = app => {
    app.route('/fone').get(app.services.fone.getAll);
    app.route('/fone/:num_lanc').get(app.services.fone.get);
}