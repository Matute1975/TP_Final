//modelo de collection Carrito:
import { Schema,model } from "mongoose";

const CarritoSchema = new Schema({
    products:[{productID:{ type: String, required: true}, //ID de producto de la colection productos
                qty:{type: Number, required: true},          //Cantidad elejida por el comprador.
                price:{type: Number, required: true},        //precio final del producto de la collection productos (price), ya tiene el descuento.
                promotion:{ type: Number, required: true},    //Mostrara el procentaje del Descuento aplicado, lo trae de productos.
                subtotal:{ type: Number, required: true },   //resultado de multiplicar qty * price
                color: {type: String, required: true},       //color elegido.
                trademark: {type: String, required: true},   //marca del producto de la collection productos.
                model: {type: String, required: true},       //modelo del producto de la collection productos.
                description: {type: String},             //descripcion del producto de la collection productos.

           }],      //products es un arreglo, pueden agregarse varios productos.

    total:{         //precio total de lo que contiene el carrito
        type: Number,
        required: true
    },
    userID:{  //ID usuario comprador
        type: String,
        required: true,        
    },    
})
export default model('carrito',CarritoSchema,'carrito')//se agrega dos veces carrito para que lo cree en singular.