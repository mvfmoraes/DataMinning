module.exports = app => {
    app.route('/bonus').get(app.services.bonus.getAll);
    app.route('/bonus/:num_lanc').get(app.services.bonus.get);
}