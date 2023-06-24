import express from 'express';

const router=express.Router()

router.get('/terminosYCondiciones',(req,res)=>{
    res.render('pages/terminosYCondiciones')
})

router.get('/politicasDePrivacidad',(req,res)=>
    res.render('pages/politicasDePrivacidad')
)

router.get('/terminosDelServicio',(req,res)=>
    res.render('pages/terminosDelServicio')
)

router.get('/sobreLaTienda',(req,res)=>
    res.render('pages/sobreLaTienda')
)




export default router