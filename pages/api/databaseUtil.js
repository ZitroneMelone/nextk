const sqlite3 = require('sqlite3').verbose();

function readData(response) {
    let db = new sqlite3.Database('./data', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = `SELECT name, password
           FROM user
           ORDER BY name`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        response(JSON.stringify(rows))
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

exports.readData = readData;