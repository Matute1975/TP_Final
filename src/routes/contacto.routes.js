import express from 'express';

const router=express.Router()

router.get('/contacto',(req,res)=>{
    res.render('pages/contacto')
})


export default router