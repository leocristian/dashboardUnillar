const client = require("../services/database")

class DataController {
    async getInfo(req, res) {
        const { name } = req.params
        
        const result = await client.query( `SELECT * FROM vendedores WHERE vendedor = '${name}'`)
        
        console.log(result.rows);

        return res.send( result.rows )
    }
    async getYearInfo(req, res) {
        const { year, cod } = req.params
        
        const result = await client.query(`SELECT * FROM vendedores WHERE ano = '${year}' and cod = '${cod}'`)
        
        console.log(result.rows);

        return res.send( result.rows )
    }
    async getAllData(req, res) {
        const result = await client.query(`SELECT ano, vendas FROM vendedores`)

        console.log(result.rows)

        return res.send(result.rows)
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

        console.log("maior venda: " + Math.max(vendas))
        return res.send(result.rows)
    }
}

module.exports = new DataController()