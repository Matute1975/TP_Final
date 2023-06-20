import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';
// import mongoose from "mongoose";
import morgan from 'morgan';
import dotenv from 'dotenv';
import flash from 'connect-flash';
import session from "express-session";
import MethodOverride from "method-override";
import passport from 'passport';
import config from '../config/index.js';//variables de entorno
import '../mongodb.js';
import usuariosRouter from './routes/usuarios.routes.js';
import productosRouter from './routes/productos.routes.js';//necesaria para que reconozca las rutas.
import publicidadRouter from './routes/publicidad.routes.js';//necesaria para que reconozca las rutas.
import ventasRouter from './routes/ventas.routes.js';
import carritoRouter from './routes/carrito.routes.js';
import productos from './models/productos.js';
//import {siguiente} from '../public/js/misFunciones.js'//importo mis funciones.
const app=express()

// Obtener la ruta del directorio actual utilizando type:module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Seteos inciales:
app.use(morgan('dev'))
app.set('views', path.join(__dirname, 'views'))//configuro las rutas de las views
app.set('view engine','ejs') //defino motor de planitlla ejs.
app.use(express.static('public'))//para que me reconozca los archivos estaticos como css, imagenes, etc.

//middlewars
app.use(bodyParser.json())//para que reconozca los archivos json que pueda recibir del front- (envia cliente).
app.use(bodyParser.urlencoded({extended:true}))//para que pueda entender formularios.

//rutas
app.use(productosRouter)//necesaria para llamar las rutas desde navegador definidas en /src/routes/productos.routes.js
app.use(publicidadRouter)//necesaria para llamar las rutas desde navegador definidas en /src/routes/publicidad.routes.js


// app.get('/',async (req,res)=>{ //pagina inicial.
//     try{
//         const muestro= await productos.find({})
//         //console.log(muestroTodo)
//         let cantidadPaginas=muestro.length/6
//         if(cantidadPaginas === 0){
//             res.render('pages/index',{Mensaje:"No existen productos que mostrar en este momento.",muestro: muestro, inicial:inicial, incremento:incremento, cantidadPaginas:cantidadPaginas, page:page})
//         }else{
//             //console.log("Parte decimal:", (cantidadPaginas % 1))
//             //console.log("parte entera:", (Math.floor(cantidadPaginas)))
//             cantidadPaginas= cantidadPaginas % 1 > 0 ? Math.ceil(cantidadPaginas) : Math.floor(cantidadPaginas) //redondeo hacia arriba si es decimal (Math.ceil) o no si es entera (Math.floor).
//             res.render('pages/index',{Mensaje:"", muestro: muestro, inicial:inicial, incremento:incremento, cantidadPaginas:cantidadPaginas, page:page})//paso un objeto de esta manera
//         }
//     }catch(error){
//         console.log(error)
//         res.status(500).json({mensaje:'Error con la DB'})
//     }
   
    
// })

app.get('/*',(req,res)=>{
    res.status(404).json({mensaje:'Error 404 No existe la direccion ingresada.'})
})

app.listen(config.PORT,()=>{ //configuro puerto de escucha de la APP.
    console.log(`Servidor conectado en el puerto ${config.PORT}`)
})

/* 
//rutas que hice para crear y probar la DB
app.use(express.json()) //lo puse para crear y probar la DB, no va
app.get('/',(req,res)=>{
    res.send('Hola mundo')
})
app.use('/usuarios',usuariosRouter)
app.use('/productos',productosRouter)
app.use('/ventas',ventasRouter)
app.use('/carrito',carritoRouter)
 */