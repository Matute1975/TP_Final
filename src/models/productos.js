//modelo de collection Productos:
import { Schema,model } from "mongoose";

const ProductosSchema = new Schema({
    trademark:{              //Marca
        type: String,
        required: true,
    },
    model:{             //modelo de lente
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    tags:{
        type: [String], //array paralabras claves, servira para realizar busquedas.
        required: true,
    },
    description:{       //descripcion.
        type: String,
        required: true,
    },
    costPrice:{         //precio de costo.
        type: Number,
        required: true,
    },
    surchargePercentage:{  //porcentaje de racargo.
        type: Number,
        default: 0.5,    //50% de recargo por defecto
        min:0.5,
        max: 1.5,        //recargo maximo de %150
    },
    promotion:{
        type:Number,
        default: 0,
        max: 0.4,        //descuento maximo del 40%
    },
    price:{             //precio final. Se autocompleta
        type:Number,
    },
    stock: {            //cantidad disponibles.
        type: Number,
        required: true,
        min: 0,
    },
    image:{
        type: [String], //array de objeto, por si hay varios imagenes.
        required: true,
    },
    color:{
        type: [String], //array de objeto, por si hay varios colores.
    },
 /*    ratings:{   //valoraciones acumulador de estrellas (depende de cuantas estrellas elija sera la misma, 1 pto por estrella 2 ptos por 2 estrellas,etc)
        type: Number, //acumulador de votos
        default:0,
    },
    votes:{         //acumulador de a uno, de votos de estrellas. Para promediar el ratings.
        type: Number, 
        default:0,
    }, */

 })
//Definicion de logica del autompletado de la propiedad precio final con el metodo pre:

// ProductosSchema.pre('save',function(calcularPrecioFinal){
    
//     const recargo = this.surchargePercentage
//     const promocion = this.promotion
//     const precioConRecargo = this.costPrice * (1 + recargo)
//     const precioFinal = precioConRecargo * (  1 - promocion)
//     this.price = precioFinal
//     calcularPrecioFinal()
// })

export default model('productos',ProductosSchema)
