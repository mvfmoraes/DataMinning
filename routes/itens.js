module.exports = app => {
    app.route('/itens').get(app.services.itens.getAll);
    app.route('/itens/:Num_Ped').get(app.services.itens.get);
}