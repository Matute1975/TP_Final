import express from 'express';
import carrito from '../models/carrito.js';
import mongoose from "mongoose";

const router=express.Router()

router.post('/agregar-carrito',async(req,res)=>{
    try{
        const producto= new carrito(req.body)
        await producto.save()
        res.status(200).json({mensaje:'Producto agregado al carrito'})
    }
    catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error interno del sistema'})
    }
})

export default router