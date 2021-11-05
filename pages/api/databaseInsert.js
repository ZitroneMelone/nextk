const sqlite3 = require('sqlite3').verbose();

function writeData(req, res) {
    let db = new sqlite3.Database('./data', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = `INSERT INTO user (name, password)
           VALUES (?, ? );`;

    db.run(sql, [req.body.name, req.body.password], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        res.status(200).json({ message: 'New row added' })
    });

    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

exports.writeData = writeData;