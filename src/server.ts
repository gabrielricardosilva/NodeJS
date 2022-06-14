import express,{Request, Response} from 'express'
import mainRoutes from './routes/index'
import path from 'path'
//importando mustache
import mustache from 'mustache-express'
//importando dotenv
import dotenv from 'dotenv'

//usando EXPRESS
const server = express()

//rodar a funçao dotenv
dotenv.config()

//configuração do mustache
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))

//usando o mustache 
server.engine('mustache',mustache())

//criando a rota para nossa pasta PUBLIC
server.use(express.static(path.join(__dirname,'../public')))

//ENVIADO OS DADOS VIA POST
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

//página não encontrada
server.use((req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada!')
})

server.listen(process.env.PORT)