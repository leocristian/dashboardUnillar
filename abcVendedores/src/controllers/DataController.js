const client = require("../services/database")
const formatData = require("./FormatData")

class DataController {
    
    async getInfo(req, res) {
        const { name } = req.params
        
        const result = await client.query( `SELECT * FROM vendedores WHERE vendedor = '${name}'`)
        
        return res.send( result.rows )
    }
    async getYearInfo(req, res) {
        const { year } = req.params
        
        const result = await client.query(`SELECT mes, vendas FROM vendedores WHERE ano = '${year}'`)
        
        const dataFormated = await formatData.sumByMonths(result.rows)

        console.log(`Vendas do ano de ${year}`)
        console.log(dataFormated)

        return res.send( dataFormated )
    }
    async getAllData(req, res) {
        const result = await client.query(`SELECT ano, mes, vendas FROM vendedores`)

        const dataFormated = await formatData.formatByYears(result.rows)

        return res.send(dataFormated)
    }
    async getMonthInfo(req, res) {
        const { month } = req.params

        const result = await client.query(`SELECT * FROM vendedores WHERE mes = '${month}'`)

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