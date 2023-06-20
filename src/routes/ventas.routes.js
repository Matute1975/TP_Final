import express from 'express';
import ventas from '../models/ventas.js';
import mongoose from "mongoose";

const router=express.Router()

router.post('/agregar-venta',async(req,res)=>{
    try{
        const venta= new ventas(req.body)
        await venta.save()
        res.status(200).json({mensaje:'Se agrego venta en la DB'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error interno del sistema'})
    }
})


export default router