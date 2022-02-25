module.exports = app => {
    app.route('/dependente').get(app.services.dependente.getAll);
    app.route('/dependente/:Cod_Dep').get(app.services.dependente.get);
}