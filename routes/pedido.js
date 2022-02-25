module.exports = app => {
    app.route('/pedidos').get(app.services.pedidos.getAll);
    app.route('/pedidos/:Num_Ped').get(app.services.pedidos.get);
}