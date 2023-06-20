import express from 'express';
//import prueba from '../models/prueba.js';
import usuarios from '../models/usuarios.js';

const router=express.Router()

//primer metodo de prueba.
// router.post('/agregar-usuario',async(req,res)=>{
//     try{
//         const user= new prueba(req.body)
//         await user.save()
//         res.status(200).json({mensaje:'Usuario creado'})
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).json({mensaje:'Error interno del sistema'})
//     }
// })

router.post('/agregar-usuario',async(req,res)=>{
        try{
            const user= new usuarios(req.body)
            await user.save()
            res.status(200).json({mensaje:'Usuario creado con exito'})
        }
        catch(error){
            console.log(error)
            res.status(500).json({mensaje:'Error interno del sistema'})
        }
    })


export default router