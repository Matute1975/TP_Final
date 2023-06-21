import express from 'express';
import productos from '../models/productos.js';
import mongoose from "mongoose";

const router=express.Router()

router.get('/', async(req,res)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
       const totalDocumentos= await productos.find({})//cuento la cantidad de docuemntos de la collection.
       
       //console.log("cantidad de documentos:",totalDocumentos.length)
       if (totalDocumentos.length == 0 ){
                const datos=[]                
                res.render('index',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'productos'})
       }else {
            let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
            //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
            const datos= await productos.find({})//busque todos los datos.
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                
                res.render('index',{Mensaje:"",datos,page,pages,selectedTag:'productos'})// envio Mensaje, los datos de la collection, pagina actual, total de paginas
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})    

router.get ('/productos',async (req,res,next)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
       const totalDocumentos= await productos.find({})//cuento la cantidad de docuemntos de la collection.
       //console.log("cantidad de documentos:",totalDocumentos.length)
       if (totalDocumentos.length == 0 ){
                const datos=[]                
                res.render('pages/mostrarProductos',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'productos'})
       }else {
            let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
            //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
            const datos= await productos.find({})//busque todos los datos.
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                
                res.render('pages/mostrarProductos',{Mensaje:"",datos,page,pages,selectedTag:'productos'})// envio Mensaje, los datos de la collection, pagina actual, total de paginas
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

router.get ('/productos/:page',async (req,res,next)=>{//con :page realizo el paginado.
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
       const totalDocumentos= await productos.find({})//cuento la cantidad de docuemntos de la collection.
       //console.log("cantidad de documentos:",totalDocumentos.length)
       if (totalDocumentos.length == 0 ){
                const datos=[]                
                res.render('pages/mostrarProductos',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'productos'})
       }else {
            let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
            //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
            const datos= await productos.find({})//busque todos los datos.
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                
                res.render('pages/mostrarProductos',{Mensaje:"",datos,page,pages,selectedTag:'productos'})// envio Mensaje, los datos de la collection, pagina actual, total de paginas
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})
router.get('/hombre/:page',async (req,res)=>{
        let cantPorPage = 6 //cantidad por pagina a mostrar.
        let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
        try{
            const totalDocumentos= await productos.find({tags: {$in: ["hombre", "unisex"]}})
            if (totalDocumentos.length == 0 ){
                const datos=[]                
                res.render('pages/hombre',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'hombre'})
            }else {
                    let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
                    //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
                    const datos= await productos.find({tags: {$in: ["hombre", "unisex"]}})
                    .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                    .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                    res.render('pages/hombre',{Mensaje:"",datos,page,pages,selectedTag:'hombre'})
            }   
        }catch(error){
            console.log(error)
            res.status(500).json({mensaje:'Error con la DB'})
        }
})

router.get('/mujer/:page',async (req,res)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
        const totalDocumentos= await productos.find({tags: {$in: ["mujer", "unisex"]}})
        if (totalDocumentos.length == 0 ){
            const datos=[]                
            res.render('pages/mujer',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'mujer'})
        }else {
                let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
                //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
                const datos= await productos.find({tags: {$in: ["mujer", "unisex"]}})
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                res.render('pages/mujer',{Mensaje:"",datos,page,pages,selectedTag:'mujer'})
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

router.get('/ninos/:page',async (req,res)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
        const totalDocumentos= await productos.find({tags: {$in: ["niños", "kids"]}})
        if (totalDocumentos.length == 0 ){
            const datos=[]                
            res.render('pages/ninos',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'ninos'})
        }else {
                let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
                //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
                const datos= await productos.find({tags: {$in: ["ninos", "kids"]}})
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                res.render('pages/ninos',{Mensaje:"",datos,page,pages,selectedTag:'ninos'})
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

router.get('/ofertas/:page',async (req,res)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
        const totalDocumentos= await productos.find({promotion: {$gt:0} })
        if (totalDocumentos.length == 0 ){
            const datos=[]                
            res.render('pages/ofertas',{Mensaje:"No existen productos por el momento en oferta.",datos,page,pages:1,selectedTag:'ofertas'})
        }else {
                let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
                //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
                const datos= await productos.find({promotion: {$gt:0} })
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                res.render('pages/ofertas',{Mensaje:"",datos,page,pages,selectedTag:'ofertas'})
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

router.get('/antiblue/:page',async (req,res)=>{
    let cantPorPage = 6 //cantidad por pagina a mostrar.
    let page=req.params.page || 1 //si no recibo una pagina del usuario por defecto empezara en la primera.
    try{
        const totalDocumentos= await productos.find({tags: {$in: ["anti blue","antiblue","Anti Blue","AntiBlue"]}})
        if (totalDocumentos.length == 0 ){
            const datos=[]                
            res.render('pages/antiblue',{Mensaje:"No existen productos por el momento con esta categoria.",datos,page,pages:1,selectedTag:'antiblue'})
        }else {
                let pages=Math.ceil(totalDocumentos.length/cantPorPage)//redondeo la cantidad de paginas hacia arriba si es decimal.
                //console.log("total de archivos",totalDocumentos.length, "total de paginas:",pages)
                const datos= await productos.find({tags: {$in: ["anti blue","antiblue","Anti Blue","AntiBlue"]}})
                .skip((cantPorPage * page) - cantPorPage)//ira saltando de a 6 elementos al mostrar.
                .limit(cantPorPage) //limite de cuantos elementos quiero mostrar por pagina.
                res.render('pages/antiblue',{Mensaje:"",datos,page,pages,selectedTag:'antiblue'})
        }   
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje:'Error con la DB'})
    }
})

// router.post('/agregar-productos',async(req,res)=>{
//     try{
//         await productos.insertMany(req.body)
//         res.status(200).json({mensaje:'Producto agregado'})
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).json({mensaje:'Error interno del sistema'})
//     }
// })


export default router