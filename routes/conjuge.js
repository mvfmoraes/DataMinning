module.exports = app => {
    app.route('/conjuge').get(app.services.conjuge.getAll);
    app.route('/conjuge/:Cod_Cid').get(app.services.conjuge.get);
}