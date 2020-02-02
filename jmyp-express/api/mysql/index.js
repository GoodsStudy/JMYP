const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jmyp',
})

const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            err ? reject(err) : resolve(connection)
        })
    })
}

const sql = (sql, query) => {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection()
        connection.query(sql, query ? [query] : null, function (err, results) {
            connection.release()
            err ? reject(err) : resolve(results)
        })
    })
}

module.exports = sql;



