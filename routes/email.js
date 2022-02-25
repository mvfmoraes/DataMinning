module.exports = app => {
    app.route('/email').get(app.services.email.getAll);
    app.route('/email/:Num_Lanc').get(app.services.email.get);
}