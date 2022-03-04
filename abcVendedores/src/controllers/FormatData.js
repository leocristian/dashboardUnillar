const _ = require("underscore")

const client = require("../services/database")

class FormatData {
    async formatByYears(data) {

        const years = ["2020", "2021", "2022"]
        const finalData = []

        for (let index = 0; index < years.length; index++) {
            
            const dataQuery = await client.query(`SELECT mes, vendas FROM vendedores WHERE ano = '${years[index]}'`)
            const dataFormated = await this.sumByMonths(dataQuery.rows)

            const objFormated = { label: years[index], backgroundColor: '#2452BD', data: dataFormated }
            
            finalData.push(objFormated)
        }
        return finalData
    }
    async sumByMonths(data) {
        const months = ["jane", "feve", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "deze"]
        let sum = 0
        let newObj = {}
        const dataFormated = []
        
        for (let index = 0; index < months.length; index++) {

            newObj = { mes: months[index], vendas: [] }

            for (let index2 = 0; index2 < data.length; index2++) {
                if(data[index2].mes === months[index]) {
                    newObj.vendas.push(data[index2].vendas)
                }
            }

            sum = await this.sumAll(newObj.vendas)
            dataFormated.push({
                mes: newObj.mes,
                vendas: sum
            })
        }
        return dataFormated
    }
    async sumAll(data) {
        var result = data.reduce((tot, arr) => {
            return tot + arr
        }, 0)

        return result
    }
}

module.exports = new FormatData()