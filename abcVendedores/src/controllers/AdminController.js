const client = require("../services/database")
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
    async getInfo(req, res) {
        const { name } = req.params
        
        const result = await client.query( `SELECT * FROM vendedores WHERE vendedor = '${name}'`)
        
        console.log(result.rows);

        return res.send( result.rows )
    }
    async getYearInfo(req, res) {
        const { year } = req.params
        
        const result = await client.query(`SELECT * FROM vendedores WHERE ano = '${year}'`)
        
        console.log(result.rows);

        return res.send( result.rows )
    }
    async getMonthInfo(req, res) {
        const { month } = req.params

        const result = await client.query(`SELECT * FROM vendedores WHERE mes = '${month}'`)
        
        console.log(result.rows);

        return res.send( result.rows )
    }
    async getPodium(req, res) {
        const { year } = await req.params

        const result = await client.query(`SELECT vendedor, vendas FROM vendedores WHERE ano = '${year}'`)

        const vendas = result.rows.filter(element => {
            element.vendas
        })

        console.log(vendas)

        // for (const i of result.rows) {
        //     console.log(i.vendas)
        // }

        console.log("maior venda: " + Math.max(vendas))
        return res.send(result.rows)
    }
}

module.exports = new AdminController()