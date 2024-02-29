// Vamos incluir a configuração do banco de dados aqui
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const connectDatabase = () => {
    console.log('Conectando com o MongoDB')

    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Mongo conectado com sucesso!'))
    .catch(error => console.log(error))
}

module.exports = connectDatabase