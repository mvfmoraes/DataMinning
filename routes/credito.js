module.exports = app => {
    app.route('/credito').get(app.services.credito.getAll);
    app.route('/credito/:num_lanc').get(app.services.credito.get);
}