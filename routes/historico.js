module.exports = app => {
    app.route('/historico').get(app.services.actor.getAll);
    app.route('/historico/:num_lanc').get(app.services.actor.get);
}