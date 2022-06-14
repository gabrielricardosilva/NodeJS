import {Request, Response} from 'express'
import * as sobreController from '../controllers/sobreController'

export const sobre = (req:Request, res:Response) =>{
    res.render('pages/sobre',{
        name: 'Peixe',
        lastname: 'R.Goulart',
        produtos: [
        {title: "Minoxidil", price: 70},
        {title: "Manteiga", price: 15},
        {title: "Sabonete", price: 6},
        ]
    })
}