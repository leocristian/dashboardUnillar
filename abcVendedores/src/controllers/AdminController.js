
const { initializeDB, populateDB } = require("../createDatabase")

class AdminController {
    async login(req, res) {
        const { username, password } = req.body

        console.log(`${username}: ${password}`);
    }
    async signup(req, res) {
        const { username, email, password } = req.body
        console.log(`${username}: ${email}: ${password}`);
    }
    async uploadData(req, res) {
        const { tablename, filename} = req.body 

        initializeDB(tablename).then(() => {
            populateDB(filename, tablename)
        })
    }
}

module.exports = new AdminController()