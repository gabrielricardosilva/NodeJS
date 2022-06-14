import { Router, Request, Response } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()

router.get('/',homeController.home)
router.get('/sobre',homeController.home)
router.get('/contato',homeController.home)

router.get('/contato',(req:Request, res:Response) =>{
    res.render('pages/contato')
})

router.get('/sobre',(req:Request, res:Response) =>{
    res.send('pages/sobre')
})
router.get('/home',(req:Request, res:Response) =>{
    res.render('pages/home')
})

router.get('/login',(req:Request, res:Response) =>{
    
    res.render('pages/login',{
        

    })
})
//RECEBER A PAGINA IDADE
router.get('/idade',(req:Request, res:Response) =>{
    res.render('pages/idade')
})  
   




export default router