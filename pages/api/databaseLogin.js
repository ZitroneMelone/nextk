const sqlite3 = require('sqlite3').verbose();

function login(req, res) {
    let db = new sqlite3.Database('./data', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = `SELECT name, password
           FROM user
           ORDER BY name`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send(JSON.stringify({err: "nicht gefunden"}))
            throw err;
        }
        rows.map((ele) => {
            if(ele.name === req.body.name && ele.password === req.body.password){
                res.send(JSON.stringify({id: ele.id}))
                return
            }
        })
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

exports.login = login;