const express = require("express")
const app = express()
const port = 8000

const adminRouter = require("./routes/admin")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", adminRouter)

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}/api`);
})
