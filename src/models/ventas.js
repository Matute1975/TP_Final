//modelo de collection Ventas:
import { Schema,model } from "mongoose";

const VentasSchema = new Schema({
    sale:[{productID:{ type: String, required: true},   //ID de producto de la colection productos
           qty:{type: Number, required: true},          //Cantidad elejida por el comprador.
           price:{type: Number, required: true},        //precio final del producto de la collection productos (price), ya tiene el descuento.
           promotion:{ type: Number, required: true},    //Mostrara el procentaje del Descuento aplicado, lo trae de productos.
           subtotal:{ type: Number, required: true },   //resultado de multiplicar qty * price
           color: {type: String, required: true},       //color elegido.
           trademark: {type: String, required: true},   //marca del producto de la collection productos.
           model: {type: String, required: true},       //modelo del producto de la collection productos.
           description: {type: String},             //descripcion del producto de la collection productos.
           }],      //sale es un arreglo, pueden agregarse varios productos.

    total:{         //total final de la venta, sumatoria de todos los subtotales del array sale.
        type: Number,
        required: true
    },
    userID:{  //ID usuario comprador
        type: String,
        required: true,        
    },
    saleDate:{  //FECHA DE VENTA, se carga automaticamente al grabar el registro.
        type: Date,
        default: Date.now,
    },
    
})
export default model('ventas',VentasSchema)