const express = require("express")
const app = express()
const port = 8000

const adminRouter = require("./routes/admin")
const dataRouter = require("./routes/dataManipulation")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", adminRouter)
app.use("/api", dataRouter)

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}/api`);
})
