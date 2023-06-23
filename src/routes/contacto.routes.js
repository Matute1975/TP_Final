import express from 'express';
import Mensajes from '../models/mensajeContacto.js'

const router=express.Router()

router.get('/contacto',(req,res)=>{
    res.render('pages/contacto',{Mensaje:''})
})

router.post('/contacto', async (req,res)=>{
    const nombre= req.body.suNombre
    const mail= req.body.suCorreo
    const texto= req.body.suMensaje
    try{
        const nuevoMensaje= new Mensajes({name: nombre, email: mail, message: texto})
        await nuevoMensaje.save()
        console.log('Mensaje guarado correctamente')
        res.render('pages/contacto',{Mensaje:'¡Mensaje enviado con éxito!'})
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
    
})


export default router