import connectDB from "./database"
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Mortal Kombat API Dockerizada!")
})

app.get('/personajes', async (req, res) => {
    const conn = await connectDB()
    const rows = await conn.query("SELECT * FROM personajes")
    conn.end()
    res.status(200).json(rows)
})

const port = 3003

app.listen(port, () => {
    console.log(`escuchando en: ${port}`)
})