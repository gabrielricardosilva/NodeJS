import {Request, Response} from 'express'


export const home = (req:Request, res:Response) =>{
    res.render('pages/home',{
        name: 'Peixe',
        lastname: 'Zanocelo',
        produtos: [
        {title: "Minoxidil", price: 70},
        {title: "Manteiga", price: 15},
        {title: "Sabonete", price: 6}
        ]
    })
}