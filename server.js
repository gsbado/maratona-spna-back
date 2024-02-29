const express = require('express') //pega todas as funcionalidades do express e traz para o projeto
const cors = require('cors') //trazendo funcionalidades do cors = qualquer frontend consegue integrar com o backend
const connectDatabase = require ('./database') //importou conexão

const app = express() //instanciando o express (segunda etapa de configurar o express)
const PORTA = 3333 //criando a constante Porta para guardar a informação
app.use(cors()) //instanciando o cors e terminando a configuração para liberar a api a ser integrada pelo nosso front end

connectDatabase() //criou instância da conexão do banco
app.use(express.json()) //dizendo que o tipo de dado que minha api permite enviar é JSON

const router = require('./route')
app.use('/', router)

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`)) //ligando o servidor
