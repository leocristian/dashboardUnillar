
const client = require("./services/database")
const xlsx = require("node-xlsx")
const fs = require("fs")

async function initializeDB(tablename) {
    const sql = `CREATE TABLE IF NOT EXISTS ${tablename}(
                    ano VARCHAR(4),
                    mes VARCHAR(5),
                    cod INT, 
                    vendedor VARCHAR(40), 
                    filial INT,
                    qt_docs INT,
                    qt_clientes INT,
                    qt_prod INT,
                    tkm_valor FLOAT,
                    tkm_prod FLOAT,
                    vendas FLOAT,
                    custo_1 FLOAT,
                    custo_2 FLOAT,
                    custo_medio FLOAT,
                    lucro_bruto FLOAT,
                    marg FLOAT
                );`

    await client.query(sql)
    console.log("Tabela criada com sucesso")
}

async function populateDB(filename, tablename) {
    
    const allData = await getData(filename)
    const columns = "(ano, mes, cod, vendedor, filial, qt_docs, qt_clientes, qt_prod, tkm_valor, tkm_prod, vendas, custo_1, custo_2, custo_medio, lucro_bruto, marg)"
    allData.forEach(element => {
        sql = `INSERT INTO ${tablename} ${columns} VALUES (
                    '${element[0]}',
                    '${element[1]}',
                    ${element[2]},
                    '${element[3]}',
                    ${element[4]},
                    ${element[5]},
                    ${element[6]},
                    ${element[7]},
                    ${element[8]},
                    ${element[9]},
                    ${element[10]},
                    ${element[11]},
                    ${element[12]},
                    ${element[13]},
                    ${element[14]},
                    ${element[15]}
                );`
        console.log(`Vendedor ${element[3]} inserido na tabela ${tablename}!`);
        client.query(sql).then(`Vendedor ${element[1]} inserido na tabela ${tablename}!`).catch((err) => {
            console.log(err);
        })
    });
}

async function getData(filename) {
    const plan = await xlsx.parse(`./services/data/${filename}`)
    return plan[0].data
}

module.exports = { initializeDB, populateDB }
