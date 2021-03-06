// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const util = require('./databaseUtil')
const insert = require('./databaseInsert')

export default function handler(req, res) {
    function handleGet() {
        util.readData(res.end)
    }

    function handlePost() {
        insert.writeData(req, res)
    }

    switch (req.method) {
        case "GET":
            handleGet();
            break
        case "POST":
            handlePost();
            break
    }

}
