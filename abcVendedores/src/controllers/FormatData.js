const _ = require("underscore")

class FormatData {
    async formatByYears(data) {
        const years = ["2020", "2021", "2022"]
        const dataFormated = []
        var objFormated = {}

        for (let index = 0; index < years.length; index++) {
            
            objFormated = { label: years[index], backgroundColor: '#2452BD', data: [] }
            

        }
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