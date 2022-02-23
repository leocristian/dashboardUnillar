const { Pool, Client } = require("pg")

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'giro',
    password: 'admin'
})

client.connect().then(() => {
    console.log("Banco de dados conectado!")
}).catch((error) => {
    console.error("Erro ao conectar: " + error.message)
})

module.exports = client