module.exports = require('knex')({
    client: 'mssql',
    connection: {
        host: 'DESKTOP-3N2SBA1',
        user: 'michael',
        password: 'kovalski2306',
        database: 'DataMinning',
        connectTimeout: 90000,
        options: {
            encrypt: true,
            trustedConnection: true,
            enableArithAbort: true
        }
    },
    pool: {
        min: 2,
        max: 10
    }
})