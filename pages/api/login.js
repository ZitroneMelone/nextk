// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const login = require('./databaseLogin')

export default function handler(req, res) {
    function handleGet() {
        res.end("keine GET Methode für Login")
    }

    function handlePost() {
        console.log("yeaahhhh")
        login.login(req,res)
    }

    console.log(req.body)
    res.end({message:"keine GET Methode für Login"})

    switch (req.method) {
        case "GET":
            handleGet();
            break
        case "POST":
            handlePost();
            break
    }

}