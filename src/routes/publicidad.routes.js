import express from 'express';
import publicidad from '../models/publicidad.js';
import mongoose from "mongoose";

const router=express.Router()

router.post('/subscribirme',async (req,res)=>{
    const nuevoSubscriptor= req.body.correoPublicidad
    //console.log("esto tiene nuevoSubscriptor",nuevoSubscriptor )
    try{
        const result= await publicidad.findOne({email: nuevoSubscriptor})
        if (result !== null){
            //console.log("esto tiene result:", result)
            console.log("El mail ya existe en nuestra base de datos.")
            res.render('pages/subscribirme',{Mensaje:"¡La direccion ingresada ya se encuentra registrada en nuestra base de datos, recuerda revisar la carpeta Spam de tu correo electrónico!"})
        }else{
        const subscripcion= new publicidad({email: nuevoSubscriptor})
        await subscripcion.save()
        console.log("se guardo el correo con exito")
        res.render('pages/subscribirme',{Mensaje:"¡Gracias por subscribirte a nuestra pagina, en breve estaras recibiendo nuestras ofertas imperdibles, recuerda revisar la carpeta Spam de tu correo electrónico!"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

router.get('/unsubscribe',(req,res)=>{
    res.render('pages/unsubscribe',{Mensaje:''}) 
})

router.post('/unsubscribe',async (req,res)=>{
    const unsubscribe= req.body.unsubscribe
    console.log("esto tiene unsubscribe",unsubscribe)
    try{
        const result= await publicidad.findOne({email: unsubscribe})
        if (result == null){
            console.log("esto tiene result:", result)
            console.log("El mail no existe en nuestra base de datos.")
            res.render('pages/unsubscribe',{Mensaje:"¡La dirección ingresada NO se encuentra registrada en nuestra base de datos, intente nuevamente!..."})
        }else{
            console.log("el id es:", result.id)
            await publicidad.deleteOne({_id:result.id})
            res.render('pages/unsubscribe',{Mensaje:"¡De suscripción correcta, vuelve cuando quieras!"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

export default router