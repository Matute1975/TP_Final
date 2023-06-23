import express from 'express';

const router=express.Router()

router.get('/terminos&condiciones',(req,res)=>{
    res.render('pages/terminos&condiciones')
})


export default router