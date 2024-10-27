import "dotenv/config"
import express from "express"
import cors from "cors"

import conn from "./config/conn.js"

//importar models
import "./src/models/index.js"

//importar rotas
import "./src/routes/index.js"

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

conn.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor on http://localhost:${PORT}`)
    })
})
.catch(error => console.error(error))

//app.use("BASE_URL", ROUTER)

app.get("*", (req, res) => {
    res.status(404).json({message: "Página não encontrado"})
})