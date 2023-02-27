const mariadb = require('mariadb')

const credenciales = {
    host: "127.0.0.1",
    port:"3307",
    user: "root",
    password: "0",
    database: "mariadb"
}

const connectDB = async ()=>{
    const pool = await mariadb.createConnection(credenciales)
    return pool
}

module.exports = connectDB