const mongoose = require("mongoose")

const user = process.env.USER
const password = process.env.PASSWORD


const connect = () => {
    mongoose.connect(`mongodb+srv://${user}:${password}@catalogolivros.n33k6ym.mongodb.net/?retryWrites=true&w=majority&appName=CatalogoLivros`)

    const connection = mongoose.connection

    connection.on("error", ()=>{
        console.error('Erro ao conectart com o mongoDB')
    })

    connection.on("open", ()=>{
        console.log('Conectado ao mongoDB com sucesso')
    })

}

connect()


module.exports = mongoose