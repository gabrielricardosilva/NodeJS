import {Request, Response} from 'express'
import * as contatoController from '../controllers/contatoController'

export const contato = (req:Request, res:Response) =>{
    res.render('pages/home',{
        name: 'Peixe',
        lastname: 'Joao Paulo',
        produtos: [
        {title: "Minoxidil", price: 70},
        {title: "Manteiga", price: 15},
        {title: "Sabonete", price: 6},
        ]
    })
}