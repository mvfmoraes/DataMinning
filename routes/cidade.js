module.exports = app => {
    app.route('/cidade').get(app.services.cidade.getAll);
    app.route('/cidade/:Cod_Cid').get(app.services.cidade.get);
}