// Vamos incluir nossas rotas aqui

const { getAll, create } = require('./controller')
const express = require('express')
const router = express.Router()

//vai permitir entregar como resposta de uma requisição a lista de flashcards

router.get('/cards', getAll)

router.post('/cards', create)

module.exports = router