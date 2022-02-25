module.exports = app => {
    app.route('/estado').get(app.services.estado.getAll);
    app.route('/estado/:Sigla_Est').get(app.services.estado.get);
}