// Vamos incluir nossas modelagens de dados aqui
//É como se fosse a fôrma do nosso objeto

//objeto de flashcard

//id
//title
//description
//link

const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('card', CardSchema)