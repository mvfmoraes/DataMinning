module.exports = app => {
    app.route('/pontuacao').get(app.services.pontuacao.getAll);
    app.route('/pontuacao/:Num_Lanc').get(app.services.pontuacao.get);
}